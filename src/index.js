const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contacts');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Pallavi", "Singh", "Bhopal", "India", "In", "100001", "1345678654", "pallavigaharwar15@gmail.com"
    );
    console.log(addressBook.addContact(contact1));
    console.log(addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "pa", "singh", "abc", "In", "I", "100A01", "12345", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}