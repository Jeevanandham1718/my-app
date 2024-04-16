import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Nav';
import Product from './Product/Product';
import Recommend from './Recommended/Recommend';
import Sidebar from './Sidebar/Sidebar';
import { useState } from 'react';
import products from './db/data';
import Card from './components/Card';


function App() {
  const[selectCategory,setSelectedCategory]=useState(null);
  const[query,setquery]=useState("");
  function handle(e){
    
    setquery(e.target.value);
  }

  const filteredItems=products.filter(product=>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!=-1));
  //radio filter

  const handlecHange = event =>{
    setSelectedCategory(event.target.value)
  }
  //button filter

  const hnadleClick= event=>{
    setSelectedCategory(event.target.value)
  }


  function filteredData(products,selected,query){
    let filteredProducts=products
    if(query){
      filteredProducts=filteredItems
    }

    if(selected){
      filteredProducts=filteredProducts.filter(
      ({category,color,company,newPrice,title}) => 
      category===selected || 
      color===selected || 
      company===selected
    );
    }
    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
      <Card
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      
      
      />

    ));
     

  }
  const result=filteredData(products,selectCategory,query);
  return (
    <> 
    <Sidebar handlecHange={handlecHange}/>
     <Navigation query={query} handlecHange={handlecHange}/>
     <Recommend hnadleClick={hnadleClick}/>
     <Product result={result}/>
     
     </>
  );
}

export default App;
