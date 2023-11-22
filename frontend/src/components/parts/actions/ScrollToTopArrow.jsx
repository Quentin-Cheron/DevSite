import React, { useState, useEffect } from 'react';
import arrowUp from "../../../assets/img/arrow-up.svg";

const ScrollToTopArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Ajoutez un écouteur d'événements pour détecter le défilement de la page
        const handleScroll = () => {
            // Vérifiez si la position de défilement est supérieure à une certaine valeur (par exemple, 200 pixels)
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop > 0);
        };

        // Ajoutez l'écouteur d'événements au chargement du composant
        window.addEventListener('scroll', handleScroll);

        // Retirez l'écouteur d'événements lors de la suppression du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Le tableau vide assure que l'effet ne se déclenche qu'une seule fois lors du chargement du composant

    const scrollToTop = () => {
        // Faites remonter la page vers le haut
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Ajoutez un effet de défilement fluide
        });
    };

    return (
        // Affichez la flèche uniquement si elle est visible
        isVisible && (
            <div className="flex justify-center items-center fixed bottom-[4rem] z-50 right-[1rem] w-10 h-10 rounded-full border-indigo-600 border-2 cursor-pointer" onClick={scrollToTop}>
                <span><img src={arrowUp} /></span>
            </div>
        )
    );
};

export default ScrollToTopArrow;