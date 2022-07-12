import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";
let contactsArray = contactsData.splice(0, 5);

function App() {
  const [contacts, setContacts] = useState(contactsArray);
  console.log(contacts);
  const addNewContact = () => {
    let randomNumber = Math.floor(Math.random() * contactsData.length);
    let randomActor = contactsData[randomNumber];
    setContacts((contacts) => [...contacts, randomActor]);
  };
  const sortAlphabetically = () => {
    [...contacts].sort((a, b) => {
      return a.name - b.name;
    });
  };
  const sortPopularity = () => {
    const sortedList = [...contacts].sort((a, b) =>
      a.popularity > b.popularity ? 1 : a.popularity < b.popularity ? -1 : 0
    );
    // actualizo el estado con la nueva lista ya ordenada
    setContacts(sortedList);
  };
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addNewContact}>Agregar Actor</button>
      <button onClick={sortAlphabetically}>Ordenar Alfabeticamente</button>
      <button onClick={sortPopularity}>Ordenar Popularidad</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar?</th>
            <th>Won Emmy?</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
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
        </tbody>
      </table>
    </div>
  );
}
export default App;