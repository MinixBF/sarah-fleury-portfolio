import {
    trigger,
    state,
    style,
    transition,
    animate,
    query,
    stagger,
} from '@angular/animations';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
    Component,
    DestroyRef,
    ElementRef,
    HostListener,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren,
    createPlatform,
    inject,
    signal,
} from '@angular/core';
import {
    NavigationEnd,
    Router,
    RouterModule,
    RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, RouterModule, NgOptimizedImage],
    animations: [
        trigger('header', [
            transition(':enter', [
                query(
                    '*',
                    style({ opacity: 0, transform: 'translateY(-15%)' })
                ),
                query(
                    '*',
                    stagger('300ms', [
                        animate(
                            '.3s ease-in',
                            style({ opacity: 1, transform: 'translateY(0)' })
                        ),
                    ])
                ),
            ]),
        ]),
        trigger('fadeIn', [
            transition(':enter', [
                style(true ? { opacity: 0, height: 0 } : { opacity: 0 }),
                animate(
                    200,
                    style(
                        true
                            ? { opacity: 1, height: 'fit-content' }
                            : { opacity: 1 }
                    )
                ),
            ]),
        ]),
    ],
})
export class AppComponent implements OnInit {
    currentYear = new Date().getFullYear();

    skill = signal('photoshop');
    skillCount = signal(0);

    isDark!: boolean;

    isHome: boolean = true;

    private destroyRef = inject(DestroyRef);
    private router = inject(Router);

    @ViewChildren('navbarLinks') navbarLinks!: QueryList<ElementRef>;
    @ViewChild('navbarToggle') navbarToggle!: ElementRef;

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e: Event) {
        // After 100vh scroll, show the navbar
        const scroll = window.scrollY;

        // Si on est sur la page "projets" mettre le texte en bancha-800 seulement peut importe la position
        if (this.router.url.startsWith('/projects')) {
            return;
        }
    }

    ngOnInit(): void {
        // If router is home page display hero section
        // else hide hero section
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe(event => {
                const isHome =
                    (event as NavigationEnd).url === '/' ||
                    (event as NavigationEnd).url.startsWith('/#') ||
                    (event as NavigationEnd).url.startsWith('/%23');
                this.isHome = isHome;
            });

        this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    toggleNavbar() {}
}
