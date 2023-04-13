import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react'

function App() {



  const [msg, setMsg] = useState()




  // // axios.get('http://20.46.124.33:8000/')
  // // axios.get('http://20.46.124.33:8000/', { params: { ID: 123 } })
  // axios.get('http://20.46.124.33:8000/')
  //   // .then((res) => { console.table(res) })
  //   // .then((res) => { console.log(res.data) })
  //   .then((res) => { setMsg(res.data); console.log(res.data.Hello) })
  //   .catch((error) => { console.error(error) })
  //   .finally(() => { /* 不論失敗成功皆會執行 */ })

  // // console.log(msg)

  useEffect(()=>{
    axios.get('http://20.46.124.33:8000/')
      .then((res) => { setMsg(res.data.Hello); console.log(res.data.Hello) })
      .catch((error) => { console.error(error) })
      .finally(() => { /* 不論失敗成功皆會執行 */ })
  },[])

  return (
    <div className="App">
      {/* {console.log(msg)} */}
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <p style={{color:'red'}}>From Backend Message : {msg}</p>
        {/* <p>{ JSON.stringify(msg)}</p> */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
    </div>
  );
}

export default App;
