import React from 'react'
import Body from './components/Body';
import './index.css';
import Shimmer from './components/Shimmer';
import {useState,useEffect,useContext} from 'react';
import Header from './components/Header';
import Footer from './components/Footer'

const App = () => {
  const [filter,setFilter]=useState(
    {
      category:"",
      country:"",
      language:"",
      sortby:""
    }
  );
  return (
    <div className="dark:bg-black dark:text-white">
      <Header setFilter={setFilter}/>
      <Body filter={filter}/>
      <Footer/>
    </div>
  )
}

export default App;
