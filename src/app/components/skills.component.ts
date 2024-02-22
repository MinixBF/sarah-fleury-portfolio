import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [NgFor, NgClass],
    template: `
        <section class="bg-cream-75 dark:bg-gray-800" id="skills">
            <div
                class="max-w-screen-1xl px-8 pt-8 pb-4 mx-auto sm:pt-16 sm:pb-8 lg:px-12 lg:pt-16 lg:pb-16">
                <div class="max-w-screen-md mb-4 lg:mb-8">
                    <h2
                        class="text-5xl font-satista text-bancha-800 dark:text-white font-semibold dark:font-normal whitespace-nowrap">
                        Compétences
                    </h2>
                </div>
                <div>
                    <div
                        class="pb-4 gap-4 xl:grid-cols-5 md:gap-8 grid grid-gap-16 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-flow-col
                    auto-cols-[minmax(300px,1fr)] overflow-x-auto">
                        @for (item of skills; track $index) {
                            <div
                                class="flex flex-col items-start justify-start gap-3 p-8 bg-white rounded-lg shadow-md dark:bg-gray-900 border-2 border-bancha-100"
                                (click)="selectSkill($index)"
                                [ngClass]="{
                                    'hover:border-bancha-600': !item.selected,
                                    'border-bancha-600': item.selected
                                }">
                                <span
                                    class="text-2xl tracking-tighter  font-bold text-bancha-800 dark:text-white">
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
                            loading="lazy"
                            class="object-cover w-full h-full rounded-lg"
                            [ngClass]="image.class ?? ''"
                            alt="" />
                    }
                </div>
            </div>
            <!-- Back to top of skills -->
            <div
                class="flex items-center justify-center w-full h-16 bg-cream-100 dark:bg-gray-900 invisible sm:visible">
                <!-- Arrow up -->
                <a href="#skills">
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
            gridClass: 'grid grid-rows-5 grid-cols-4',
            imagesGrid: [
                { path: 'chambre_2_R4.jpg', class: 'col-span-4' },
                {
                    path: 'SDB_R4.jpg',
                    class: 'col-span-2 object-[39%]',
                },
                { path: 'dressing_R5.jpg', class: 'col-span-2' },
                { path: 'chambre_tapis.jpg', class: 'col-span-4' },
                { path: 'SDB_R5.jpg', class: 'col-span-2' },
                { path: 'chambre_R4.jpg', class: 'col-span-2' },
                { path: 'couloir_R5.jpg', class: 'col-span-2' },
                { path: 'buanderie_R4.jpg', class: 'col-span-2' },
                { path: 'salon.jpg', class: 'col-span-4' },
                { path: 'SAM.jpg', class: 'col-span-4' },
                { path: 'salle_cinema_R5.jpg', class: 'col-span-2' },
                { path: 'salle_sport_R5.jpg', class: 'col-span-2' },
            ],
        },
        {
            title: 'Plans - AutoCAD',
            description:
                'J’affectionne le moment où les croquis et côtes faites lors des relevés deviennent un véritable plan avec annotations',
            icon: 'fas fa-paint-brush',
            selected: false,
            imagesPath: '/assets/skills/autocad/',
            gridClass: 'grid grid-cols-2',
            imagesGrid: [
                // Mettre chaque images dans le bon sens
                { path: 'appart_100_elec.jpg', class: '' }, // Paysage
                { path: 'appart_100.jpg', class: '' }, // Paysage
                { path: 'appart_115.jpg', class: '' }, // Paysage
                { path: 'biblio.jpg', class: '' }, // bon sens
                { path: 'cuisine.jpg', class: '' }, // Paysage
                // 100_elec / 100
                // 115
                // biblio / cuisine
            ],
        },
        {
            title: 'Suivi de chantier',
            description:
                'Il s’agit pour moi d’un moment d’échange primordial avec les entreprises et les clients. C’est également très formateur.',
            icon: 'fas fa-paint-brush',
            selected: false,
            imagesPath: 'assets/skills/worksite-supervision/',
            gridClass: 'grid grid-cols-4',
            imagesGrid: [
                // Si possible une photo en pleine largeur avec une photo en paysage
                { path: '1.jpg', class: '' },
                { path: '2.jpg', class: '' },
                { path: '3.jpg', class: '' },
                { path: '4.jpg', class: '' },
                { path: '5.jpg', class: '' },
                { path: '6.jpg', class: '' },
                { path: '7.jpg', class: '' },
            ],
        },
        {
            title: 'Moodboard',
            description:
                'Élaborer un moodboard permet de donner vie aux espaces que l’on dessine en leur apportant de la matière.',
            icon: 'fas fa-paint-brush',
            selected: false,
            imagesPath: 'assets/skills/moodboard/',
            gridClass: 'grid grid-rows-3 grid-cols-2 grid-flow-col',
            imagesGrid: [
                // Mettre la photo 6 en pleine largeur
                { path: '1.jpg', class: '' },
                { path: '4.jpg', class: '' },
                { path: '5.jpg', class: '' },
                { path: '6.jpg', class: 'col-span-2 row-span-1' },
                { path: 'ambiance.png', class: 'col-span-2' },
            ],
        },
        {
            title: 'Photoshop',
            description:
                'Quelques ombres, des textures ou l’intégration dans un contexte peuvent permettre à une élévation ou une 3D de prendre vie.',
            icon: 'fab fa-adobe',
            selected: false,
            imagesPath: 'assets/skills/photoshop/',
            gridClass: 'grid-cols-6',
            imagesGrid: [
                { path: 'jardin2_PS.jpg', class: 'col-span-3 ' },
                { path: 'jardin1_PS.jpg', class: 'col-span-3' },
                { path: 'cabane.jpg', class: 'col-span-4 row-span-1' },
                { path: 'coupe_cabane.jpg', class: 'col-span-2' },
                { path: 'coupe_port_center.jpg', class: 'col-span-3' },
                { path: 'façade_port_center.jpg', class: 'col-span-3' },
                { path: 'façade.jpg', class: 'col-span-6' },
                { path: 'plans_duplex.jpg', class: 'col-span-6' },
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
}

export type Skill = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    imagesPath: string;
    gridClass: string;
    imagesGrid: { path: string; class?: string }[];
};
