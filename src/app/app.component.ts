import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';
import {
    CommonModule,
    NgOptimizedImage,
    ViewportScroller,
} from '@angular/common';
import {
    Component,
    DestroyRef,
    ElementRef,
    HostListener,
    OnInit,
    QueryList,
    Signal,
    ViewChild,
    ViewChildren,
    inject,
    signal,
} from '@angular/core';
import {
    NavigationEnd,
    Router,
    RouterModule,
    RouterOutlet,
} from '@angular/router';
import { delay, filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, RouterModule],
    host: {
        class: 'bg-cream-75 dark:bg-gray-800 h-full flex flex-col',
    },
    animations: [
        // Animation for the header when the toogleNavbar is true
        // Transiton height from fit-content to 100vh
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
})
export class AppComponent implements OnInit {
    currentYear = new Date().getFullYear();

    skill = signal('photoshop');
    skillCount = signal(0);

    isHome: boolean = true;
    navId: string | null = null;
    toggleNavbar: boolean = false;
    isMobile: Signal<boolean> = signal(window.innerWidth < 768);

    navBar = [
        { name: 'Projets', scrollTo: 'projects' },
        { name: 'Compétences', scrollTo: 'skills' },
        { name: 'A propos', scrollTo: 'about-us' },
    ];

    private destroyRef = inject(DestroyRef);
    private router = inject(Router);
    private viewportScroller = inject(ViewportScroller);

    @ViewChildren('navbarLinks') navbarLinks!: QueryList<ElementRef>;
    @ViewChild('navbarToggle') navbarToggle!: ElementRef;

    ngOnInit(): void {
        // If router is home page display hero section
        // else hide hero section
        // this.router.events
        //     .pipe(
        //         filter(event => event instanceof NavigationEnd),
        //         takeUntilDestroyed(this.destroyRef)
        //     )
        //     .subscribe(event => {
        //         if (this.navId !== null) {
        //             const element = document.getElementById(this.navId);
        //             setTimeout(() => {
        //                 if (element) {
        //                     element.scrollIntoView({
        //                         behavior: 'smooth',
        //                         block: 'start',
        //                     });
        //                     this.navId = null;
        //                 }
        //             }, 300);
        //         } else {
        //             window.scrollTo(0, 0);
        //         }
        //         const isHome =
        //             (event as NavigationEnd).url === '/' ||
        //             (event as NavigationEnd).url.startsWith('/#') ||
        //             (event as NavigationEnd).url.startsWith('/%23');
        //         this.isHome = isHome;
        //     });
        // this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe(event => {
                console.log(event);

                if (event.url === '/projects') {
                    setTimeout(() => {
                        this.scrollTo('projects');
                    }, 200);
                } else if (event.url === '/skills') {
                    setTimeout(() => {
                        this.scrollTo('skills');
                    }, 200);
                } else if (event.url === '/about-us') {
                    setTimeout(() => {
                        this.scrollTo('about-us');
                    }, 200);
                } else {
                    setTimeout(() => {
                        const scrollContainer =
                            document.querySelector('.overflow-y-auto');
                        if (scrollContainer) {
                            scrollContainer.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });
                        } else {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    });
                }
            });
    }

    scrollTo(id: string | undefined) {
        if (id === undefined) {
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            console.log('scrolling to', id);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
