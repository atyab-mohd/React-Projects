import logo from './logo.svg';
import './App.css';
import FirstComp from './Components/FirstComp';
import BooksList from './Components/BookList';

function App() {
  let value1 = "abcd",
    value2 = 20.32,
    value3 = [12, "string", 33];
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <FirstComp value1={value1}
    // value2={value2}
    // value3={value3}/>
    <BooksList/>
  );
}

export default App;
