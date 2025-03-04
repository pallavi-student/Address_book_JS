
const Contact = require('../models/Contacts');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (this.contacts.some(c => c.phone === contact.phone || c.email === contact.email)) {
            throw new Error("Duplicate Contact! Phone number or Email exists already.");
        }
        this.contacts.push(contact);
        return "Contact added successfully!";
    }

    getAllContacts() {
        return this.contacts;
    }

    editContact(firstName, updatedDetails) {
        const contact = this.contacts.find(c => c.firstName === firstName);
        if (!contact) {
            throw new Error("Contact not found.");
        }
        Object.assign(contact, updatedDetails);
        return "Contact updated successfully!";
    }
}

module.exports = AddressBook;
