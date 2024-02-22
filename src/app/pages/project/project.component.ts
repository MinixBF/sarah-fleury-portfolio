import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService, Projet } from 'src/app/core/data.service';

@Component({
    selector: 'project',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage, RouterModule],
    template: `
        <section class="bg-cream-75 dark:bg-gray-800">
            <div
                class="flex flex-col lg:grid lg:grid-cols-2 max-w-screen-1xl px-16 py-24 mx-auto gap-4 lg:gap-8 relative">
                <a
                    [routerLink]="['', '#projects']"
                    class="text-xl text-bancha-800 dark:text-white font-semibold dark:font-normal whitespace-nowrap flex items-center gap-2 underline col-span-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-bancha-600 hover:text-bancha-800 dark:text-white dark:hover:text-white"
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
                    [ngSrc]="project.imagePath + 'cover.jpg'"
                    height="2000"
                    width="4444"
                    class="object-fill rounded-lg h-full"
                    alt="Sarah Fleury portrait" />

                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-4">
                        <h2
                            class="text-5xl font-satista text-bancha-800 dark:text-white font-semibold dark:font-normal whitespace-nowrap">
                            {{ project.title }}
                        </h2>
                        <span
                            class="text-lg text-bancha-800 dark:text-gray-400">
                            {{ project.shortDesc }}
                        </span>
                    </div>
                    <p
                        class="text-bancha-700 dark:text-gray-400 lg:col-span-2 text-1xl"
                        [innerHTML]="project.description">
                        <!-- Ajouter quand on est sur un petit écran, la possibilité de "voir plus" pour afficher le texte -->
                    </p>
                    <span class="text-bancha-700 dark:text-gray-400">{{
                        project.credits
                    }}</span>
                </div>
            </div>

            <!-- PLAN -->
            <div
                class="flex-col lg:flex-row flex max-w-screen-1xl px-4 py-8 mx-auto gap-8 lg:gap-8">
                <div class="flex flex-col items-center gap-4">
                    <span
                        class="text-4xl font-satista text-bancha-800 dark:text-white font-semibold dark:font-normal whitespace-nowrap">
                        Existant
                    </span>
                    <img
                        [src]="project.imagePath + existingPath + '.png'"
                        loading="lazy"
                        class="object-cover" />
                </div>

                <div class="flex flex-col items-center gap-4">
                    <span
                        class="text-4xl font-satista text-bancha-800 dark:text-white font-semibold dark:font-normal whitespace-nowrap">
                        Projet
                    </span>
                    <img
                        [src]="project.imagePath + proposalPath + '.png'"
                        loading="lazy"
                        class="object-cover" />
                </div>
            </div>

            <!-- IMAGES -->
            <div
                class="grid grid-cols-6 gap-4 max-w-screen-1xl px-4 py-8 mx-auto">
                @for (item of project.imagesGrid; track $index) {
                    <img
                        [src]="project.imageGridPath + item.path"
                        class="object-cover h-full rounded-lg"
                        loading="lazy"
                        [ngClass]="item.class ?? 'col-span-3'"
                        alt="{{ item.alt }}" />
                }
            </div>

            <!-- Previous Projet - Back to top of project - Next Projet -->
            <div class="max-w-screen-1xl mx-auto px-4">
                <div
                    class="flex items-center justify-between w-full h-12  bg-bancha-500 dark:bg-gray-900 rounded-lg">
                    <a
                        [routerLink]="'/projects/' + project.nextProject"
                        class="pl-32 text-cream-75">
                        Projet précédent
                    </a>

                    <!-- Arrow up -->
                    <a href="#projects">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-cream-75 hover:text-bancha-800 dark:text-white dark:hover:text-white"
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
                        class="pr-32 text-cream-75">
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
        private readonly route: ActivatedRoute,
        private readonly router: Router
    ) {}

    ngOnInit() {
        this.project =
            this.projectService.getProject(
                this.route.snapshot.paramMap.get('id') as string
            ) ?? ({} as Projet);
    }
}
