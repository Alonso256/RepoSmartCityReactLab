import logo from './logo.svg';
import './App.css';

import PersonList from "./PersonList.jsx"
import AddPerson from "./AddPerson.jsx"
import RemovePerson from "./RemovePerson.jsx"
import PruebaReactstrapButton from "./PruebaReactstrapButton.jsx"
import Accordion from "./Accordion.jsx"
import ButtonGroup from "./ButtonGroup.jsx"
import OtherCardExample from "./OtherCardExample.jsx"


function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <PersonList />
      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}
      <AddPerson />
      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}
      <RemovePerson />
      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}
      <PruebaReactstrapButton />
      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}
      <Accordion />
      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}
      <ButtonGroup />
      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}
      <OtherCardExample />
      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}
    </div>
  );
}

export default App;
