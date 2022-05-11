import './App.css';
import data, { categoriesUnique } from './data.js';
import CategoryList from './Components/CategoryList';
import ProductList from './Components/ProductList';
import Header from './Components/Header';
import { useState } from "react";




function App() {
  const [category, setCategory] = useState('Games');

  return (
    <div className="App">
        <Header 
          title='Productify'
          productCount={data.length}
          categoryCount={categoriesUnique.length}/>
        <CategoryList 
          category={category}
          onClick={ (newCategory) => {
            setCategory(newCategory);
          }} />
        <ProductList
          category={category} />
    
    </div>
  );
}

export default App;
