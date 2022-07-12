import "./App.css";
import contacts from "./contacts.json";

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar?</th>
          <th>Won Emmy?</th>
        </tr>
        {contacts.map((contact) => {
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
              <td>{contact.wonEmmy}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default App;
