import React, {useState} from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import { Amplify } from "aws-amplify";
import BookData from "./Data.json";
import  { getAyoba }  from './microapp';
import config from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import guidoImage from "./guido.jpg";

Amplify.configure(config)

function App() {

  const [phone, setPhone] = useState('');
  const sayHello = () => {

   
    let ayoba = getAyoba() ; 
    setPhone(ayoba.getMsisdn());

  } 



  return (
    <div
     className="App"
     style={{
       backgroundImage: 'url('+guidoImage+')',
     }}
     >
      <SearchBar placeholder="Search for Opportunity..." data={BookData} />
    </div>
  );
}

export default withAuthenticator(App);
