// Function to change the language
const languages = {
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
        transportFont:
            'Odkryj magię bezproblemowych i szybkich rozwiązań transportowych z Rilin.',
        transportFont2:
            'Nasza rozległa sieć i wysoko wykwalifikowany zespół zapewniają, że Twoje dobra dotrą do celu z zawrotną prędkością.',
        transportFont3:
            'Dlaczego zaufać Rilin w swoich potrzebach transportowych?',
        expressDelivery: 'Ekspresowa Dostawa:',
        expressDelivery2:
            'Odkryj radość szybkich dostaw, które Cię zadziwią. Twoje dobra będą w najlepszych rękach, dotrąc do celu zanim się obejrzysz.',
        bestQuality: 'Najwyższa Jakość:',
        bestQuality2:
            'W Rilin jakość to nie tylko obietnica, to nasze zobowiązanie. Doświadcz doskonałości obsługi na każdym etapie, począwszy od wsparcia klienta, aż po terminową dostawę.',
        punctual: 'Gwarancja Punktualności:',
        punctual2:
            'Czas to cenny skarb, a my szanujemy Twój! Nasza dopracowana logistyka zapewnia terminowość bez kompromisów.',
        onTime: 'Bezpieczeństwo na Pierwszym Miejscu:',
        onTime2:
            'Śpij spokojnie, wiedząc że Twój cenny ładunek jest w najbezpieczniejszych rękach. Priorytetem jest dla nas stosowanie zasad bezpieczeństwa, aby chronić Twoje dobra w całej podróży.',
        range: 'Dotarcie do Całej Europy:',
        range2: 'Gdziekolwiek potrzebujesz dostarczyć swoje dobra, mamy to pod kontrolą. Nasza rozległa sieć w Europie sprawia, że żadne miejsce nie jest zbyt odległe.',
        flexible: 'Rozwiązania Dopasowane do Ciebie:',
        flexible2:
            'Żadne dwie firmy nie są takie same, i o tym wiemy! Nasz zespół dopasowuje rozwiązania transportowe do Twoich unikalnych wymagań.',
        packages: `Szukasz idealnych opakowań dla transportu warzyw i owoców?
            Mamy dla Ciebie rozwiązania, które spełnią Twoje
            oczekiwania! Nasza firma oferuje szeroki wybór opakowań
            dostosowanych do potrzeb Twojego biznesu. Jesteśmy
            przekonani, że opakowania odgrywają kluczową rolę w
            transporcie delikatnych produktów. Dlatego z dumą
            prezentujemy nasz różnorodny asortyment, który zapewni
            optymalną ochronę i utrzymanie świeżości Twoich warzyw i
            owoców. Bez względu na rodzaj, wielkość czy ilość, mamy
            odpowiednie opakowania, które zachowają ich jakość i smak.
            Nasi doświadczeni specjaliści chętnie doradzą Ci w wyborze
            najlepszych rozwiązań dopasowanych do Twoich wymagań. Nasza
            pasja i zaangażowanie sprawią, że Twoje produkty dotrą do
            celu w nienaruszonym stanie. Niezawodność, jakość i
            terminowość to nasze motto. Dzięki innowacyjnym technologiom
            i starannemu wykonaniu, nasze opakowania są solidne i
            skuteczne. Gwarantujemy również terminowe dostawy, abyś mógł
            spokojnie zarządzać swoim biznesem. Skontaktuj się z nami
            już dziś! Razem stworzymy rozwiązania, które przyspieszą
            Twój sukces w transporcie warzyw i owoców.`,
        product1a: 'Kapusta Biała',
        product1b: 'Dostępność: Cały rok',
        product2a: 'Kapusta Czerwona',
        product2b: 'Dostępność: Cały rok',
        product3a: 'Kapusta Pekińska',
        product3b: 'Dostępność: Cały rok',
        product4a: 'Kapusta Włoska',
        product4b: 'Dostępność: Lipiec - Kwiecień',
        product5a: 'Por',
        product5b: 'Dostępność: Lipiec - Maj',
        product6a: 'Papryka',
        product6b: 'Dostępność: Czerwiec - Październik',
        product7a: 'Ziemniaki',
        product7b: 'Dostępność: Cały rok',
        product8a: 'Marchew',
        product8b: 'Dostępność: Lipiec - Kwiecień',
        product9a: 'Dynia',
        product9b: 'Dostępność: Wrzesień - Listopad',
        product10a: 'Kalafior',
        product10b: 'Dostępność: Maj - Listopad',
        product11a: 'Kalarepa',
        product11b: 'Dostępność: Maj - Listopad',
        product12a: 'Cukinia',
        product12b: 'Dostępność: Czerwiec - Listopad',
        product13a: 'Natka Pietruszki',
        product13b: 'Dostępność: Czerwiec - Listopad',
        product14a: 'Jabłka',
        product14b: 'Dostępność: Cały Rok',
        product15a: 'Gruszki',
        product15b: 'Dostępność: Cały Rok',
        product16a: 'Pomidory',
        product16b: 'Dostępność: Maj - Listopad',
        product17a: 'Seler',
        product17b: 'Dostępność: Sierpień - Kwiecień',
        product18a: 'Seler Naciowy',
        product18b: 'Dostępność: Lipiec - Kwiecień',
        product19a: 'Cebula Złota',
        product19b: 'Dostępność: Cały Rok',
        product20a: 'Cebula Czerwona',
        product20b: 'Dostępność: Cały Rok',
        product21a: 'Sałata Lodowa',
        product21b: 'Dostępność: Maj - Październik',
        product22a: 'Rabarbar',
        product22b: 'Dostępność: Kwiecień - Listopad',
        product23a: 'Bakłażan',
        product23b: 'Dostępność: Lipiec - Październik',
        offerNotice:
            'W celu ustalenia szczegółów gatunku owoców i warzyw prosimy o kontakt mailowy',
        aboutUs:
            'Jesteśmy firmą zrzeszającą wielu polskich producentów warzyw oraz owoców takich jak my. Chcemy, by każdy znał dobrą jakość smaku naszych lokalnych produktów.',
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
        transportFont:
            'Discover the magic of seamless and fast transport solutions with Rilin.',
        transportFont2:
            'Our extensive network and highly qualified team ensure that your goods reach their destination at a breathtaking speed.',
        transportFont3: 'Why trust Rilin with your transportation needs?',
        expressDelivery: 'Express Delivery:',
        expressDelivery2:
            'Discover the joy of fast deliveries that will surprise you. Your goods will be in the best hands, reaching their destination before you know it.',
        bestQuality: 'Highest Quality:',
        bestQuality2:
            "At Rilin, quality is not just a promise, it's our commitment. Experience excellence in service at every stage, from customer support to timely delivery.",
        punctual: 'Punctuality Guarantee:',
        punctual2:
            'Time is precious, and we respect yours! Our well-developed logistics ensure punctuality without compromise.',
        onTime: 'Safety First:',
        onTime2:
            'Rest easy, knowing that your valuable cargo is in the safest hands. Our top priority is adhering to safety principles to protect your goods throughout the journey.',
        range: 'Coverage in Whole Europe:',
        range2: "Wherever you need to deliver your goods, we've got it under control. Our extensive network in Europe ensures no place is too far.",
        flexible: 'Tailored Solutions:',
        flexible2:
            'No two companies are the same, and we understand that! Our team customizes transport solutions to meet your unique requirements.',
        packages: `Looking for the perfect packaging for transporting vegetables and fruits?
            We have solutions that will meet your expectations! Our company offers a wide range of
            packaging tailored to your business needs. We firmly believe that packaging plays a crucial
            role in transporting delicate products. Therefore, we proudly present our diverse assortment
            that will provide optimal protection and freshness for your vegetables and fruits. Regardless
            of the type, size, or quantity, we have the right packaging that will preserve their quality
            and taste. Our experienced specialists will be happy to advise you on choosing the best
            solutions tailored to your requirements. Our passion and commitment will ensure that your
            products reach their destination in perfect condition. Reliability, quality, and punctuality are
            our motto. With innovative technologies and careful craftsmanship, our packaging is
            reliable and effective. We also guarantee timely deliveries, so you can manage your business
            with peace of mind. Contact us today! Together, we will create solutions that will accelerate
            your success in transporting vegetables and fruits.`,
        product1a: 'White Cabbage',
        product1b: 'Availability: Year-round',
        product2a: 'Red Cabbage',
        product2b: 'Availability: Year-round',
        product3a: 'Chinese Cabbage',
        product3b: 'Availability: Year-round',
        product4a: 'Savoy Cabbage',
        product4b: 'Availability: July - April',
        product5a: 'Leek',
        product5b: 'Availability: July - May',
        product6a: 'Pepper',
        product6b: 'Availability: June - October',
        product7a: 'Potatoes',
        product7b: 'Availability: Year-round',
        product8a: 'Carrots',
        product8b: 'Availability: July - April',
        product9a: 'Pumpkin',
        product9b: 'Availability: September - November',
        product10a: 'Cauliflower',
        product10b: 'Availability: May - November',
        product11a: 'Kohlrabi',
        product11b: 'Availability: May - November',
        product12a: 'Zucchini',
        product12b: 'Availability: June - November',
        product13a: 'Parsley',
        product13b: 'Availability: June - November',
        product14a: 'Apples',
        product14b: 'Availability: Year-round',
        product15a: 'Pears',
        product15b: 'Availability: Year-round',
        product16a: 'Tomatoes',
        product16b: 'Availability: May - November',
        product17a: 'Celery',
        product17b: 'Availability: August - April',
        product18a: 'Celery Root',
        product18b: 'Availability: July - April',
        product19a: 'Golden Onion',
        product19b: 'Availability: Year-round',
        product20a: 'Red Onion',
        product20b: 'Availability: Year-round',
        product21a: 'Iceberg Lettuce',
        product21b: 'Availability: May - October',
        product22a: 'Rhubarb',
        product22b: 'Availability: April - November',
        product23a: 'Eggplant',
        product23b: 'Availability: July - October',
        offerNotice:
            'For details regarding fruit and vegetable varieties, please contact us via email',
        aboutUs:
            'We are a company that brings together many Polish producers of vegetables and fruits like us. We want everyone to know the excellent taste quality of our local products.',
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
        transportFont:
            'Entdecken Sie die Magie nahtloser und schneller Transportlösungen mit Rilin.',
        transportFont2:
            'Unser umfangreiches Netzwerk und hochqualifiziertes Team stellen sicher, dass Ihre Güter mit atemberaubender Geschwindigkeit ihr Ziel erreichen.',
        transportFont3:
            'Warum sollten Sie Rilin Ihr Vertrauen schenken, wenn es um Ihre Transportbedürfnisse geht?',
        expressDelivery: 'Expresslieferung:',
        expressDelivery2:
            'Entdecken Sie die Freude an schnellen Lieferungen, die Sie überraschen werden. Ihre Güter sind in den besten Händen und erreichen ihr Ziel, bevor Sie es bemerken.',
        bestQuality: 'Höchste Qualität:',
        bestQuality2:
            'Bei Rilin ist Qualität nicht nur ein Versprechen, sondern unsere Verpflichtung. Erleben Sie Exzellenz im Service in jeder Phase, vom Kundensupport bis zur pünktlichen Lieferung.',
        punctual: 'Pünktlichkeitsgarantie:',
        punctual2:
            'Zeit ist kostbar, und wir respektieren Ihre! Unsere gut entwickelte Logistik gewährleistet Pünktlichkeit ohne Kompromisse.',
        onTime: 'Sicherheit an erster Stelle:',
        onTime2:
            'Ruhig schlafen, in dem Wissen, dass Ihre wertvolle Fracht in den sichersten Händen ist. Unsere oberste Priorität ist die Einhaltung von Sicherheitsprinzipien, um Ihre Güter während der gesamten Reise zu schützen.',
        range: 'Abdeckung in ganz Europa:',
        range2: 'Egal, wo Sie Ihre Güter liefern müssen, wir haben es im Griff. Unser umfangreiches Netzwerk in Europa sorgt dafür, dass kein Ort zu weit entfernt ist.',
        flexible: 'Maßgeschneiderte Lösungen:',
        flexible2:
            'Keine zwei Unternehmen sind gleich, und das wissen wir! Unser Team passt Transportlösungen an, um Ihren einzigartigen Anforderungen gerecht zu werden.',
        packages: `Suchen Sie die perfekte Verpackung für den Transport von Gemüse und Obst?
            Wir haben Lösungen, die Ihren Erwartungen entsprechen! Unser Unternehmen bietet eine
            Vielzahl von Verpackungen, die auf Ihre Geschäftsanforderungen zugeschnitten sind. Wir sind
            fest davon überzeugt, dass Verpackungen eine entscheidende Rolle beim Transport empfindlicher
            Produkte spielen. Daher präsentieren wir stolz unser vielfältiges Sortiment, das optimalen
            Schutz und Frische für Ihr Gemüse und Obst bietet. Unabhängig von der Art, Größe oder Menge
            haben wir die richtige Verpackung, die deren Qualität und Geschmack bewahrt. Unsere erfahrenen
            Spezialisten beraten Sie gerne bei der Auswahl der besten Lösungen, die auf Ihre Anforderungen
            zugeschnitten sind. Unsere Leidenschaft und unser Engagement sorgen dafür, dass Ihre Produkte in
            einwandfreiem Zustand ihr Ziel erreichen. Verlässlichkeit, Qualität und Pünktlichkeit sind unser
            Motto. Mit innovativen Technologien und sorgfältiger Handwerkskunst sind unsere Verpackungen
            zuverlässig und effektiv. Wir garantieren auch pünktliche Lieferungen, damit Sie Ihr Geschäft
            beruhigt führen können. Kontaktieren Sie uns noch heute! Gemeinsam werden wir Lösungen
            entwickeln, die Ihren Erfolg beim Transport von Gemüse und Obst beschleunigen.`,
        product1a: 'Weißkohl',
        product1b: 'Verfügbarkeit: Ganzjährig',
        product2a: 'Rotkohl',
        product2b: 'Verfügbarkeit: Ganzjährig',
        product3a: 'Chinakohl',
        product3b: 'Verfügbarkeit: Ganzjährig',
        product4a: 'Wirsingkohl',
        product4b: 'Verfügbarkeit: Juli - April',
        product5a: 'Lauch',
        product5b: 'Verfügbarkeit: Juli - Mai',
        product6a: 'Paprika',
        product6b: 'Verfügbarkeit: Juni - Oktober',
        product7a: 'Kartoffeln',
        product7b: 'Verfügbarkeit: Ganzjährig',
        product8a: 'Karotten',
        product8b: 'Verfügbarkeit: Juli - April',
        product9a: 'Kürbis',
        product9b: 'Verfügbarkeit: September - November',
        product10a: 'Blumenkohl',
        product10b: 'Verfügbarkeit: Mai - November',
        product11a: 'Kohlrabi',
        product11b: 'Verfügbarkeit: Mai - November',
        product12a: 'Zucchini',
        product12b: 'Verfügbarkeit: Juni - November',
        product13a: 'Petersilie',
        product13b: 'Verfügbarkeit: Juni - November',
        product14a: 'Äpfel',
        product14b: 'Verfügbarkeit: Ganzjährig',
        product15a: 'Birnen',
        product15b: 'Verfügbarkeit: Ganzjährig',
        product16a: 'Tomaten',
        product16b: 'Verfügbarkeit: Mai - November',
        product17a: 'Sellerie',
        product17b: 'Verfügbarkeit: August - April',
        product18a: 'Knollensellerie',
        product18b: 'Verfügbarkeit: Juli - April',
        product19a: 'Goldene Zwiebel',
        product19b: 'Verfügbarkeit: Ganzjährig',
        product20a: 'Rote Zwiebel',
        product20b: 'Verfügbarkeit: Ganzjährig',
        product21a: 'Eisbergsalat',
        product21b: 'Verfügbarkeit: Mai - Oktober',
        product22a: 'Rhabarber',
        product22b: 'Verfügbarkeit: April - November',
        product23a: 'Aubergine',
        product23b: 'Verfügbarkeit: Juli - Oktober',
        offerNotice:
            'Für Details zu Obst- und Gemüsesorten kontaktieren Sie uns bitte per E-Mail',
        aboutUs:
            'Wir sind ein Unternehmen, das viele polnische Produzenten von Gemüse und Obst wie uns zusammenführt. Wir möchten, dass jeder die ausgezeichnete Geschmacksqualität unserer lokalen Produkte kennt.',
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
        transportFont:
            'Descubre la magia de soluciones de transporte rápidas y sin problemas con Rilin.',
        transportFont2:
            'Nuestra amplia red y equipo altamente calificado aseguran que tus bienes lleguen a su destino a una velocidad sorprendente.',
        transportFont3:
            '¿Por qué confiar en Rilin para tus necesidades de transporte?',
        expressDelivery: 'Entrega Express:',
        expressDelivery2:
            'Descubre la alegría de entregas rápidas que te sorprenderán. Tus bienes estarán en las mejores manos, llegando a su destino antes de que te des cuenta.',
        bestQuality: 'La Mejor Calidad:',
        bestQuality2:
            'En Rilin, la calidad no es solo una promesa, es nuestro compromiso. Experimenta la excelencia en el servicio en cada etapa, desde el soporte al cliente hasta la entrega puntual.',
        punctual: 'Garantía de Puntualidad:',
        punctual2:
            'El tiempo es valioso, ¡y respetamos el tuyo! Nuestra logística bien desarrollada garantiza puntualidad sin compromisos.',
        onTime: 'La Seguridad es lo Primero:',
        onTime2:
            'Descansa tranquilo, sabiendo que tu valiosa carga está en las manos más seguras. Nuestra máxima prioridad es adherir a los principios de seguridad para proteger tus bienes durante todo el viaje.',
        range: 'Cobertura en Toda Europa:',
        range2: 'Donde sea que necesites entregar tus bienes, lo tenemos bajo control. Nuestra amplia red en Europa garantiza que ningún lugar esté demasiado lejos.',
        flexible: 'Soluciones a Medida:',
        flexible2:
            'Ninguna dos empresas son iguales, ¡y entendemos eso! Nuestro equipo adapta soluciones de transporte para satisfacer tus requisitos únicos.',
        packages: `¿Buscas el empaque perfecto para transportar frutas y verduras?
            ¡Tenemos soluciones que cumplirán tus expectativas! Nuestra empresa ofrece una amplia
            gama de empaques adaptados a las necesidades de tu negocio. Creemos firmemente que el
            empaque juega un papel crucial en el transporte de productos delicados. Por lo tanto,
            presentamos con orgullo nuestra diversa selección que brindará una protección óptima y
            frescura a tus frutas y verduras. Independientemente del tipo, tamaño o cantidad, tenemos
            el empaque adecuado que conservará su calidad y sabor. Nuestros experimentados
            especialistas estarán encantados de asesorarte sobre las mejores soluciones adaptadas a tus
            requerimientos. Nuestra pasión y compromiso garantizarán que tus productos lleguen a su
            destino en perfectas condiciones. Confiabilidad, calidad y puntualidad son nuestro lema.
            Gracias a tecnologías innovadoras y una meticulosa artesanía, nuestros empaques son sólidos
            y efectivos. También garantizamos entregas a tiempo, para que puedas gestionar tu negocio
            con tranquilidad. ¡Contáctanos hoy mismo! Juntos crearemos soluciones que acelerarán tu éxito
            en el transporte de frutas y verduras.`,
        product1a: 'Repollo Blanco',
        product1b: 'Disponibilidad: Todo el año',
        product2a: 'Repollo Rojo',
        product2b: 'Disponibilidad: Todo el año',
        product3a: 'Repollo Chino',
        product3b: 'Disponibilidad: Todo el año',
        product4a: 'Repollo Savoy',
        product4b: 'Disponibilidad: Julio - Abril',
        product5a: 'Puerro',
        product5b: 'Disponibilidad: Julio - Mayo',
        product6a: 'Pimiento',
        product6b: 'Disponibilidad: Junio - Octubre',
        product7a: 'Patatas',
        product7b: 'Disponibilidad: Todo el año',
        product8a: 'Zanahorias',
        product8b: 'Disponibilidad: Julio - Abril',
        product9a: 'Calabaza',
        product9b: 'Disponibilidad: Septiembre - Noviembre',
        product10a: 'Coliflor',
        product10b: 'Disponibilidad: Mayo - Noviembre',
        product11a: 'Colinabo',
        product11b: 'Disponibilidad: Mayo - Noviembre',
        product12a: 'Calabacín',
        product12b: 'Disponibilidad: Junio - Noviembre',
        product13a: 'Perejil',
        product13b: 'Disponibilidad: Junio - Noviembre',
        product14a: 'Manzanas',
        product14b: 'Disponibilidad: Todo el año',
        product15a: 'Peras',
        product15b: 'Disponibilidad: Todo el año',
        product16a: 'Tomates',
        product16b: 'Disponibilidad: Mayo - Noviembre',
        product17a: 'Apio',
        product17b: 'Disponibilidad: Agosto - Abril',
        product18a: 'Apio Nabo',
        product18b: 'Disponibilidad: Julio - Abril',
        product19a: 'Cebolla Dorada',
        product19b: 'Disponibilidad: Todo el año',
        product20a: 'Cebolla Roja',
        product20b: 'Disponibilidad: Todo el año',
        product21a: 'Lechuga Iceberg',
        product21b: 'Disponibilidad: Mayo - Octubre',
        product22a: 'Ruibarbo',
        product22b: 'Disponibilidad: Abril - Noviembre',
        product23a: 'Berenjena',
        product23b: 'Disponibilidad: Julio - Octubre',
        offerNotice:
            'Para obtener detalles sobre variedades de frutas y verduras, contáctenos por correo electrónico',
        aboutUs:
            'Somos una empresa que reúne a muchos productores polacos de verduras y frutas como nosotros. Queremos que todos conozcan la excelente calidad del sabor de nuestros productos locales.',
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
        transportFont:
            'Scopri la magia delle soluzioni di trasporto senza soluzione di continuità e veloci con Rilin.',
        transportFont2:
            'La nostra vasta rete e team altamente qualificato garantiscono che le tue merci raggiungano la destinazione con una velocità sorprendente.',
        transportFont3:
            'Perché affidarsi a Rilin per le tue esigenze di trasporto?',
        expressDelivery: 'Consegna Espresso:',
        expressDelivery2:
            'Scopri la gioia delle consegne veloci che ti sorprenderanno. Le tue merci saranno in ottime mani, raggiungendo la destinazione prima che te ne accorga.',
        bestQuality: 'La Massima Qualità:',
        bestQuality2:
            "Da Rilin, la qualità non è solo una promessa, ma un impegno. Sperimenta l'eccellenza nel servizio in ogni fase, dall'assistenza al cliente alla consegna tempestiva.",
        punctual: 'Garanzia di Puntualità:',
        punctual2:
            'Il tempo è prezioso, e rispettiamo il tuo! La nostra logistica ben sviluppata garantisce puntualità senza compromessi.',
        onTime: 'La Sicurezza al Primo Posto:',
        onTime2:
            'Dormi tranquillo, sapendo che il tuo prezioso carico è nelle mani più sicure. La nostra massima priorità è rispettare i principi di sicurezza per proteggere le tue merci durante tutto il viaggio.',
        range: "Copertura in Tutto l'Europa:",
        range2: 'Ovunque tu abbia bisogno di consegnare le tue merci, ce ne occupiamo. La nostra vasta rete in Europa garantisce che nessun luogo sia troppo lontano.',
        flexible: 'Soluzioni Su Misura:',
        flexible2:
            'Nessuna due aziende sono uguali, e lo capiamo! Il nostro team personalizza le soluzioni di trasporto per soddisfare le tue esigenze uniche.',
        packages: `Sei alla ricerca delle confezioni ideali per il trasporto di frutta e verdura?
            Abbiamo le soluzioni perfette che soddisferanno le tue aspettative!
            La nostra azienda offre una vasta selezione di confezioni personalizzate per le esigenze della tua attività.
            Siamo convinti che le confezioni svolgano un ruolo chiave nel trasporto di prodotti delicati.
            Perciò, siamo orgogliosi di presentare la nostra variegata gamma di prodotti che garantiranno
            la massima protezione e freschezza per le tue verdure e frutta.
            Indipendentemente dal tipo, dalle dimensioni o dalla quantità, abbiamo le confezioni adeguate
            che preserveranno la loro qualità e sapore.
            I nostri esperti altamente qualificati saranno lieti di consigliarti nella scelta delle migliori
            soluzioni personalizzate alle tue esigenze.
            La nostra passione e dedizione faranno sì che i tuoi prodotti giungano a destinazione in perfette condizioni.
            Affidabilità, qualità e puntualità sono i nostri valori fondamentali.
            Grazie a tecnologie innovative e un attento artigianato, le nostre confezioni sono robuste ed efficienti.
            Garantiamo anche consegne puntuali, in modo che tu possa gestire la tua attività con tranquillità.
            Contattaci oggi stesso! Insieme, creeremo soluzioni che accelereranno il tuo successo nel trasporto di frutta e verdura.`,
        product1a: 'Cavolo Bianco',
        product1b: "Disponibilità: Tutto l'anno",
        product2a: 'Cavolo Rosso',
        product2b: "Disponibilità: Tutto l'anno",
        product3a: 'Cavolo Cinese',
        product3b: "Disponibilità: Tutto l'anno",
        product4a: 'Cavolo Verza',
        product4b: 'Disponibilità: Luglio - Aprile',
        product5a: 'Porro',
        product5b: 'Disponibilità: Luglio - Maggio',
        product6a: 'Peperone',
        product6b: 'Disponibilità: Giugno - Ottobre',
        product7a: 'Patate',
        product7b: "Disponibilità: Tutto l'anno",
        product8a: 'Carote',
        product8b: 'Disponibilità: Luglio - Aprile',
        product9a: 'Zucca',
        product9b: 'Disponibilità: Settembre - Novembre',
        product10a: 'Cavolfiore',
        product10b: 'Disponibilità: Maggio - Novembre',
        product11a: 'Cavolo Rapa',
        product11b: 'Disponibilità: Maggio - Novembre',
        product12a: 'Zucchina',
        product12b: 'Disponibilità: Giugno - Novembre',
        product13a: 'Prezzemolo',
        product13b: 'Disponibilità: Giugno - Novembre',
        product14a: 'Mele',
        product14b: "Disponibilità: Tutto l'anno",
        product15a: 'Pere',
        product15b: "Disponibilità: Tutto l'anno",
        product16a: 'Pomodori',
        product16b: 'Disponibilità: Maggio - Novembre',
        product17a: 'Sedano',
        product17b: 'Disponibilità: Agosto - Aprile',
        product18a: 'Sedano Rapa',
        product18b: 'Disponibilità: Luglio - Aprile',
        product19a: 'Cipolla Dorata',
        product19b: "Disponibilità: Tutto l'anno",
        product20a: 'Cipolla Rossa',
        product20b: "Disponibilità: Tutto l'anno",
        product21a: 'Lattuga Iceberg',
        product21b: 'Disponibilità: Maggio - Ottobre',
        product22a: 'Rabarbaro',
        product22b: 'Disponibilità: Aprile - Novembre',
        product23a: 'Melanzana',
        product23b: 'Disponibilità: Luglio - Ottobre',
        offerNotice:
            'Per i dettagli riguardanti le varietà di frutta e verdura, vi preghiamo di contattarci tramite e-mail',
        aboutUs:
            "Siamo un'azienda che riunisce molti produttori polacchi di verdure e frutta come noi. Vogliamo che tutti conoscano l'eccellente qualità del gusto dei nostri prodotti locali.",
    },

    // Function to set the selected language in Local Storage
    setLanguagePreference: function (languageCode) {
        localStorage.setItem('languagePreference', languageCode)
    },

    // Function to get the selected language from Local Storage
    getLanguagePreference: function () {
        return localStorage.getItem('languagePreference') || 'pl'
    },
}
