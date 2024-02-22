import { ApplicationConfig } from '@angular/core';
import {
    InMemoryScrollingOptions,
    RouterConfigOptions,
    provideRouter,
    withComponentInputBinding,
    withInMemoryScrolling,
    withRouterConfig,
    withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';

const scrollConfig: InMemoryScrollingOptions = {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
};

const routerConfig: RouterConfigOptions = {
    onSameUrlNavigation: 'reload',
};

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            routes,
            withComponentInputBinding(),
            withViewTransitions(),
            withRouterConfig(routerConfig),
            withInMemoryScrolling(scrollConfig)
        ),
    ],
};
