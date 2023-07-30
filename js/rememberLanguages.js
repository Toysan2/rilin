// Function to load the selected language on page load
function loadLanguage() {
    const languagePreference = languages.getLanguagePreference()
    translatePage(languagePreference)
}

// Function to change the language when a language button is clicked
function changeLanguage(languageCode) {
    languages.setLanguagePreference(languageCode)
    translatePage(languageCode)
}

// Function to translate the page content based on the selected language
function translatePage(languageCode) {
    // ... your translation code here ...

    // You should use innerHTML instead of textContent for elements containing HTML tags
    const elementsToTranslate = document.querySelectorAll('[data-translate]')
    elementsToTranslate.forEach((element) => {
        const translationKey = element.dataset.translate
        element.innerHTML = languages[languageCode][translationKey]
    })
}

// Load the selected language on page load
document.addEventListener('DOMContentLoaded', loadLanguage)

// Example usage to change the language when a button is clicked
const plButton = document.getElementById('plButton')
plButton.addEventListener('click', () => changeLanguage('pl'))

const enButton = document.getElementById('enButton')
enButton.addEventListener('click', () => changeLanguage('en'))

const deButton = document.getElementById('deButton')
deButton.addEventListener('click', () => changeLanguage('de'))

const esButton = document.getElementById('esButton')
esButton.addEventListener('click', () => changeLanguage('es'))

const itButton = document.getElementById('itButton')
itButton.addEventListener('click', () => changeLanguage('it'))
// Add similar click event listeners for other language buttons (e.g., 'es', 'it', 'de')
