import { DataService } from './../../core/data.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AboutUsComponent } from 'src/app/components/about-us.component';
import { SkillsComponent } from 'src/app/components/skills.component';

@Component({
    selector: 'home',
    imports: [
        SkillsComponent,
        AboutUsComponent,
        NgOptimizedImage,
        CommonModule,
        RouterModule,
    ],
    template: `
        <section
            class="relative h-[100svh] bg-bancha-500 dark:bg-gray-900"
            id="home">
            <div
                class="mx-auto grid h-full max-w-screen-1xl px-16 py-32 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-6">
                <div class="mr-auto place-self-center lg:col-span-6">
                    <h1
                        class="mb-4 max-w-2xl font-satista text-5xl leading-none text-cream-75 md:text-6xl xl:text-7xl dark:text-white">
                        Sarah Fleury
                    </h1>
                    <p
                        class="mb-6 max-w-2xl font-light text-cream-75 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
                        Architecte d’intérieur diplômée de l’ENSAAMA Olivier de
                        Serres.
                    </p>
                </div>
                <div class="lg:col-span-6 lg:mt-0 lg:place-self-center">
                    <img
                        class="h-full w-full rounded-lg object-contain"
                        ngSrc="assets/moodboard.png"
                        role="img"
                        height="2009"
                        width="2152"
                        priority
                        alt="Moodboard" />
                </div>
                <!-- Indication to go down section -->
                <div
                    class="invisible absolute bottom-10 left-1/2 right-1/2 flex flex-col items-center justify-center sm:visible">
                    <div class="animate-bounce">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="hover:text-primary-600 h-7 w-7 text-cream-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
        <div></div>
        <section class="bg-cream-75 dark:bg-gray-800" id="projects">
            <div
                class="mx-auto max-w-screen-1xl px-8 pb-8 pt-24 sm:py-16 lg:px-12 lg:py-32">
                <div class="mb-4 max-w-screen-md lg:mb-8">
                    <h2
                        class="font-satista text-5xl font-semibold text-bancha-800 dark:font-normal dark:text-white">
                        Projets
                    </h2>
                </div>
                <div
                    class="flex flex-col justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-5">
                    @for (project of projects; track $index) {
                        <div
                            [id]="project.id"
                            class="flex w-full flex-col items-start gap-2 space-y-4">
                            <a
                                [routerLink]="[project.link]"
                                class="relative h-full w-full cursor-pointer">
                                <div
                                    class="absolute inset-0 z-10 flex h-full flex-col items-center justify-center rounded-lg bg-bancha-800 bg-opacity-90 text-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 max-md:h-[70vh]">
                                    <span
                                        class="text-xl tracking-wider text-cream-75">
                                        Voir le projet
                                    </span>
                                    <p
                                        class="mx-auto mt-2 tracking-wider text-cream-75">
                                        {{ project.shortDesc }}
                                    </p>
                                </div>
                                <img
                                    [ngSrc]="project.coverImagePath"
                                    width="500"
                                    height="500"
                                    class="relative h-full w-full rounded-lg object-cover max-md:h-[70vh]"
                                    [ngClass]="project.class ?? ''"
                                    alt="" />
                            </a>
                            <a
                                [routerLink]="[project.link]"
                                class="hover:first-letter:text-primary-600 hover:text-primary-600 cursor-pointer text-xl text-bancha-800 hover:underline dark:text-gray-400 dark:hover:text-white">
                                {{ project.title }}
                            </a>
                        </div>
                    }
                </div>
            </div>
        </section>

        <!-- skills -->
        <app-skills />

        <!-- About us  -->
        <about-us />
    `,
})
export class HomeComponent {
    projects: any[] = [];

    constructor(private _dataService: DataService) {
        this.projects = this._dataService.getProjectForHome();
    }

    router = inject(Router);
}
