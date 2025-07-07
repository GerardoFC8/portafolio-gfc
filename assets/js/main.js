const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas al de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Símbolos de programación para la lluvia
const chars = "01;{}[]()=>.<,$:&'!";
const charArray = chars.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;

// Array para almacenar la posición 'y' de cada gota de lluvia
const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    // Fondo semi-transparente para crear el efecto de estela
    ctx.fillStyle = 'rgba(17, 24, 39, 0.05)'; // Usamos el color de fondo oscuro
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Color de los caracteres de la lluvia
    // Se adapta al tema claro/oscuro
    const isDarkMode = document.documentElement.classList.contains('dark');
    ctx.fillStyle = isDarkMode ? '#2dd4bf' : '#0f7fff'; // Verde azulado para oscuro, celeste para claro
    ctx.font = `${fontSize}px monospace`;

    // Dibujar cada gota
    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Resetear la gota al principio de forma aleatoria para que no sea uniforme
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Incrementar la posición 'y'
        drops[i]++;
    }
}

// Iniciar la animación
const animationInterval = setInterval(draw, 40);

// Ajustar el canvas si la ventana cambia de tamaño
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Reiniciar las gotas para el nuevo tamaño
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DE ANIMACIÓN DE SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach((el) => {
        observer.observe(el);
    });

    // const translations = {
    //     "es": {
    //         "page_title": "Portafolio de Gerardo Franco - Desarrollador Full-Stack",
    //         "nav_tech": "Tecnologías",
    //         "nav_exp": "Experiencia",
    //         "nav_projects": "Proyectos",
    //         "nav_contact": "Contacto",
    //         "nav_tech_mobile": "Tecnologías",
    //         "nav_exp_mobile": "Experiencia",
    //         "nav_projects_mobile": "Proyectos",
    //         "nav_contact_mobile": "Contacto",
    //         "hero_greeting": "Hola, soy",
    //         "hero_subtitle": "Desarrollador Full-Stack apasionado por crear soluciones web robustas y escalables. Transformo ideas en código funcional y elegante.",
    //         "hero_button_projects": "Ver mis Proyectos",
    //         "hero_button_cv": "Descargar CV",
    //         "tech_title": "Tecnologías que Domino",
    //         "knowledge_title": "Conocimientos en",
    //         "exp_title": "Experiencia Profesional",
    //         "exp1_date": "Enero 2022 - Presente",
    //         "exp1_job": "Desarrollador Full-Stack en Tech Solutions Inc.",
    //         "exp1_desc": "Lideré el desarrollo del backend para una plataforma SaaS usando Laravel y MySQL. Implementé microservicios con Docker y optimicé consultas a la base de datos, mejorando el rendimiento en un 30%.",
    //         "exp2_date": "Junio 2020 - Diciembre 2021",
    //         "exp2_job": "Desarrollador PHP en Web Innovators",
    //         "exp2_desc": "Mantenimiento y desarrollo de nuevas funcionalidades para diversos sitios de e-commerce basados en PHP nativo y WordPress. Integración con pasarelas de pago y APIs de terceros.",
    //         "projects_title": "Proyectos Destacados",
    //         "project1_title": "Sistema CRM para Startups",
    //         "project1_desc": "Una plataforma completa para la gestión de clientes, construida con Laravel y Vue.js.",
    //         "project2_title": "Tienda Online de Ropa",
    //         "project2_desc": "E-commerce con panel de administración, pasarela de pago y gestión de inventario.",
    //         "project3_title": "Blog con CMS Propio",
    //         "project3_desc": "Un blog personal rápido y ligero, desarrollado con React y un backend headless.",
    //         "contact_title": "Hablemos",
    //         "contact_subtitle": "Estoy disponible para oportunidades freelance o un nuevo desafío profesional. Si tienes un proyecto en mente, no dudes en contactarme.",
    //         "footer_copy": "&copy; 2025 Gerardo Franco | Developer"
    //     },
    //     "en": {
    //         "page_title": "Gerardo Franco's Portfolio - Full-Stack Developer",
    //         "nav_tech": "Technologies",
    //         "nav_exp": "Experience",
    //         "nav_projects": "Projects",
    //         "nav_contact": "Contact",
    //         "nav_tech_mobile": "Technologies",
    //         "nav_exp_mobile": "Experience",
    //         "nav_projects_mobile": "Projects",
    //         "nav_contact_mobile": "Contact",
    //         "hero_greeting": "Hello, I'm",
    //         "hero_subtitle": "Full-Stack Developer passionate about creating robust and scalable web solutions. I transform ideas into functional and elegant code.",
    //         "hero_button_projects": "View my Projects",
    //         "hero_button_cv": "Download CV",
    //         "tech_title": "Technologies I Master",
    //         "knowledge_title": "Knowledge in",
    //         "exp_title": "Professional Experience",
    //         "exp1_date": "January 2022 - Present",
    //         "exp1_job": "Full-Stack Developer at Tech Solutions Inc.",
    //         "exp1_desc": "Led backend development for a SaaS platform using Laravel and MySQL. Implemented microservices with Docker and optimized database queries, improving performance by 30%.",
    //         "exp2_date": "June 2020 - December 2021",
    //         "exp2_job": "PHP Developer at Web Innovators",
    //         "exp2_desc": "Maintenance and development of new features for various e-commerce sites based on native PHP and WordPress. Integration with payment gateways and third-party APIs.",
    //         "projects_title": "Featured Projects",
    //         "project1_title": "CRM System for Startups",
    //         "project1_desc": "A complete platform for customer management, built with Laravel and Vue.js.",
    //         "project2_title": "Online Clothing Store",
    //         "project2_desc": "E-commerce with an admin panel, payment gateway, and inventory management.",
    //         "project3_title": "Blog with Custom CMS",
    //         "project3_desc": "A fast and lightweight personal blog, developed with React and a headless backend.",
    //         "contact_title": "Let's Talk",
    //         "contact_subtitle": "I am available for freelance opportunities or a new professional challenge. If you have a project in mind, feel free to contact me.",
    //         "footer_copy": "&copy; 2025 Gerardo Franco | Developer"
    //     }
    // };

    const languageSelectorEs = document.getElementById('lang-es');
    const languageSelectorEn = document.getElementById('lang-en');

    const setLanguage = (lang) => {
        // Guardar el idioma seleccionado
        localStorage.setItem('language', lang);

        // Actualizar el atributo lang del HTML
        document.documentElement.lang = lang;

        // Actualizar los textos
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Actualizar el estilo del botón activo
        if (lang === 'es') {
            languageSelectorEs.classList.add('active-lang');
            languageSelectorEn.classList.remove('active-lang');
        } else {
            languageSelectorEn.classList.add('active-lang');
            languageSelectorEs.classList.remove('active-lang');
        }
    };

    languageSelectorEs.addEventListener('click', () => setLanguage('es'));
    languageSelectorEn.addEventListener('click', () => setLanguage('en'));

    // Al cargar la página, establecer el idioma guardado o el predeterminado
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
});