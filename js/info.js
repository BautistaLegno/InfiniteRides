function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const sectionPosition = section.offsetTop; // Obtener la posición superior de la sección
        const offsetPosition = sectionPosition - 20; 

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

