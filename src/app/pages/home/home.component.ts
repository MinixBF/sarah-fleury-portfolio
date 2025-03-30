import { DataService } from './../../core/data.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AboutUsComponent } from 'src/app/components/about-us.component';
import { SkillsComponent } from 'src/app/components/skills.component';

@Component({
    selector: 'home',
    imports: [SkillsComponent, AboutUsComponent, CommonModule, RouterModule],
    template: `
        <section
            class="relative h-[100svh] bg-bancha-500 dark:bg-gray-900"
            id="home">
            <div
                class="mx-auto grid h-full max-w-screen-xl py-16 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-6">
                <!-- Texte -->
                <h1
                    class="xs:text-[4em] m-4 content-center text-nowrap text-center font-satista text-[3em] leading-none text-cream-75 sm:text-[7em] md:text-[9em] lg:col-span-12 lg:text-[11em] xl:text-[13em] dark:text-white">
                    Sarah Fleury
                </h1>
                <!-- Image -->
                <div
                    class="flex flex-col items-center justify-center lg:col-span-12 lg:flex-row">
                    <div class="mx-4 mb-4 sm:mx-16 sm:my-8 lg:mb-20">
                        <p
                            class="max-w-2xl text-nowrap font-satista text-[2em] font-light tracking-wider text-cream-75 sm:text-[2em] md:mb-4 md:text-[3em] md:text-lg lg:text-[4em] xl:text-[4em] dark:text-gray-400">
                            Architecte d’intérieur
                        </p>
                        <p
                            class="max-w-2xl text-balance font-serif tracking-wide text-cream-75 md:text-lg lg:text-xl dark:text-gray-400">
                            Créer des espaces
                            <strong class="text-cream-100">harmonieux</strong>
                            et
                            <strong class="text-cream-100">fonctionnels</strong>
                            , c’est façonner un cadre de vie qui
                            <strong class="text-cream-100">inspire</strong>
                            ,
                            <strong class="text-cream-100">apaise</strong>
                            et
                            <strong class="text-cream-100">dynamise</strong>
                            au quotidien.
                        </p>
                    </div>

                    <img
                        class="h-auto w-full max-w-xs rounded-lg object-contain md:max-w-md lg:md:max-w-lg"
                        src="assets/moodboard.png"
                        alt="Moodboard" />
                </div>
            </div>

            <!-- Indication de descente -->
            <div
                class="absolute bottom-5 left-1/2 -translate-x-1/2 transform sm:visible md:bottom-10">
                <div class="animate-bounce">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 text-cream-75"
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
        </section>
        <div></div>
        <section class="bg-cream-75 dark:bg-gray-800" id="projects">
            <div
                class="mx-auto max-w-screen-1xl px-4 pb-8 pt-24 sm:py-16 lg:px-12 lg:py-32">
                <div class="mb-4 max-w-screen-md lg:mb-8">
                    <h2
                        class="font-satista text-5xl font-semibold text-bancha-800 dark:font-normal dark:text-white">
                        Projets
                    </h2>
                </div>
                <div
                    class="flex flex-col justify-center space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-5">
                    @for (project of projects; track $index) {
                        <div
                            [id]="project.id"
                            class="flex w-full flex-col items-start space-y-4">
                            <a
                                [routerLink]="[project.link]"
                                class="hover:first-letter:text-primary-600 hover:text-primary-600 tracking cursor-pointer font-satista text-2xl font-bold text-bancha-800 hover:underline dark:text-gray-400 dark:hover:text-white">
                                {{ project.title }}
                            </a>
                            <a
                                [routerLink]="[project.link]"
                                class="group relative h-full w-full cursor-pointer overflow-hidden rounded-lg">
                                <div
                                    class="absolute inset-0 z-10 flex h-full flex-col items-center justify-center rounded-lg bg-bancha-800 bg-opacity-90 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 max-md:h-[70vh]">
                                    <span
                                        class="text-xl tracking-wider text-cream-75">
                                        Voir le projet
                                        @if (project.isInProgress) {
                                            en cours
                                        }
                                    </span>
                                    <p
                                        class="mx-auto mt-2 tracking-wider text-cream-75">
                                        {{ project.shortDesc }}
                                    </p>
                                </div>
                                <div
                                    class="absolute bottom-0 z-10 flex w-full flex-col items-center justify-end rounded-lg max-md:h-[70vh]">
                                    <button
                                        class="text-md mb-2 rounded-lg border border-cream-75 px-2 py-1 tracking-wider text-cream-75 opacity-100 backdrop-blur-lg transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                                        Voir le projet
                                    </button>
                                </div>
                                <img
                                    [src]="project.coverImagePath"
                                    class="relative h-full w-full rounded-lg object-cover max-md:h-[70vh] 2xl:h-[26em]"
                                    [ngClass]="project.class ?? ''"
                                    alt="" />
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
