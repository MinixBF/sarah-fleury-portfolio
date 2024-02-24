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
import { provideAnimations } from '@angular/platform-browser/animations';

const scrollConfig: InMemoryScrollingOptions = {
    scrollPositionRestoration: 'top',
};

const routerConfig: RouterConfigOptions = {
    onSameUrlNavigation: 'reload',
};

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideRouter(
            routes,
            withComponentInputBinding(),
            withViewTransitions(),
            withRouterConfig(routerConfig),
            withInMemoryScrolling(scrollConfig)
        ),
    ],
};
