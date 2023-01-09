import './App.css';
import Axios from 'axios'
import { useState } from 'react';
import RecipieTile from './RecipieTile';

function App() {

  const [query,setQuery]=useState('')
  const [recipes,setRecipes]=useState([])
  const [health,setHealth]=useState("vegan")

  const YOUR_APP_ID='a7c938cf'
  const YOUR_APP_KEY='93c41303f9d755cda7f37fb6ce6c7f8c'

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${health}`;

async function getRecipes(){
    var result=await Axios.get(url)

    setRecipes(result.data.hits)
    console.log(result.data)
  }

  const submit =(e)=>{
    e.preventDefault();
    getRecipes()
  }

  return (
    <div className="app">
        <h1>Food Recipies</h1>
        <form className='app__searchForm' onSubmit={submit}>
            <input type="text" className="app__input" placeholder='Enter Ingredients...' value={query} onChange={(e)=>setQuery(e.target.value)} />
            <input type="submit" className='app__submit' value="Search" />
            <select className='app__healthLables'>
              <option onClick={()=>setHealth("vegan")}>Vegan</option>
            </select>
        </form>

        <div className='app__recipes'>
          {recipes.map((recipe)=>{
            return <RecipieTile recipe={recipe}/>
          })}
        </div>
    </div>
  );
}

export default App;
