const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contacts');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Pallavi", "Singh", "Bhopal", "India", "In", "100001", "1345678654", "pallavigahrwar15@gmail.com"
    );
    console.log(addressBook.addContact(contact1)); 

    const contact2 = new Contact(
        "Sujal","Singh","Bhopal","India", "In", "100001", "123456780","sujalsingh@gmail.com");
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "pal","sin","In", "I", "100A01", "12345", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}