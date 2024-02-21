import { DataService } from './../../core/data.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from 'src/app/components/about-us.component';
import { SkillsComponent } from 'src/app/components/skills.component';

@Component({
    selector: 'home',
    standalone: true,
    imports: [
        SkillsComponent,
        AboutUsComponent,
        NgOptimizedImage,
        CommonModule,
        RouterModule,
    ],
    template: `
        <section class="bg-cream-75 dark:bg-gray-800" id="projects">
            <div
                class="max-w-screen-1xl  px-8 pb-8 pt-24 mx-auto sm:py-16 lg:px-12 lg:py-32">
                <div class="max-w-screen-md mb-4 lg:mb-8">
                    <h2
                        class="text-5xl font-satista text-bancha-800 dark:text-white font-semibold dark:font-normal">
                        Projets
                    </h2>
                </div>
                <div
                    class="space-y-8 flex justify-center flex-col md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                    @for (project of projects; track $index) {
                        <div
                            class="flex flex-col gap-2 items-start space-y-4 w-full">
                            <a
                                [routerLink]="[project.link]"
                                class="relative cursor-pointer h-full w-full">
                                <div
                                    class="absolute inset-0 z-10 bg-bancha-800 rounded-lg text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 max-md:h-[70vh]  h-full
                                        transition-opacity ease-in-out">
                                    <span
                                        class="tracking-wider text-xl text-cream-75">
                                        Voir le projet
                                    </span>
                                    <p
                                        class="mx-auto mt-2 tracking-wider  text-cream-75">
                                        {{ project.shortDesc }}
                                    </p>
                                </div>
                                <img
                                    [ngSrc]="project.coverImagePath"
                                    width="500"
                                    height="500"
                                    class="object-cover relative rounded-lg w-full max-md:h-[70vh] h-full"
                                    [ngClass]="project.class ?? ''"
                                    alt="" />
                            </a>
                            <a
                                [routerLink]="[project.link]"
                                class="text-2xl text-bancha-800 dark:text-gray-400 dark:hover:text-white hover:first-letter:text-primary-600
                                    hover:text-primary-600 hover:underline cursor-pointer
                                ">
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
}
