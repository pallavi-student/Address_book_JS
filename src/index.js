const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contacts');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Pallavi", "Singh", "Bhopal", "India", "Madhya Pradesh", "100001", "6457865490", "pallavigaharwar15@gmail.com"
    );
    console.log(addressBook.addContact(contact1)); 

    const contact2 = new Contact(
        "Sujal", "Singh", "Bhopal", "India", "Madhya Pradesh", "100003", "9856745675", "sujalsingh12@gmail.com"
    );
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts Before editing", addressBook.getAllContacts());

    console.log(addressBook.editContact("Sujal", { address: "Rewa", city: "London", phone: "7024764565" }));
    console.log("All Contacts After editing", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "Pal", "Singh", "Delhi", "India", "Madhya Pradesh", "100234", "9876543210", "valid-email@gmail.com"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}
