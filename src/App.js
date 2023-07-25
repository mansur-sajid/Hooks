import React, { useState, useReducer, useEffect, useRef, createContext} from 'react';
import Navbar from './components/Navbar';
import Test from './components/test';
import Input from "./components/Input"

export let appContext = createContext();

function App() {
  let [data, setData] = useState({name: "mansur", relegion: "islam"})
  return(
    <>
    <appContext.Provider value = {{data, setData}} >
    <Navbar/>
    <Input/>
    </appContext.Provider>
    </>
  );
}

export default App; 