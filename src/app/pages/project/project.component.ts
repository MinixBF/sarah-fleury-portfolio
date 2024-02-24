import { CommonModule, IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService, Projet } from 'src/app/core/data.service';

@Component({
    selector: 'project',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage, RouterModule],
    providers: [
        {
            provide: IMAGE_CONFIG,
            useValue: {
                breakpoints: [
                    16, 48, 96, 128, 384, 640, 750, 828, 1080, 1200, 1920,
                ],
            },
        },
    ],
    template: `
        <section class="bg-cream-75 dark:bg-gray-800" #projects>
            <div
                class="relative mx-auto flex max-w-screen-1xl flex-col gap-4 px-8 py-24 lg:grid lg:grid-cols-2 lg:gap-8">
                <a
                    [routerLink]="['', '#projects']"
                    class="col-span-2 flex items-center gap-2 whitespace-nowrap text-lg font-semibold text-bancha-800 underline hover:text-bancha-900 dark:font-normal dark:text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-bancha-800 hover:text-bancha-900 dark:text-white dark:hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Retour aux projets
                </a>
                <img
                    [srcset]="
                        project.imagePath +
                        'cover1x.jpg 1x,' +
                        project.imagePath +
                        'cover2x.jpg 2x,' +
                        project.imagePath +
                        'cover3x.jpg 3x'
                    "
                    loading="lazy"
                    priority
                    class="h-full rounded-lg"
                    alt="Sarah Fleury portrait" />

                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-4">
                        <h2
                            class="whitespace-nowrap font-satista text-5xl font-semibold text-bancha-800 dark:font-normal dark:text-white">
                            {{ project.title }}
                        </h2>
                        <span
                            class="text-lg text-bancha-800 dark:text-gray-400">
                            {{ project.shortDesc }}
                        </span>
                    </div>
                    <p
                        class="text-1xl text-bancha-700 dark:text-gray-400 lg:col-span-2"
                        [innerHTML]="project.description">
                        <!-- Ajouter quand on est sur un petit écran, la possibilité de "voir plus" pour afficher le texte -->
                    </p>
                    <span class="text-bancha-700 dark:text-gray-400">
                        {{ project.credits }}
                    </span>
                </div>
            </div>

            <!-- PLAN -->
            <div
                class="mx-auto flex max-w-screen-1xl flex-col gap-8 px-4 py-8 lg:flex-row lg:gap-8">
                <div class="flex flex-col items-center gap-4">
                    <span
                        class="whitespace-nowrap font-satista text-4xl font-semibold text-bancha-800 dark:font-normal dark:text-white">
                        Existant
                    </span>
                    <img
                        [ngSrc]="project.imagePath + existingPath + '.png'"
                        loading="lazy"
                        width="4795"
                        height="2507"
                        sizes="50vw"
                        class="object-cover" />
                </div>

                <div class="flex flex-col items-center gap-4">
                    <span
                        class="whitespace-nowrap font-satista text-4xl font-semibold text-bancha-800 dark:font-normal dark:text-white">
                        Projet
                    </span>
                    <img
                        [ngSrc]="project.imagePath + proposalPath + '.png'"
                        loading="lazy"
                        sizes="50vw"
                        width="4771"
                        height="2475"
                        class="object-cover" />
                </div>
            </div>

            <!-- IMAGES -->
            <div
                class="mx-auto grid max-w-screen-1xl grid-cols-1 gap-4 px-4 py-8 md:grid-cols-6">
                @for (item of project.imagesGrid; track $index) {
                    <img
                        [src]="project.imageGridPath + item.path"
                        class="h-full rounded-lg object-cover"
                        loading="lazy"
                        [ngClass]="item.class ?? 'col-span-3'"
                        alt="{{ item.alt }}" />
                }
            </div>

            <!-- Previous Projet - Back to top of project - Next Projet -->
            <div class="mx-auto max-w-screen-1xl px-4">
                <div
                    class="flex h-12 w-full items-center justify-between  rounded-lg bg-bancha-500 dark:bg-gray-900">
                    <a
                        [routerLink]="'/projects/' + project.nextProject"
                        class="pl-4 text-cream-75 underline transition-colors duration-300 hover:text-bancha-800 dark:text-white dark:hover:text-white sm:pl-32 ">
                        Projet précédent
                    </a>

                    <!-- Arrow up -->
                    <a (click)="scrollTo('projects')" class="cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-cream-75 transition-colors duration-300 hover:text-bancha-800 dark:text-white dark:hover:text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </a>
                    <a
                        [routerLink]="'/projects/' + project.previousProject"
                        class="underlin pr-4 text-cream-75 transition-colors duration-300 hover:text-bancha-800 dark:text-white dark:hover:text-white sm:pr-32">
                        Projet suivant
                    </a>
                </div>
            </div>
        </section>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
    @Input() projectId!: string;

    project!: Projet;

    proposalPath = 'proposal';
    existingPath = 'existing';

    constructor(
        private readonly projectService: DataService,
        private readonly route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.project =
            this.projectService.getProject(
                this.route.snapshot.paramMap.get('id') as string
            ) ?? ({} as Projet);
    }

    scrollTo(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
