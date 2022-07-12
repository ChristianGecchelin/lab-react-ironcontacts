import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";
let contactsArray = contactsData.splice(0, 5);

function App() {
  const [contacts, setContacts] = useState(contactsArray);
  const addNewContact = () => {
    let randomNumber = Math.floor(Math.random() * contactsData.length);
    let randomActor = contactsData[randomNumber];
    setContacts(randomActor);
    console.log(contacts);
  };
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addNewContact}>Agregar Actor</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar?</th>
          <th>Won Emmy?</th>
        </tr>
        {contacts.map((contact) => {
          {
            key = contact.id;
          }
          return (
            <tr>
              <td>
                <img
                  className="actorImage"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && <p>🏆</p>}</td>
              <td>{contact.wonEmmy && <p>🏆</p>}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default App;
