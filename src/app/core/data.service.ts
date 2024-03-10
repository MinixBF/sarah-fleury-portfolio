// service to get the project data

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    projets: Projet[] = [
        {
            id: 'jeuneurs',
            title: 'Jeuneurs',
            description:
                "Nos clients ont acheté ce bien dans le but d’en faire un véritable projet de vie. Ils ont souhaité transformer un appartement classique et vieillot pour en faire un appartement moderne adapté à leur mode de vie. Les dégagements inutiles ont été supprimés pour créer de grands espaces ouverts et lumineux.<br/><br/>Sur ce projet, je suis intervenue principalement durant le suivi de chantier et pour apporter les dernières précisions aux dessins des menuiseries et aux choix esthétiques. Les clients sont restés très ouverts à mes propositions allant des peintures jusqu'aux détails des poignées de menuiseries en passant par le mobilier et les luminaires.",
            shortDesc: 'Rénovation complète d’un appartement de 110m²',
            credits:
                'Fait pour l’agence Camille Hermand Architectures et photos de Pauline Le Goff',
            nextProject: 'republique',
            previousProject: 'mermoz',
            imagePath: 'assets/projects/jeuneurs/',
            imageGridPath: 'assets/projects/jeuneurs/grid/',
            imagesGrid: [
                {
                    path: 'entree.webp',
                    alt: 'Entrée',
                },
                {
                    path: 'cuisine.webp',
                    alt: 'Cuisine',
                },
                {
                    path: 'salon.webp',
                    alt: 'Salon',
                },
                {
                    path: 'biblio.webp',
                    alt: 'Bibliothèque',
                },
                {
                    path: 'salon_vers_bureau.webp',
                    alt: 'Salon vers bureau',
                },
                {
                    path: 'bureau.webp',
                    alt: 'Bureau',
                },
                {
                    path: 'sdb.webp',
                    alt: 'Salle de bain',
                },
                {
                    path: 'chambre.webp',
                    alt: 'Chambre',
                },
            ],
        },
        {
            id: 'republique',
            title: 'République',
            description:
                "Lorsque les clients ont acheté ce bien, le plan était déjà fonctionnel. Cependant, l’appartement manquait de charme et les bibliothèques étaient trop importantes pour les besoins de nos clients.<br/><br/>Hormis les salles d'eau, j'ai pu travailler sur l'ensemble des menuiseries existantes et en créer de nouvelles. De nombreux rangements fermés ont été ajoutés pour permettre de cacher les objets du quotidien.<br/><br/>Et côté ambiance, la cliente étant peintre avec une grande sensibilité pour les couleurs douces et naturelles, j'ai pu l'accompagner dans le choix d'une palette cohérente et chaleureuse sur l’ensemble de l’appartement.",
            shortDesc:
                'Rénovation partielle pour un appartement familial de 115m²',
            credits:
                'Fait pour l’agence Camille Hermand Architectures et photos de Pauline Le Goff',
            nextProject: 'vienne',
            previousProject: 'jeuneurs',
            imagePath: 'assets/projects/republique/',
            imageGridPath: 'assets/projects/republique/grid/',
            imagesGrid: [
                {
                    path: 'cuisine.webp',
                    alt: 'Cuisine',
                    class: 'md:col-span-6',
                },
                {
                    path: 'salon_vers_cuisine.webp',
                    alt: 'Salon vers cuisine',
                    class: 'md:col-span-2',
                },
                {
                    path: 'salle_a_manger.webp',
                    alt: 'Salle à manger',
                    class: 'md:col-span-2',
                },
                {
                    path: 'salon.webp',
                    alt: 'Salon',
                    class: 'md:col-span-2',
                },
                {
                    path: 'entree.webp',
                    alt: 'Entrée',
                },
                {
                    path: 'entree_2.webp',
                    alt: 'Entrée',
                },
                {
                    path: 'couloir.webp',
                    alt: 'Couloir',
                },
                {
                    path: 'chambre_enfant_2.webp',
                    alt: 'Chambre enfant',
                },
                {
                    path: 'chambre_enfant.webp',
                    alt: 'Chambre enfant',
                },
                {
                    path: 'chambre_bambi.webp',
                    alt: 'Chambre enfant',
                },
            ],
        },
        {
            id: 'vienne',
            title: 'Vienne',
            description:
                'Cet appartement était déjà habité par les clients depuis quelques années avant qu’ils ne fassent appel à nous. Ils étaient lassés des espaces trop blancs et impersonnels et souhaitaient insuffler plus de vie dans l’appartement.<br/><br/>Sur ce projet, j’ai pu totalement repenser l’ambiance de chaque pièce de l’appartement. De nouvelles menuiseries ont également été ajoutées pour plus de fonctionnalités.',
            shortDesc:
                'Rénovation partielle pour un appartement familial de 140m²',
            credits: 'Fait pour l’agence Camille Hermand Architectures',
            nextProject: 'mermoz',
            previousProject: 'republique',
            imagePath: 'assets/projects/vienne/',
            imageGridPath: 'assets/projects/vienne/grid/',
            imagesGrid: [
                {
                    path: 'entree.webp',
                    alt: 'Entrée',
                },
                {
                    path: 'biblio.webp',
                    alt: 'Bibliothèque',
                },
                {
                    path: 'biblio_detail.webp',
                    alt: 'Détail bibliothèque',
                },
                {
                    path: 'cuisine.webp',
                    alt: 'Cuisine',
                },
                {
                    path: 'enfant.webp',
                    alt: 'Chambre enfant',
                },
                {
                    path: 'enfant_cactus.webp',
                    alt: 'Chambre enfant',
                },
            ],
        },
        {
            id: 'mermoz',
            title: 'Mermoz',
            description:
                'Nos clients viennent d’acheter un nouvel appartement dans lequel ils souhaitent voir grandir leurs enfants dans un espace plus fonctionnel et agréable à vivre que leur précédent appartement.<br/><br/>Malgré plusieurs esquisses proposant des aménagements bien différents de l’existant, les clients sont restés sur une proposition relativement proche de l’existant pour favoriser un plan avec une grande salle à manger et une cuisine semi séparée.<br/><br/>Concernant les ambiances, j’en suis pour le moment aux premières propositions avec dans l’idée de créer un environnement coloré et pétillant à l’image de nos clients.',
            shortDesc:
                'Rénovation complète pour un appartement de 140m² - En cours',
            credits:
                'Fait pour l’agence Camille Hermand Architectures, visuels 3D uniquement et réalisés avec Sketchup et Vray',
            nextProject: 'jeuneurs',
            previousProject: 'vienne',
            imagePath: 'assets/projects/mermoz/',
            imageGridPath: 'assets/projects/mermoz/grid/',
            imagesGrid: [
                {
                    path: 'chambre_enfant.webp',
                    alt: 'Chambre enfant',
                    class: 'md:col-span-4',
                },
                {
                    path: 'sdb_enfant.webp',
                    alt: 'Salle de bain enfant',
                    class: 'md:col-span-2',
                },
                {
                    path: 'chambre_parent.webp',
                    alt: 'Chambre parent',
                },
                {
                    path: 'chambre_enfant_2.webp',
                    alt: 'Chambre enfant',
                },
                {
                    path: 'cuisine.webp',
                    alt: 'Cuisine',
                },
                {
                    path: 'cuisine_table.webp',
                    alt: 'Cuisine avec table',
                },
                {
                    path: 'entree.webp',
                    alt: 'Entrée',
                },
                {
                    path: 'salle_a_manger.webp',
                    alt: 'Salle à manger',
                },
                {
                    path: 'salon.webp',
                    alt: 'Salon',
                },
                {
                    path: 'salon_tv.webp',
                    alt: 'Salon avec TV',
                },
                // {
                //     path: 'sdb_parent.webp',
                //     alt: 'Salle de bain parent ',
                //     class: 'col-span-3',
                // },
                // {
                //     path: 'wc.webp',
                //     alt: 'Toilette',
                //     class: 'col-span-3',
                // },
            ],
        },
    ];

    constructor() {}

    getProject(id: string): Projet | undefined {
        if (!id) {
            return;
        }

        return this.projets.find(projet => projet.id === id);
    }

    getProjectForHome(): any[] {
        return this.projets.map(projet => {
            return {
                title: projet.title,
                id: projet.id,
                link: `/projects/${projet.id}`,
                coverImagePath: projet.imagePath + 'couverture.webp',
                shortDesc: projet.shortDesc,
                class: projet.id !== 'mermoz' ? 'object-fill' : '',
            };
        });
    }
}

export type Projet = {
    id: string;
    title: string;
    description?: string;
    shortDesc?: string;
    credits?: string;
    coverImagePath?: string;
    imagePath?: string;
    imageGridPath?: string;
    imagesGrid?: ImageProject[];
    previousProject?: string;
    nextProject?: string;
};

export type ImageProject = {
    path: string;
    alt: string;
    class?: string;
    title?: string;
    description?: string;
};
