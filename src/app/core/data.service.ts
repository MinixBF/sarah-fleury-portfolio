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
                "Nos clients ont acheté ce bien dans le but d’en faire un véritable projet de vie. Ils ont souhaité transformé un appartement classique et vieillot pour en faire un appartement moderne adapté à leur mode de vie. Les dégagements inutiles ont été supprimés pour créer de grands espaces ouverts et lumineux.<br/><br/>Sur ce projet, je suis intervenue principalement durant le suivi de chantier et pour apporter les dernières précisions aux dessins des menuiseries et aux choix esthétiques. Les clients sont restés très ouverts à mes propositions allant des peintures jusqu'aux détails des poignées de menuiseries en passant par le mobilier et les luminaires.",
            shortDesc: 'Rénovation complète d’un appartement de 110m²',
            credits: 'Fait pour l’agence Camille Hermand Architectures',
            nextProject: 'republique',
            previousProject: 'mermoz',
            imagePath: 'assets/projects/jeuneurs/',
            imageGridPath: 'assets/projects/jeuneurs/grid/',
            imagesGrid: [
                {
                    path: 'entree.jpg',
                    alt: 'Entrée',
                },
                {
                    path: 'cuisine.jpg',
                    alt: 'Cuisine',
                },
                {
                    path: 'salon.jpg',
                    alt: 'Salon',
                },
                {
                    path: 'biblio.jpg',
                    alt: 'Bibliothèque',
                },
                {
                    path: 'salon_vers_bureau.jpg',
                    alt: 'Salon vers bureau',
                },
                {
                    path: 'bureau.jpg',
                    alt: 'Bureau',
                },
                {
                    path: 'sdb.jpg',
                    alt: 'Salle de bain',
                },
                {
                    path: 'chambre.jpg',
                    alt: 'Chambre',
                },
            ],
        },
        {
            id: 'republique',
            title: 'République',
            description:
                "Lorsque les clients ont acheté ce bien, le plan était déjà fonctionnel. Cependant, l’appartement manquait de charme et les bibliothèques étaient trop importantes pour les besoins de nos clients.<br/><br/>Hormis les salles d'eau, j'ai pu travailler sur l'ensemble des menuiseries existantes et en créer de nouvelles. De nombreux rangements fermés ont été ajoutés pour permettre de cacher les objets du quotidien.<br/><br/>Et côté ambiance, la cliente étant peintre avec une grande sensibilité pour des couleurs douce et naturelle, j'ai pu l'accompagner dans le choix d'une palette cohérente et chaleureuse sur l’ensemble de l’appartement.",
            shortDesc:
                'Rénovation partielle pour un appartement familial de 115m²',
            credits: 'Fait pour l’agence Camille Hermand Architectures',
            nextProject: 'vienne',
            previousProject: 'jeuneurs',
            imagePath: 'assets/projects/republique/',
            imageGridPath: 'assets/projects/republique/grid/',
            imagesGrid: [
                {
                    path: 'cuisine.jpg',
                    alt: 'Cuisine',
                    class: 'col-span-6',
                },
                {
                    path: 'salon_vers_cuisine.jpg',
                    alt: 'Salon vers cuisine',
                    class: 'col-span-2',
                },
                {
                    path: 'salle_a_manger.jpg',
                    alt: 'Salle à manger',
                    class: 'col-span-2',
                },

                {
                    path: 'salon.jpg',
                    alt: 'Salon',
                    class: 'col-span-2',
                },
                {
                    path: 'entree.jpg',
                    alt: 'Entrée',
                },
                {
                    path: 'entree_2.jpg',
                    alt: 'Entrée',
                },
                {
                    path: 'couloir.jpg',
                    alt: 'Couloir',
                },
                {
                    path: 'chambre_enfant_2.jpg',
                    alt: 'Chambre enfant',
                },
                {
                    path: 'chambre_enfant.jpg',
                    alt: 'Chambre enfant',
                },
                {
                    path: 'chambre_bambi.jpg',
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
                    path: 'entree.jpg',
                    alt: 'Entrée',
                },
                {
                    path: 'biblio.jpg',
                    alt: 'Bibliothèque',
                },
                {
                    path: 'biblio_detail.jpg',
                    alt: 'Détail bibliothèque',
                },
                {
                    path: 'cuisine.jpg',
                    alt: 'Cuisine',
                },
                {
                    path: 'enfant.jpg',
                    alt: 'Chambre enfant',
                },
                {
                    path: 'enfant_cactus.jpg',
                    alt: 'Chambre enfant',
                },
            ],
        },
        {
            id: 'mermoz',
            title: 'Mermoz',
            description:
                'Nos clients viennent d’acheter un nouvel appartement dans lequel ils souhaitent voir grandir leurs enfants dans un espace plus fonctionnel et agréable à vivre que leur précédent appartement.<br/><br/>Malgré plusieurs esquisses proposant des aménagements bien différents de l’existant, les clients sont restés sur une proposition relativement proche de l’existant pour favoriser un plan avec une grande salle à manger et une cuisine semi séparée.<br/><br/>Concernant les ambiances, j’en suis pour le moment aux premières propositions avec dans l’idée de créer un environnement coloré et pétillant à l’image de nos clients.',
            shortDesc: 'Rénovation complète pour un appartement de 140m²',
            credits: 'Fait pour l’agence Camille Hermand Architectures',
            nextProject: 'jeuneurs',
            previousProject: 'vienne',
            imagePath: 'assets/projects/mermoz/',
            imageGridPath: 'assets/projects/mermoz/grid/',
            imagesGrid: [
                {
                    path: 'chambre_enfant.jpg',
                    alt: 'Chambre enfant',
                    class: 'col-span-4',
                },
                {
                    path: 'sdb_enfant.jpg',
                    alt: 'Salle de bain enfant',
                    class: 'col-span-2',
                },
                {
                    path: 'chambre_parent.jpg',
                    alt: 'Chambre parent',
                },
                {
                    path: 'chambre_enfant_2.jpg',
                    alt: 'Chambre enfant',
                },
                {
                    path: 'cuisine.jpg',
                    alt: 'Cuisine',
                },
                {
                    path: 'cuisine_table.jpg',
                    alt: 'Cuisine avec table',
                },
                {
                    path: 'entree.jpg',
                    alt: 'Entrée',
                },
                {
                    path: 'salle_a_manger.jpg',
                    alt: 'Salle à manger',
                },
                {
                    path: 'salon.jpg',
                    alt: 'Salon',
                },
                {
                    path: 'salon_tv.jpg',
                    alt: 'Salon avec TV',
                },

                {
                    path: 'sdb_parent.jpg',
                    alt: 'Salle de bain parent',
                },
                {
                    path: 'wc.jpg',
                    alt: 'Toilette',
                },
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
                link: `/projects/${projet.id}`,
                coverImagePath: projet.imagePath + 'couverture.jpg',
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
