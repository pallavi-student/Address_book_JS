const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contacts');

const addressBook = new AddressBook();

const contact1 = new Contact(
    "Pallavi", "Singh", "Bhopal", "India", "In", "10001", "1345678654", "pallavigaharwar15@gmail.com"
);
console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());