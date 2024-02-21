import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'about-us',
    standalone: true,
    imports: [CommonModule],
    template: `
        <section class="bg-cream-75 dark:bg-gray-900" id="about-us" #aboutUs>
            <div
                class="max-w-screen-1xl px-8 py-8 mx-auto sm:py-16 lg:px-12 lg:py-32">
                <div class="flex flex-col gap-16 sm:flex-row">
                    <div class="flex flex-col">
                        <h2
                            class="mb-4 text-5xl font-satista text-bancha-800 font-semibold dark:font-normal whitespace-nowrap dark:text-white">
                            A Propos
                        </h2>
                        <p
                            class="text-bancha-700 dark:text-gray-400 lg:col-span-2 text-xl">
                            Je suis persuadée qu’évoluer dans des espaces
                            esthétiques et bien pensés nous ressource et
                            améliore notre état d’esprit. C’est pourquoi j’ai
                            toujours eu à cœur de dessiner des projets
                            fonctionnels, chaleureux et cohérents. <br />
                            <br />
                            J’ai également une grande sensibilité portée sur les
                            couleurs et les matières. Cela me vient de ma
                            passion pour les loisirs créatifs et manuels. Depuis
                            l’enfance, je recherche toujours de nouvelles
                            pratiques pour mettre en scène les couleurs et la
                            matière dans des créations personnelles.
                        </p>
                        <div class="flex justify-center text-center">
                            <a
                                href="assets/me.jpg"
                                path_to_file="assets/me.jpg"
                                target="_blank"
                                download="me.jpg"
                                title="Télécharger mon CV"
                                class="flex items-center justify-center p-2 px-4 w-fit text-cream-75 bg-bancha-600 rounded-lg cursor-pointer mt-8
                          hover:bg-bancha-800 transition-colors duration-300
                          focus:outline-none focus:ring-2 focus:ring-bancha-300
                          dark:bg-bancha-700 dark:hover:bg-bancha-800
                          dark:focus:ring-bancha-800">
                                Télécharger mon CV
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col items-center">
                        <img
                            src="assets/me.jpg"
                            class="object-cover rounded-lg sm:w-[80em]"
                            alt="Sarah Fleury portrait" />
                    </div>
                </div>
            </div>
        </section>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {}
