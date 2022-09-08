const contactsOperations = require("./contacts.js");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;

    case "get":
      const getContacts = await contactsOperations.getContactById(
        id.toString()
      );
      if (!getContacts) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(getContacts);
      break;

    case "add":
      const addedContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(addedContact);
      break;

    case "remove":
      const removeContact = await contactsOperations.removeContact(
        id.toString()
      );
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
