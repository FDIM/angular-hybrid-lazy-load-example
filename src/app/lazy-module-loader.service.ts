import {
    ViewContainerRef,
    NgModuleFactoryLoader,
    Injector,
    NgModuleRef
} from '@angular/core';

// working example that was adapted
// https://stackblitz.com/edit/angular-lazy-loading-without-router?file=app%2Fapp.module.ts
export class LazyModuleLoader {
    private loader: NgModuleFactoryLoader;
    private newInjector: Injector;
    private waitingInit?: any;
    private pending: { [prop: string]: Promise<NgModuleRef<any>> } = {};
    private loaded: { [prop: string]: any } = {};

    public static $inject = [
        '$injector',
        '$q'
    ];
    constructor(
        private $injector: any,
        private $q: any
    ) { }

    public init(loader: NgModuleFactoryLoader, injector: Injector) {
        this.loader = loader;
        this.newInjector = injector;
        if (this.waitingInit) {
            this.waitingInit.resolve();
            this.waitingInit = undefined;
        }
    }

    public get(value: string | any): boolean {
        return this.loaded[this.normalize(value)];
    }

    public isLoaded(value: string | any): boolean {
        return !!this.loaded[this.normalize(value)];
    }

    public load(value: string | any): Promise<NgModuleRef<any>> {
        // support actual module with static fields
        value = this.normalize(value);
        let promise;
        // is module loading?
        if (this.pending[value]) {
            promise = this.pending[value];
        } else if (!this.loader) {
            if (!this.waitingInit) {
                this.waitingInit = this.$q.defer();
            }
            promise = this.pending[value] = this.waitingInit.promise.then(() => {
                return this.loadAndInit(value);
            }) as any;
        } else if (!this.loaded[value]) {
            // if its not loaded, start loading it and return promise
            promise = this.pending[value] = this.loadAndInit(value);
        } else {
            promise = this.$q.resolve(this.loaded[value]) as any;
        }
        return promise;
    }

    private loadAndInit(value: string | any): Promise<NgModuleRef<any>> {
        return this.loader.load(value).then(factory => {

            const module = factory.create(this.newInjector);

            const lazyModules: string[] = module.injector.get('LAZY_NG_MODULES');
            if (lazyModules.length > 0) {
                this.$injector.loadNewModules(lazyModules);
            }
            this.loaded[value] = module;
            delete this.pending[value];
            return module;
        });
    }

    public loadAndCreateComponent(value: string | any, viewRef: ViewContainerRef, componentName: string): Promise<NgModuleRef<any>> {
        return this.load(value).then((module: NgModuleRef<any>) => {
            const entryComponentType = module.injector.get(componentName || 'LAZY_NG_MODULES');
            if (entryComponentType) {
                const componentFactory = module.componentFactoryResolver.resolveComponentFactory(entryComponentType);
                viewRef.createComponent(componentFactory);
            }
            return module;
        });
    }

    private normalize(value: string | any): string {
        if (value && value.Path) {
            value = value.Path;
        }
        return value;
    }
}
