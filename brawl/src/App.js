import logo from './logo.svg';
import './App.css';

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];


function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Brawl Assistant</h1>
       <List/>
      </header>
    </div>

  );
}

export default App;
