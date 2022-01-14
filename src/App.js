import React,{useState} from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Input from './Input';
import Output from './Output';



function App() {

  const[data,setData]=useState([])
  function func(jason)
  {
    setData([...data,jason])
  }
  console.log(data)
  return (
   <div className='App'>
    <Header/>
    <Input getData={func}/>
    
    <Output value={data}/>
    
    <Footer className='kbc'/>
   </div>
  );
}

export default App;
