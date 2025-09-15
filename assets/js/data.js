function portfolioData() {
    return {
        // Datos para la sección "Tecnologías que Domino"
        technologies: [
            { name: 'Laravel', logo: 'assets/logos/logo-laravel.svg' },
            { name: 'PHP', logo: 'assets/logos/logo-php.svg' },
            { name: 'Alpine', logo: 'assets/logos/logo-alpine.svg' },
            { name: 'Vue.js', logo: 'assets/logos/logo-vue.svg' },
            { name: 'Livewire', logo: 'assets/logos/logo-livewire.svg' },
            { name: 'Tailwind', logo: 'assets/logos/logo-tailwind.svg' },
            { name: 'MySQL', logo: 'assets/logos/logo-mysql.svg' },
            { name: 'Linux', logo: 'assets/logos/logo-linux.svg' },
            { name: 'Git', logo: 'assets/logos/logo-git.svg' },
        ],
        // Datos para la sección "Conocimientos en"
        knowledge: [
            { name: 'Node JS', logo: 'assets/logos/logo-nodejs.svg' },
            { name: 'Python', logo: 'assets/logos/logo-python.svg' },
            { name: 'GraphQL', logo: 'assets/logos/logo-graphql.svg' },
            { name: 'SQL Server', logo: 'assets/logos/logo-sqlserver.svg' },
            { name: 'React', logo: 'assets/logos/logo-react.svg' },
            { name: 'JSON', logo: 'assets/logos/logo-json.svg' },
            { name: 'Symfony', logo: 'assets/logos/logo-symfony.svg', isDarkInvert: true },
            { name: 'Google Cloud', logo: 'assets/logos/logo-google-cloud.svg' },
            { name: 'AWS', logo: 'assets/logos/logo-aws.svg' },
            { name: 'Docker', logo: 'assets/logos/logo-docker.svg' },
            { name: 'Django', logo: 'assets/logos/logo-django.svg' },
            { name: 'Java', logo: 'assets/logos/logo-java.svg' },
            { name: 'Kotlin', logo: 'assets/logos/logo-kotlin.svg' },
        ],
        // Datos para la sección "Experiencia Laboral"
        experience: [
            {
                date: 'Oct 2023 - Actualidad',
                title: 'Programador web Laravel en OR Maquinarias SAC',
                description: null,
                details: [
                    'Migración de sistema de escritorio a versión web con Laravel, mejorando funcionalidades.',
                    'Desarrollo de procesos de lectura y validación de datos entre SQL Server y MySQL.',
                    'Construcción de módulos a medida: Cotizaciones, Logística, Control de Equipos y Valorizaciones.',
                    'Gestión de servidores locales y despliegue en servidor Ubuntu con Apache.'
                ],
                isCurrent: true
            },
            {
                date: 'May 2023 - Jul 2023',
                title: 'Desarrollador React y Laravel en Luca',
                description: 'Implementación de APIs creadas en Laravel (Registro, Login, CRUDs) en un proyecto con React.',
                details: [],
                isCurrent: false
            },
            {
                date: 'Mar 2023 - Abr 2023',
                title: 'Desarrollador Laravel y Vue.js en Noumbu',
                description: 'Rediseño de funcionalidades de un sistema interno, utilizando Vue.js en el frontend y Laravel en el backend.',
                details: [],
                isCurrent: false
            },
            {
                date: 'Sep 2022 - Dic 2022',
                title: 'Desarrollador Laravel Junior en Devdatep Consulting',
                description: 'Creación de APIs REST con procedimientos almacenados para gestionar autenticación y CRUDs de usuarios y datos de la plataforma.',
                details: [],
                isCurrent: false
            },
            {
                date: 'Ago 2022 - Dic 2022',
                title: 'Software Developer Intern en Dapp blockchain S.A.C.',
                description: 'Diseño de la landing page de la plataforma con WordPress y PHP puro, y diseño de la base de datos en MySQL.',
                details: [],
                isCurrent: false
            }
        ],
        // Datos para la sección "Proyectos Destacados"
        projects: [
            {
                title: 'Laravel Eloquent Visualizer',
                description: 'Eloquent Visualizer es una extensión para VS Code que analiza tu proyecto de Laravel y genera un gráfico interactivo de las relaciones de tus modelos. Despídete de la confusión y entiende tu base de datos de un vistazo.',
                image: 'assets/images/imageVizuakizer1.png',
                tags: ['TypeScript', 'Tailwind'],
                galleryImages: [
                    'assets/images/imageVizuakizer1.png',
                ],
                github: 'https://github.com/GerardoFC8/landing-eloquent-visualizer',
                online: 'https://gerardofc8.github.io/landing-eloquent-visualizer/'
            },
            {
                title: 'Sistema de Gestión de Activos (ERP)',
                description: 'ERP para la gestión de activos fijos y maquinaria pesada. Incluye módulos de compras, cotizaciones, control de equipos alquilados y valorizaciones para facturación.',
                image: 'assets/images/ORMSistema.png',
                tags: ['Laravel', 'Livewire', 'Tailwind', 'Alpine.js', 'MySQL'],
                galleryImages: [
                    'assets/images/ORMSistema.png',
                    'assets/images/Vista cotizaciones.png',
                    'assets/images/Vista cotizaciones agenda.png',
                    'https://placehold.co/600x400/1F2937/E5E7EB?text=MORE...',
                ],
                github: null,
                online: null
            },
            {
                title: 'Focus Control - Gestor Personal',
                description: 'Aplicación de autocontrol y gestión de finanzas. Incluye módulos de Planificación, Tareas, Finanzas, Hábitos, Metas y Bienestar.',
                image: 'assets/images/FocusControl.png',
                tags: ['Laravel', 'MySQL', 'Alpine.js'],
                galleryImages: [
                    'assets/images/FocusControl.png',
                    'https://placehold.co/800x600/1F2937/E5E7EB?text=Focus+Control+2'
                ],
                github: null,
                online: null
            },
            {
                title: 'VueCommerce PWA',
                description: 'Vue-Commerce PWA es un proyecto moderno, rápido y funcional, desarrollado con Vue.js 3 y Vite. Su principal característica es su arquitectura de aplicación web progresiva (PWA), que permite su instalación, funcionamiento sin conexión y una experiencia de usuario similar a la de una aplicación nativa.',
                image: 'assets/images/VueCommerce.png',
                tags: ['Vue.js', 'Vite', 'Tailwind', 'PWA'],
                galleryImages: [
                    'assets/images/VueCommerce.png',
                    'assets/images/VueCommerce-product.png',
                    'assets/images/VueCommerce-cart.png'
                ],
                github: 'https://github.com/GerardoFC8/vue-commerce-pwa',
                online: 'https://vue-commerce-pwa.netlify.app/'
            },
            {
                title: 'FocusCript AI',
                description: `Una aplicación web diseñada para creadores de contenido que producen resúmenes de series, películas y animes. FocusCript AI utiliza inteligencia artificial para aprender tu estilo único y automatizar la creación de tus guiones y contenido para redes sociales.

Características Principales:
- Análisis y Perfil de Estilo Personalizado:
    > La IA analiza el contenido de tus videos de YouTube (a través de URLs) para capturar tu comportamiento, tono de humor y frases características.
    > Crea un "perfil de estilo" único que servirá como base para todas las futuras creaciones de contenido.

- Generación de Guiones Inteligente:
    > Crea guiones sobre temas específicos, manteniendo siempre la coherencia con tu estilo personal.
    > Permite adjuntar múltiples fuentes de información (videos, PDFs, imágenes, audios) para que la IA las analice y las incorpore en el guion final.

- Optimización y Expansión de Contenido:
    > Redes Sociales: Genera publicaciones adaptadas para TikTok, Instagram y X (Twitter) a partir del guion principal.
    > Análisis de Guion: Ofrece sugerencias y puntos de mejora sobre el guion generado para perfeccionarlo.
    > Contenido Corto: Extrae ideas clave y momentos impactantes, ideales para crear YouTube Shorts o TikToks.
    > Optimización para Clics: Sugiere títulos atractivos e ideas creativas para las miniaturas de tus videos.`,
                image: 'assets/images/FocusCript-AI.png',
                tags: ['Laravel', 'Gemini API', 'Livewire', 'MySQL', 'Tailwind'],
                galleryImages: [
                    'assets/images/FocusCript-AI-1.png',
                    'assets/images/FocusCript-AI-2.png',
                    'assets/images/FocusCript-AI-3.png',
                    'assets/images/FocusCript-AI-4.png',
                    'assets/images/FocusCript-AI-5.png',
                    'assets/images/FocusCript-AI-6.png',
                ],
                github: null,
                online: null
            }
        ],

        isModalOpen: false,
        projectTitle: '',
        projectImages: [],
        currentImageIndex: 0,

        openModal(project) {
            this.projectTitle = project.title;
            this.projectImages = project.galleryImages;
            this.currentImageIndex = 0;
            this.isModalOpen = true;
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.isModalOpen = false;
            document.body.style.overflow = 'auto';
        },
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.projectImages.length;
        },
        prevImage() {
            this.currentImageIndex = (this.currentImageIndex - 1 + this.projectImages.length) % this.projectImages.length;
        }
    };
}