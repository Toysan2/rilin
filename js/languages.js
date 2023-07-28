// Function to change the language
function changeLanguage(language) {
    const translations = {
        pl: {
            home: 'Strona główna',
            offer: 'Oferta',
            contact: 'Kontakt',
            about: 'O nas',
            heroTitle: 'ŚWIEŻE SMAKI<br>ŚWIATOWA PODRÓŻ!',
            transportHeading: 'Transport',
            transportContent1:
                'Zaufaj firmie Rilin - liderowi w szybkim transporcie na terenie całej Europy',
            transportContent2:
                'Zaufaj firmie Rilin - liderowi w szybkim transporcie na terenie całej Europy. Nasza rozległa sieć logistyczna i wykwalifikowany zespół gwarantują ekspresową dostawę Twoich towarów. Punktualność, bezpieczeństwo i efektywność to nasza misja. Oferujemy kompleksowe rozwiązania transportowe, od małych paczek po duże ładunki. Szybkość i profesjonalizm to nasza wizytówka!',
            transportButton: 'Więcej',
            packagingHeading: 'Opakowania',
            packagingContent1:
                'Twój zaufany partner w transporcie towarów oferuje także wyjątkową opcję pakowania',
            packagingContent2:
                'Firma Rilin zapewnia spersonalizowane pakowanie towarów. Wybierz swój sposób zabezpieczenia! Szybka dostawa w Europie. Profesjonalne podejście do logistyki i transportu.',
            packagingButton: 'Więcej',
            fruitsHeading: 'Warzywa i owoce',
            fruitsContent1: 'Świerzo, tanio, bezpiecznie i na czas',
            fruitsContent2:
                'Warzywa i owoce firmy Rilin spełniają wszystkie wymagane certyfikaty unijne. Zapewniamy najwyższą jakość i bezpieczeństwo naszych produktów. Ciesz się świeżością i zdrowiem z naszymi certyfikowanymi warzywami i owocami.',
            fruitsButton: 'Więcej',
            aboutHeading: 'O nas',
            aboutContent1: 'Łączymy rynki dzięki dobrej cenie',
            aboutContent2:
                'Jesteśmy mostem między lokalnymi producentami a europejskimi kupcami. Z dumą zrzeszamy lokalnych dostawców, oferując im dostęp do szerokiego rynku w Europie.',
            aboutButton: 'Więcej',
        },
        en: {
            home: 'Home',
            offer: 'Offer',
            contact: 'Contact',
            about: 'About',
            heroTitle: 'FRESH TASTES<br>WORLD JOURNEY!',
            transportHeading: 'Transport',
            transportContent1:
                'Trust Rilin company - a leader in fast transport throughout Europe',
            transportContent2:
                'Trust Rilin company - a leader in fast transport throughout Europe. Our extensive logistics network and qualified team guarantee express delivery of your goods. Punctuality, safety, and efficiency are our mission. We offer comprehensive transport solutions, from small packages to large shipments. Speed and professionalism are our hallmark!',
            transportButton: 'Read More',
            packagingHeading: 'Packaging',
            packagingContent1:
                'Your trusted partner in the transportation of goods also offers a unique packaging option',
            packagingContent2:
                'Rilin company provides personalized goods packaging. Choose your protection method! Fast delivery in Europe. Professional approach to logistics and transport.',
            packagingButton: 'Read More',
            fruitsHeading: 'Fruits and Vegetables',
            fruitsContent1: 'Fresh, affordable, safe, and on time',
            fruitsContent2:
                'Rilin fruits and vegetables meet all required EU certificates. We guarantee the highest quality and safety of our products. Enjoy freshness and health with our certified fruits and vegetables.',
            fruitsButton: 'Read More',
            aboutHeading: 'About Us',
            aboutContent1: 'We connect markets with a good price',
            aboutContent2:
                'We are a bridge between local producers and European buyers. With pride, we bring together local suppliers, providing them access to a broad market in Europe.',
            aboutButton: 'Read More',
        },
        de: {
            home: 'Startseite',
            offer: 'Angebot',
            contact: 'Kontakt',
            about: 'Über uns',
            heroTitle: 'FRISCHE GESCHMÄCKER<br>WELTREISE!',
            transportHeading: 'Transport',
            transportContent1:
                'Vertrauen Sie der Firma Rilin - dem Marktführer im schnellen Transport in ganz Europa',
            transportContent2:
                'Vertrauen Sie der Firma Rilin - dem Marktführer im schnellen Transport in ganz Europa. Unser umfangreiches Logistiknetzwerk und unser qualifiziertes Team garantieren die Expresslieferung Ihrer Güter. Pünktlichkeit, Sicherheit und Effizienz stehen bei uns im Mittelpunkt. Wir bieten umfassende Transportlösungen, von kleinen Paketen bis zu großen Sendungen. Geschwindigkeit und Professionalität sind unser Markenzeichen!',
            transportButton: 'Mehr',
            packagingHeading: 'Verpackung',
            packagingContent1:
                'Ihr vertrauensvoller Partner im Transport von Waren bietet auch eine einzigartige Verpackungsoption',
            packagingContent2:
                'Die Firma Rilin bietet eine personalisierte Verpackung von Waren. Wählen Sie Ihre Schutzmethode! Schnelle Lieferung in Europa. Professioneller Ansatz für Logistik und Transport.',
            packagingButton: 'Mehr',
            fruitsHeading: 'Gemüse und Obst',
            fruitsContent1: 'Frisch, erschwinglich, sicher und pünktlich',
            fruitsContent2:
                'Gemüse und Obst von Rilin erfüllen alle erforderlichen EU-Zertifikate. Wir garantieren höchste Qualität und Sicherheit unserer Produkte. Genießen Sie Frische und Gesundheit mit unserem zertifizierten Obst und Gemüse.',
            fruitsButton: 'Mehr',
            aboutHeading: 'Über uns',
            aboutContent1: 'Wir verbinden Märkte zu einem guten Preis',
            aboutContent2:
                'Wir sind eine Brücke zwischen lokalen Produzenten und europäischen Käufern. Mit Stolz bringen wir lokale Lieferanten zusammen und ermöglichen ihnen den Zugang zu einem breiten Markt in Europa.',
            aboutButton: 'Mehr',
        },
        es: {
            home: 'Inicio',
            offer: 'Oferta',
            contact: 'Contacto',
            about: 'Sobre nosotros',
            heroTitle: 'SABORES FRESCOS<br>VIAJE POR EL MUNDO!',
            transportHeading: 'Transporte',
            transportContent1:
                'Confía en la empresa Rilin, líder en transporte rápido en toda Europa',
            transportContent2:
                'Confía en la empresa Rilin, líder en transporte rápido en toda Europa. Nuestra extensa red logística y nuestro equipo calificado garantizan la entrega exprés de tus productos. Puntualidad, seguridad y eficiencia son nuestra misión. Ofrecemos soluciones de transporte integrales, desde pequeños paquetes hasta grandes envíos. ¡Velocidad y profesionalismo son nuestro sello distintivo!',
            transportButton: 'Más',
            packagingHeading: 'Embalaje',
            packagingContent1:
                'Tu socio de confianza en el transporte de mercancías también ofrece una opción de embalaje única',
            packagingContent2:
                'La empresa Rilin proporciona embalaje personalizado de mercancías. ¡Elige tu método de protección! Entrega rápida en Europa. Enfoque profesional en logística y transporte.',
            packagingButton: 'Más',
            fruitsHeading: 'Frutas y Verduras',
            fruitsContent1: 'Fresco, asequible, seguro y puntual',
            fruitsContent2:
                'Las frutas y verduras de Rilin cumplen con todos los certificados requeridos por la UE. Garantizamos la más alta calidad y seguridad de nuestros productos. Disfruta de la frescura y la salud con nuestras frutas y verduras certificadas.',
            fruitsButton: 'Más',
            aboutHeading: 'Sobre Nosotros',
            aboutContent1: 'Conectamos mercados con un buen precio',
            aboutContent2:
                'Somos un puente entre los productores locales y los compradores europeos. Con orgullo unimos a los proveedores locales, brindándoles acceso a un amplio mercado en Europa.',
            aboutButton: 'Más',
        },
        it: {
            home: 'Home',
            offer: 'Offerta',
            contact: 'Contatto',
            about: 'Chi siamo',
            heroTitle: 'SAPORI FRESCA<br>VIAGGIO NEL MONDO!',
            transportHeading: 'Trasporto',
            transportContent1:
                'Affidati alla società Rilin - leader nel trasporto veloce in tutta Europa',
            transportContent2:
                'Affidati alla società Rilin - leader nel trasporto veloce in tutta Europa. La nostra vasta rete logistica e il nostro team qualificato garantiscono la consegna rapida dei tuoi prodotti. Puntualità, sicurezza ed efficienza sono la nostra missione. Offriamo soluzioni di trasporto complete, dai piccoli pacchi alle grandi spedizioni. Velocità e professionalità sono il nostro marchio di fabbrica!',
            transportButton: 'Di Più',
            packagingHeading: 'Imballaggio',
            packagingContent1:
                "Il tuo partner affidabile nel trasporto di merci offre anche un'opzione di imballaggio unica",
            packagingContent2:
                "Rilin offre l'imballaggio personalizzato delle merci. Scegli il tuo metodo di protezione! Consegna rapida in Europa. Approccio professionale alla logistica e al trasporto.",
            packagingButton: 'Di Più',
            fruitsHeading: 'Frutta e Verdura',
            fruitsContent1: 'Fresco, conveniente, sicuro e puntuale',
            fruitsContent2:
                "La frutta e la verdura di Rilin soddisfano tutti i certificati richiesti dall'UE. Garantiamo la massima qualità e sicurezza dei nostri prodotti. Goditi la freschezza e la salute con la nostra frutta e verdura certificata.",
            fruitsButton: 'Di Più',
            aboutHeading: 'Chi Siamo',
            aboutContent1: 'Colleghiamo i mercati con un buon prezzo',
            aboutContent2:
                'Siamo un ponte tra i produttori locali e gli acquirenti europei. Con orgoglio uniamo i fornitori locali, offrendo loro accesso a un ampio mercato in Europa.',
            aboutButton: 'Di Più',
        },
    }

    const elements = document.querySelectorAll('[data-translate]')
    elements.forEach((element) => {
        const key = element.getAttribute('data-translate')
        if (translations[language] && translations[language][key]) {
            element.innerHTML = translations[language][key]
        }
    })
}

const languageButtons = document.querySelectorAll('.header-languages button')
languageButtons.forEach((button) => {
    button.addEventListener('click', function () {
        const language = button.classList[0]
        changeLanguage(language)
    })
})

// Set the default language on page load (e.g., Polish)
const defaultLanguage = 'pl'
changeLanguage(defaultLanguage)
