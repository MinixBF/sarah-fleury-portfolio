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
            { path: '', redirectTo: '/', pathMatch: 'full' }, // Redirection
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
            {
                path: 'amelot',
                loadComponent: () =>
                    import('./pages/project/project.component').then(
                        m => m.ProjectComponent
                    ),
            },
            {
                path: 'damremont',
                loadComponent: () =>
                    import('./pages/project/project.component').then(
                        m => m.ProjectComponent
                    ),
            },
            {
                path: 'neuilly',
                loadComponent: () =>
                    import('./pages/project/project.component').then(
                        m => m.ProjectComponent
                    ),
            },
        ],
    },
    { path: '**', redirectTo: '' },
];
