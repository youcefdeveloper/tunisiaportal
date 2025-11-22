const langToggle = document.getElementById('langToggle');
const logoText = document.getElementById('logoText');
const cardTitle = document.getElementById('cardTitle');
const cardText1 = document.getElementById('cardText1');
const cardText2 = document.getElementById('cardText2');
const cardText3 = document.getElementById('cardText3').querySelector('span');
const disclaimer = document.getElementById('disclaimer');

const texts = {
    ar: {
        dir: 'rtl',
        logo: 'بوابة تونس',
        copyright: 'بوابة تونس © 2025',
        title: 'الموقع قيد الإنشاء',
        text1: 'نحن نعمل على إطلاق بوابة تونس قريباً.',
        text3: 'تواصل معنا على',
        text2: 'ابقَ على اطلاع! سيتم تحديث هذا الموقع بأحدث الأخبار والمعلومات.',
        toggle: 'English',
    },
    en: {
        dir: 'ltr',
        logo: 'Tunisia Portal',
        copyright: 'Tunisia Portal © 2025',
        title: 'Website Under Construction',
        text1: 'We are working on launching Tunisia Portal soon.',
        text2: 'Stay tuned! This website will be updated with the latest news and information.',
        text3: 'Contact us at',
        toggle: 'عربي'
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = texts[lang].dir;
    logoText.textContent = texts[lang].logo;
    cardTitle.textContent = texts[lang].title;
    cardText1.textContent = texts[lang].text1;
    cardText2.textContent = texts[lang].text2;
    cardText3.textContent = texts[lang].text3;
    langToggle.textContent = texts[lang].toggle;
    disclaimer.textContent = texts[lang].copyright;
    localStorage.setItem('language', lang);
}

// Initialize language
const savedLang = localStorage.getItem('language') || 'ar';
setLanguage(savedLang);

// Toggle button
langToggle.addEventListener('click', () => {
    const newLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
});