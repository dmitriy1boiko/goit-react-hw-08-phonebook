export const selectorContacts = state => state.contacts.contacts.items;
export const selectorLoader = state => state.contacts.contacts.isLoading;
export const selectorError = state => state.contacts.contacts.error;
export const selectorFilter = state => state.contacts.filter;