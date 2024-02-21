import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'projects/:id',
        loadComponent: () =>
            import('./pages/project/project.component').then(
                m => m.ProjectComponent
            ),
    },
    { path: '**', redirectTo: '' },
];
