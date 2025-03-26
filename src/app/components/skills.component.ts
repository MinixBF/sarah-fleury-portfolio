import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-skills',
    imports: [NgFor, NgClass, NgOptimizedImage],
    template: `
        <section class="bg-cream-75 dark:bg-gray-800" id="skills">
            <div
                class="mx-auto max-w-screen-1xl px-8 pb-8 pt-24 sm:pb-8 sm:pt-16 lg:px-12 lg:pb-16 lg:pt-16">
                <div class="mb-4 max-w-screen-md lg:mb-8">
                    <h2
                        class="whitespace-nowrap font-satista text-5xl font-semibold text-bancha-800 dark:font-normal dark:text-white">
                        Compétences
                    </h2>
                </div>
                <div>
                    <div
                        class="grid-gap-16 grid cursor-pointer auto-cols-[minmax(300px,1fr)] grid-flow-col grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 overflow-x-auto pb-4 md:gap-8 xl:grid-cols-5">
                        @for (item of skills; track $index) {
                            <div
                                class="flex flex-col items-start justify-start gap-3 rounded-lg border-2 border-bancha-100 bg-white p-8 shadow-md dark:bg-gray-900"
                                (click)="selectSkill($index)"
                                [ngClass]="{
                                    'hover:border-bancha-600': !item.selected,
                                    'border-bancha-600': item.selected,
                                }">
                                <span
                                    class="text-2xl font-bold tracking-tighter text-bancha-800 dark:text-white">
                                    {{ item.title }}
                                </span>
                                <p class="text-banch-700 dark:text-gray-400">
                                    {{ item.description }}
                                </p>
                            </div>
                        }
                    </div>
                </div>
                <div
                    class="grid gap-4 pt-8"
                    [ngClass]="skillsSelected.gridClass">
                    @for (image of skillsSelected.imagesGrid; track $index) {
                        <img
                            [src]="skillsSelected.imagesPath + image.path"
                            class="h-full w-full rounded-lg object-cover"
                            [ngClass]="image.class ?? ''"
                            alt="" />
                    }
                </div>
            </div>
            <!-- Back to top of skills -->
            <div
                class="flex h-16 w-full items-center justify-center bg-cream-100 dark:bg-gray-900">
                <!-- Arrow up -->
                <a (click)="scrollTo('skills')" class="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 text-bancha-600 hover:text-bancha-800 dark:text-white dark:hover:text-white"
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
            </div>
        </section>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
    skills: Skill[] = [
        {
            title: 'SketchUp V-Ray',
            description:
                'Réaliser des visuels les plus réalistes possibles me passionnent. En particulier, travailler les lumières et les textures.',
            icon: 'fas fa-paint-brush',
            selected: true,
            imagesPath: '/assets/skills/sketchup-vray/',
            gridClass: 'grid grid-cols-1 md:grid-rows-5 md:grid-cols-4',
            imagesGrid: [
                // { path: 'chambre_2_R4.webp', class: 'md:col-span-4' },
                // { path: 'dressing_R5.webp', class: 'md:col-span-2' },
                { path: 'chambre_tapis.webp', class: 'md:col-span-4' },
                { path: 'SDB_R5.webp', class: 'md:col-span-2' },
                {
                    path: 'SDB_R4.webp',
                    class: 'md:col-span-2 object-[39%]',
                },
                // { path: 'chambre_R4.webp', class: 'md:col-span-2' },
                // { path: 'couloir_R5.webp', class: 'md:col-span-2' },
                // { path: 'buanderie_R4.webp', class: 'md:col-span-2' },
                { path: 'salon.webp', class: 'md:col-span-4' },
                { path: 'SAM.webp', class: 'md:col-span-4' },
                { path: 'salle_cinema_R5.webp', class: 'md:col-span-2' },
                { path: 'salle_sport_R5.webp', class: 'md:col-span-2' },
            ],
        },
        {
            title: 'Plans - AutoCAD',
            description:
                'J’affectionne le moment où les croquis et côtes faites lors des relevés deviennent un véritable plan avec annotations',
            icon: 'fas fa-paint-brush',
            selected: false,
            imagesPath: '/assets/skills/autocad/',
            gridClass: 'grid grid-cols-1 md:grid-cols-2',
            imagesGrid: [
                // Mettre chaque images dans le bon sens
                {
                    path: 'appart_100_elec.webp',
                    class: '',
                    height: '3017',
                    width: '4209',
                }, // Paysage
                {
                    path: 'appart_100.webp',
                    class: '',
                    height: '2996',
                    width: '4102',
                }, // Paysage
                { path: 'appart_115.webp', class: 'md:col-span-2' }, // Paysage
                { path: 'biblio.webp', class: '' }, // bon sens
                { path: 'cuisine.webp', class: '' }, // Paysage
                // 100_elec / 100
                // 115
                // biblio / cuisine
            ],
        },
        {
            title: 'Suivi de chantier',
            description:
                'Il s’agit d’un moment d’échange primordial avec les entreprises et les clients. C’est également très formateur.',
            icon: 'fas fa-paint-brush',
            selected: false,
            imagesPath: 'assets/skills/worksite-supervision/',
            gridClass: 'grid grid-cols-1 md:grid-cols-4',
            imagesGrid: [
                // Si possible une photo en pleine largeur avec une photo en paysage
                { path: '1.webp', class: '' },
                { path: '2.webp', class: '' },
                { path: '3.webp', class: '' },
                { path: '4.webp', class: '' },
                { path: '5.webp', class: '' },
                { path: '6.webp', class: '' },
                { path: '7.webp', class: '' },
            ],
        },
        {
            title: 'Moodboard',
            description:
                'Élaborer un moodboard permet de donner vie aux espaces que l’on dessine en leur apportant de la matière.',
            icon: 'fas fa-paint-brush',
            selected: false,
            imagesPath: 'assets/skills/moodboard/',
            gridClass: 'grid grid-cols-1 md:grid-rows-2 md:grid-cols-2',
            imagesGrid: [
                // Mettre la photo 6 en pleine largeur
                { path: 'planche_1.webp', class: 'md:row-span-1' },
                { path: '4.webp', class: '' },
                { path: '5.webp', class: '' },
                { path: '6.webp', class: '' },
                { path: 'ambiance.webp', class: 'md:col-span-2' },
            ],
        },
        {
            title: 'Photoshop',
            description:
                'Quelques ombres, des textures ou l’intégration dans un contexte peuvent permettre à une élévation ou une 3D de prendre vie.',
            icon: 'fab fa-adobe',
            selected: false,
            imagesPath: 'assets/skills/photoshop/',
            gridClass: 'grid-cols-1 md:grid-cols-6',
            imagesGrid: [
                { path: 'jardin2_PS.webp', class: 'md:col-span-3 ' },
                { path: 'jardin1_PS.webp', class: 'md:col-span-3' },
                { path: 'cabane.webp', class: 'md:col-span-4 md:row-span-1' },
                { path: 'coupe_cabane.webp', class: 'md:col-span-2' },
                { path: 'coupe_port_center.webp', class: 'md:col-span-3' },
                { path: 'façade_port_center.webp', class: 'md:col-span-3' },
                { path: 'façade.webp', class: 'md:col-span-6' },
                { path: 'plans_duplex.webp', class: 'md:col-span-6' },
            ],
        },
    ];

    skillsSelected: Skill = this.skills[0];

    selectSkill(index: number) {
        this.skills.forEach((skill, i) => {
            skill.selected = i === index;
        });

        this.skillsSelected = this.skills[index];
    }

    scrollTo(id: string) {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

export type Skill = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    imagesPath: string;
    gridClass: string;
    imagesGrid: {
        path: string;
        class?: string;
        height?: string;
        width?: string;
        alt?: string;
    }[];
};
