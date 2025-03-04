const Contact = require('../models/Contacts');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
        return "Contact added successfully!";
    }

    getAllContacts() {
        return this.contacts;
    }
}

module.exports = AddressBook;