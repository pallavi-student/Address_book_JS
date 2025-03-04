const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contacts');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Pallavi", "Singh", "Bhopal", "India","India", "100001", "6457865490", "pallavigaharwar15@gmail.com"
    );
    console.log(addressBook.addContact(contact1)); 

    const contact2 = new Contact(
        "Sujal", "Singh", "Bhopal", "India","India", "100003", "9856745675", "sujalsingh12@gmail.com"
    );
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts Before editing", addressBook.getAllContacts());

    console.log(addressBook.editContact("Sujal", { address: "Rewa", city: "London", phone: "7024764565" }));
    
    console.log("All Contacts After editing", addressBook.getAllContacts());
    console.log(addressBook.deleteContact("Sujal"));
   
    console.log("All Contacts After Deleting:", addressBook.getAllContacts());
    console.log("Total Contacts:", addressBook.countContacts());
   
    const duplicateContact=new Contact("Aallavi", "Singh", "Bhopal", "India", "India", "100001", "6457875490", "pallavigaharwar15@gmail.com");
    console.log(addressBook.addContact(duplicateContact));
    
    console.log("Contacts in India:");
    console.log(addressBook.searchByCityOrState("India"));
    
    console.log("Viewing Persons by City or State:");
    console.log(addressBook.viewPersonsByCityOrState());
    
    console.log("Count of Contacts by City and State:");
    console.log(addressBook.countByCityOrState());
    
    console.log("\nContacts Sorted Alphabetically:");
    console.log(addressBook.sortContactsByName().map(contact => contact.toString()).join("\n"));
    
    console.log("\nContacts Sorted by Name:");
    console.log(addressBook.sortContactsByName().map(contact => contact.toString()).join("\n"));

    console.log("\nContacts Sorted by City:");
    console.log(addressBook.sortContactsByCity().map(contact => contact.toString()).join("\n"));

    console.log("\nContacts Sorted by State:");
    console.log(addressBook.sortContactsByState().map(contact => contact.toString()).join("\n"));

    console.log("\nContacts Sorted by Zip:");
    console.log(addressBook.sortContactsByZip().map(contact => contact.toString()).join("\n"));
} 
catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "Pal", "Singh", "Delhi", "India", "Madhya", "100234", "9876543210", "valid-email@gmail.com"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}
