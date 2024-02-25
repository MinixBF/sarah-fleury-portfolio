import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'projects',
        children: [
            {
                path: 'vienne',
                loadComponent: () =>
                    import('./pages/project/project.component').then(
                        m => m.ProjectComponent
                    ),
            },
            {
                path: 'jeuneurs',
                loadComponent: () =>
                    import('./pages/project/project.component').then(
                        m => m.ProjectComponent
                    ),
            },
            {
                path: 'republique',
                loadComponent: () =>
                    import('./pages/project/project.component').then(
                        m => m.ProjectComponent
                    ),
            },
            {
                path: 'mermoz',
                loadComponent: () =>
                    import('./pages/project/project.component').then(
                        m => m.ProjectComponent
                    ),
            },
        ],
    },
    { path: '**', redirectTo: '' },
];
