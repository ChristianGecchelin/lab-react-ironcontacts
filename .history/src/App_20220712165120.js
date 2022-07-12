import "./App.css";
import contacts from "./contacts.json";

function App() {
  console.log(contacts);
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <td></td>
      </table>
    </div>
  );
}
export default App;
