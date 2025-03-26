import { ApplicationConfig } from '@angular/core';
import {
    InMemoryScrollingOptions,
    RouterConfigOptions,
    provideRouter,
    withComponentInputBinding,
    withEnabledBlockingInitialNavigation,
    withInMemoryScrolling,
    withRouterConfig,
    withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

const scrollConfig: InMemoryScrollingOptions = {
    scrollPositionRestoration: 'top',
};

export const appConfig: ApplicationConfig = {
    providers: [
        // provideAnimations(),
        provideRouter(
            routes,
            // withInMemoryScrolling({
            //     // anchorScrolling: 'enabled',
            //     scrollPositionRestoration: 'top',
            // }),
            // withEnabledBlockingInitialNavigation(),
            withComponentInputBinding()
        ),
    ],
};
