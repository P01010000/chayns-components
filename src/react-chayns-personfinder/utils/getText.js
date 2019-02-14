const DICTIONARY = {
    LOGGED_IN: {
        de: 'eingelogged',
        en: 'logged in'
    },
    DIVIDER_PERSON: {
        de: 'Weitere Personen',
        en: ' further persons'
    },
    DIVIDER_SITE: {
        de: 'Weitere Sites',
        en: 'furher sites'
    },
    LIVING_IN: {
        de: 'wohnt in',
        en: ' living in'
    }
};

const supportedLanguages = ['de', 'en'];

export default function getText(key, addText = false, lang = chayns.env.language || 'en') {
    const language = supportedLanguages.indexOf(lang) > -1 ? lang : 'en';
    return (DICTIONARY[key][language] || '') + (addText ? ` ${addText}` : '');
}
