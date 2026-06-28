import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    Injector,
    OnInit,
    Signal,
    inject,
    signal,
    viewChild,
    viewChildren,
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
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, RouterModule],
    host: {
        class: 'bg-cream-75 dark:bg-gray-800 h-full flex flex-col',
    },
    animations: [
        trigger('toggleNavbar', [
            state(
                'true',
                style({
                    height: '100%',
                })
            ),
            transition('false => true', animate('300ms ease-in')),
            transition('true => false', animate('300ms ease-out')),
        ]),
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('300ms', style({ opacity: 1 })),
            ]),
        ]),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly router = inject(Router);
    private readonly injector = inject(Injector);

    readonly currentYear = new Date().getFullYear();

    readonly toggleNavbar = signal(false);
    readonly isMobile: Signal<boolean> = signal(window.innerWidth < 768);

    readonly navBar = [
        { name: 'Projets', scrollTo: 'projects' },
        { name: 'Compétences', scrollTo: 'skills' },
        { name: 'A propos', scrollTo: 'about-us' },
    ];

    readonly navbarLinks = viewChildren<ElementRef>('navbarLinks');
    readonly navbarToggle = viewChild.required<ElementRef>('navbarToggle');

    ngOnInit(): void {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe(event => {
                const scrollTargets: Record<string, string> = {
                    '/projects': 'projects',
                    '/skills': 'skills',
                    '/about-us': 'about-us',
                };
                const target = scrollTargets[event.url];
                afterNextRender(
                    () => {
                        if (target) {
                            this.scrollTo(target);
                        } else {
                            const scrollContainer =
                                document.querySelector('.overflow-y-auto');
                            (scrollContainer ?? window).scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });
                        }
                    },
                    { injector: this.injector }
                );
            });
    }

    onToggleNavbar(): void {
        this.toggleNavbar.update(value => !value);
    }

    scrollTo(id: string | undefined): void {
        if (!id) {
            return;
        }
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
