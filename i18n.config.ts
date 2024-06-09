export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            name: 'Todo-List',
            intro: 'Look mom, I made a todo list!',
            placeholder: 'Enter description...',
            saveEntry: 'Save',
            lastEdit: 'Last edited: ',
        },
        de: {
            name: 'Todo-Liste',
            intro: 'Schau mutter, ich habe eine Todo-Liste gemacht!',
            placeholder: 'Beschreibung eingeben...',
            saveEntry: 'Speichern',
            lastEdit: 'Letzte bearbeitung: ',
        },
    }
}))