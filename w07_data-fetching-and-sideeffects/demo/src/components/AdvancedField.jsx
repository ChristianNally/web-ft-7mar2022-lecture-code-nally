import { useState, useEffect } from "react";
import axios from "axios";

const AdvancedField = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [ingredients, setIngredients] = useState([]);

  // useEffect( () => {
  //   console.log('AdvancedField useEffect 1 callback was called.');
  //   const intervalReference = setInterval( () => { console.log('i am running still') }, 500 );
  //  return () => {
  //   console.log('AdvancedField useEffect 1 CLEANUP callback was called.');
  //    clearInterval(intervalReference)
  //   };
  // }, []);

  useEffect( () => {
    axios.get('https://my-json-server.typicode.com/andydlindsay/chef-andy/ingredients')
    .then( (response) => {
      console.log('response.data', response.data);
      setIngredients( (prev) => { return [...prev, ...response.data] } );
    } )
    .catch( (error)=>{
      console.log(`API AXIOS ERROR:`, error);
    } );
  }, [] );

  return (
    <div>
      <h3>Advanced is Checked</h3>
      <input 
        value={searchTerm}
        onChange={ (event) => { setSearchTerm(event.target.value) } }
      />
      {ingredients.map( (item, index) => {
        return (
          <li key={index}>{item.name}</li>
        );

      } )}
    </div>
  );

};

export default AdvancedField;
