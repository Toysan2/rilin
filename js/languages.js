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
            transportContent:
                'Zaufaj firmie Rilin - liderowi w szybkim transporcie na terenie całej Europy',
            packagingHeading: 'Opakowania',
            packagingContent:
                'Twój zaufany partner w transporcie towarów oferuje także wyjątkową opcję pakowania',
            fruitsHeading: 'Warzywa i owoce',
            fruitsContent: 'Świerzo, tanio, bezpiecznie i na czas',
            aboutHeading: 'O nas',
            aboutContent: 'Łączymy rynki dzięki dobrej cenie',
        },
        en: {
            home: 'Home',
            offer: 'Offer',
            contact: 'Contact',
            about: 'About',
            heroTitle: 'FRESH TASTES<br>WORLD JOURNEY!',
            transportHeading: 'Transport',
            transportContent:
                'Trust Rilin company - a leader in fast transport throughout Europe',
            packagingHeading: 'Packaging',
            packagingContent:
                'Your trusted partner in the transportation of goods also offers a unique packaging option',
            fruitsHeading: 'Fruits and Vegetables',
            fruitsContent: 'Fresh, affordable, safe, and on time',
            aboutHeading: 'About Us',
            aboutContent: 'We connect markets with a good price',
        },
        de: {
            home: 'Startseite',
            offer: 'Angebot',
            contact: 'Kontakt',
            about: 'Über uns',
            heroTitle: 'FRISCHE GESCHMÄCKER<br>WELTREISE!',
            transportHeading: 'Transport',
            transportContent:
                'Vertrauen Sie der Firma Rilin - dem Marktführer im schnellen Transport in ganz Europa',
            packagingHeading: 'Verpackung',
            packagingContent:
                'Ihr vertrauensvoller Partner im Transport von Waren bietet auch eine einzigartige Verpackungsoption',
            fruitsHeading: 'Gemüse und Obst',
            fruitsContent: 'Frisch, erschwinglich, sicher und pünktlich',
            aboutHeading: 'Über uns',
            aboutContent: 'Wir verbinden Märkte zu einem guten Preis',
        },
        es: {
            home: 'Inicio',
            offer: 'Oferta',
            contact: 'Contacto',
            about: 'Sobre nosotros',
            heroTitle: 'SABORES FRESCOS<br>VIAJE POR EL MUNDO!',
            transportHeading: 'Transporte',
            transportContent:
                'Confía en la empresa Rilin, líder en transporte rápido en toda Europa',
            packagingHeading: 'Embalaje',
            packagingContent:
                'Su socio de confianza en el transporte de mercancías también ofrece una opción de embalaje única',
            fruitsHeading: 'Frutas y Verduras',
            fruitsContent: 'Fresco, asequible, seguro y puntual',
            aboutHeading: 'Sobre Nosotros',
            aboutContent: 'Conectamos mercados con un buen precio',
        },
        it: {
            home: 'Home',
            offer: 'Offerta',
            contact: 'Contatto',
            about: 'Chi siamo',
            heroTitle: 'SAPORI FRESCA<br>VIAGGIO NEL MONDO!',
            transportHeading: 'Trasporto',
            transportContent:
                'Affidati alla società Rilin - leader nel trasporto veloce in tutta Europa',
            packagingHeading: 'Imballaggio',
            packagingContent:
                "Il tuo partner affidabile nel trasporto di merci offre anche un'opzione di imballaggio unica",
            fruitsHeading: 'Frutta e Verdura',
            fruitsContent: 'Fresco, conveniente, sicuro e puntuale',
            aboutHeading: 'Chi Siamo',
            aboutContent: 'Colleghiamo i mercati con un buon prezzo',
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
