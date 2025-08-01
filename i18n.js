// Debug: Verificar que el script se está ejecutando
console.log("i18n.js se está ejecutando");

const translations = {
  es: {
    // Navegación
    navInicio: "Inicio",
    navSobreNosotros: "Sobre Nosotros", 
    navServicios: "Servicios",
    navProyectos: "Proyectos",
    navContacto: "Contacto",
    
    // Hero Section
    heroText: "Desarrollamos páginas web modernas y profesionales que impulsan tu presencia digital al siguiente nivel",
    heroBtn: "Comenzar Proyecto",
    
    // Sobre Nosotros
    aboutTitle: "Sobre Nosotros",
    aboutText1: "En GRIDEV somos especialistas en crear soluciones web que transforman ideas en realidades funcionales. Con meses de experiencia en desarrollo web, nos dedicamos a ofrecer productos de alta calidad que superan las expectativas de nuestros clientes.",
    aboutText2: "Nuestro enfoque se basa en la innovación, la funcionalidad y el diseño moderno. Cada proyecto es una oportunidad para crear algo único y valioso que impulse el crecimiento de tu negocio o marca personal.",
    aboutText3: "Trabajamos con las últimas tecnologías y mejores prácticas del desarrollo web, garantizando resultados profesionales, escalables y mantenibles en el tiempo.",
    
    // Servicios
    servicesTitle: "Nuestros Servicios",
    service1Title: "Desarrollo Web",
    service1Desc: "Realizamos sitios web atractivos y funcionales utilizando HTML, CSS y JavaScript puro. Ideales para portfolios, landing pages, sitios corporativos y páginas informativas.",
    service2Title: "Diseño Responsivo", 
    service2Desc: "Creamos sitios web que se adaptan perfectamente a cualquier dispositivo: móvil, tablet o escritorio. Experiencia óptima en todas las pantallas.",
    service3Title: "Optimización y Mantenimiento",
    service3Desc: "Realizamos ajustes y mejoras visuales o técnicas en sitios ya existentes, y ofrecemos mantenimiento para mantener todo funcionando correctamente.",
    
    // Proyectos
    projectsTitle: "Proyectos Realizados",
    project1Title: "Web conmemorativa para mascota",
    project1Desc: "Sitio conmemorativo con animaciones de imágenes, galería de fotos, y más",
    project2Title: "Landing Page para servidor de MTA",
    project2Desc: "Web informativa sobre un servidor de MTA Roleplay, con noticias, eventos, etc.",
    project3Title: "Landing Page de VALORANT",
    project3Desc: "Sitio web sobre estadísticas de una comunidad de VALORANT. Palmarés de jugadores, historial de torneos, y mucho más.",
    project4Title: "Gestor de tareas - TasKPro",
    project4Desc: "Aplicación web para agendar tus tareas dependiendo su importancia, con temas claros y oscuros, y con almacenamiento de datos.",
    viewProject: "Ver Proyecto",
    
    // Contacto
    contactTitle: "Contacto",
    contactInfo: "Información de Contacto",
    email: "Email:",
    discord: "Discord:",
    hours: "Horario de Atención:",
    quoteRequest: "Solicitar Cotización",
    
    // Footer
    footerText: "© 2025 GRIDEV. Todos los derechos reservados. | Desarrollando el futuro digital",
    
    // Form placeholders y values
    namePlaceholder: "Ingrese su nombre",
    emailPlaceholder: "Ingrese su correo electrónico", 
    projectTypePlaceholder: "Tipo de proyecto",
    projectDetailPlaceholder: "Describe tu proyecto en detalle",
    sendBtn: "ENVIAR"
  },
  en: {
    // Navigation
    navInicio: "Home",
    navSobreNosotros: "About Us",
    navServicios: "Services", 
    navProyectos: "Projects",
    navContacto: "Contact",
    
    // Hero Section
    heroText: "We develop modern and professional websites that boost your digital presence to the next level",
    heroBtn: "Start Project",
    
    // About Us
    aboutTitle: "About Us",
    aboutText1: "At GRIDEV we specialize in creating web solutions that transform ideas into functional realities. With months of experience in web development, we are dedicated to offering high-quality products that exceed our clients' expectations.",
    aboutText2: "Our approach is based on innovation, functionality and modern design. Each project is an opportunity to create something unique and valuable that drives the growth of your business or personal brand.",
    aboutText3: "We work with the latest technologies and best practices in web development, guaranteeing professional, scalable and maintainable results over time.",
    
    // Services
    servicesTitle: "Our Services",
    service1Title: "Web Development",
    service1Desc: "We create attractive and functional websites using pure HTML, CSS and JavaScript. Ideal for portfolios, landing pages, corporate sites and informational pages.",
    service2Title: "Responsive Design",
    service2Desc: "We create websites that adapt perfectly to any device: mobile, tablet or desktop. Optimal experience on all screens.",
    service3Title: "Optimization and Maintenance",
    service3Desc: "We make visual or technical adjustments and improvements to existing sites, and offer maintenance to keep everything working properly.",
    
    // Projects
    projectsTitle: "Completed Projects",
    project1Title: "Memorial website for pet",
    project1Desc: "Memorial site with image animations, photo gallery, and more",
    project2Title: "Landing Page for MTA server",
    project2Desc: "Informational website about an MTA Roleplay server, with news, events, etc.",
    project3Title: "VALORANT Landing Page",
    project3Desc: "Website about statistics of a VALORANT community. Player records, tournament history, and much more.",
    project4Title: "Task Manager - TasKPro",
    project4Desc: "Web application to schedule your tasks depending on their importance, with light and dark themes, and data storage.",
    viewProject: "View Project",
    
    // Contact
    contactTitle: "Contact",
    contactInfo: "Contact Information",
    email: "Email:",
    discord: "Discord:",
    hours: "Business Hours:",
    quoteRequest: "Request Quote",
    
    // Footer
    footerText: "© 2025 GRIDEV. All rights reserved. | Developing the digital future",
    
    // Form placeholders and values
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    projectTypePlaceholder: "Project type", 
    projectDetailPlaceholder: "Describe your project in detail",
    sendBtn: "SEND"
  }
};

console.log("Traducciones cargadas:", translations);

// Función para esperar a que el DOM esté completamente cargado
function initializeI18n() {
  console.log("Inicializando i18n...");
  
  const langSelector = document.getElementById("lang-selector");
  console.log("Selector encontrado:", langSelector);
  
  // Verificar cuántos elementos con data-i18n existen
  const elementsWithI18n = document.querySelectorAll("[data-i18n]");
  console.log("Elementos con data-i18n encontrados:", elementsWithI18n.length);
  
  elementsWithI18n.forEach((el, index) => {
    console.log(`Elemento ${index + 1}:`, el.tagName, "data-i18n:", el.getAttribute("data-i18n"));
  });

  function setLanguage(lang) {
    console.log("Cambiando idioma a:", lang);
    
    // Guardar idioma seleccionado
    window.currentLang = lang;
    
    let translatedCount = 0;
    
    // Actualizar textos con data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        console.log(`Traduciendo ${key}: "${el.textContent}" → "${translations[lang][key]}"`);
        el.textContent = translations[lang][key];
        translatedCount++;
      } else {
        console.warn(`No se encontró traducción para la clave: ${key} en idioma: ${lang}`);
      }
    });
    
    // Actualizar placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        console.log(`Traduciendo placeholder ${key}: "${el.placeholder}" → "${translations[lang][key]}"`);
        el.placeholder = translations[lang][key];
        translatedCount++;
      } else {
        console.warn(`No se encontró traducción para placeholder: ${key} en idioma: ${lang}`);
      }
    });
    
    // Actualizar values (para botones)
    document.querySelectorAll("[data-i18n-value]").forEach(el => {
      const key = el.getAttribute("data-i18n-value");
      if (translations[lang] && translations[lang][key]) {
        console.log(`Traduciendo value ${key}: "${el.value}" → "${translations[lang][key]}"`);
        el.value = translations[lang][key];
        translatedCount++;
      } else {
        console.warn(`No se encontró traducción para value: ${key} en idioma: ${lang}`);
      }
    });
    
    console.log(`Total de elementos traducidos: ${translatedCount}`);
    
    // Actualizar el atributo lang del documento
    document.documentElement.lang = lang;
    
    // Actualizar el selector de idioma
    if (langSelector) {
      langSelector.value = lang;
    }
  }

  // Inicializar con español por defecto
  setLanguage("es");

  // Event listener para el selector de idioma
  if (langSelector) {
    langSelector.addEventListener("change", e => {
      console.log("Selector de idioma cambió a:", e.target.value);
      setLanguage(e.target.value);
    });
    console.log("Event listener agregado al selector");
  } else {
    console.error("No se pudo encontrar el selector de idioma con ID 'lang-selector'");
  }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeI18n);
} else {
  // DOM ya está cargado
  initializeI18n();
}