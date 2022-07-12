import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
let contactsArray = contactsData.splice(0, 5);

function App() {
  const [contacts, setContacts] = useState(contactsArray);
  console.log(contacts);
  const addNewContact = () => {
    let randomNumber = Math.floor(Math.random() * contactsData.length);
    let randomActor = contactsData[randomNumber];
    if (!contacts.includes(randomActor)) {
      setContacts((contacts) => [...contacts, randomActor]);
    } else {
      addNewContact();
    }
  };
  const sortAlphabetically = () => {
    const sortedList = [...contacts].sort((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    );

    setContacts(sortedList);
  };
  const sortPopularity = () => {
    const sortedList = [...contacts].sort((a, b) =>
      a.popularity > b.popularity ? 1 : a.popularity < b.popularity ? -1 : 0
    );
    setContacts(sortedList);
  };
  const deleteActor = (actorId) => {
    const filteredContact = contacts.filter((contact) => {
      return contact.id !== actorId;
    });
    setContacts(filteredContact);
  };
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Button className="botones" variant="secondary" onClick={addNewContact}>
        Agregar Actor
      </Button>
      <Button
        className="botones"
        variant="secondary"
        onClick={sortAlphabetically}
      >
        Ordenar Alfabeticamente
      </Button>
      <Button className="botones" variant="secondary" onClick={sortPopularity}>
        Ordenar Popularidad
      </Button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar?</th>
            <th>Won Emmy?</th>
            <th></th>
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
                <td>
                  <button onClick={() => deleteActor(contact.id)}>
                    Borrar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default App;
