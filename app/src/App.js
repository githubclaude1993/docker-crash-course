import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [records, setRecords] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => setRecords(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>NCR Database - District 1</h1>
        <table> 
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>Gender</th>
          </tr>
          {records && records.map(record => (
            <tr>
              <td>{record.id}</td>
              <td>{record.firstname}</td> 
              <td>{record.lastname}</td>
              <td>{record.birthday}</td>
              <td>{record.gender}</td>
            </tr>
          ))}
        </table>
      </header>
    </div>
  );
}

export default App;
