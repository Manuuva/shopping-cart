
import React from 'react';
import data from './data.json'
import Products from './components/Products';
import Filter from './components/Filter';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
    this.filterProducts = this.filterProducts.bind(this);
  }
  sortProducts = (event) => {//sort function event
   const sort= event.target.value
    console.log(event.target.value)
    this.setState((state) => ({ //another form of setStae which accepts the current state and returns an object which is the new state
      sort: sort,
      products: 
      this.state.products.slice()/*a clone to this point*/.sort((a,b) => 
      sort === "lowest"?
      a.price > b.price 
      ? 1 
      : -1 
      : sort === "highest"?
      a.price < b.price
      ? 1 
      : -1 
      : a._id > b._id //latest
      ? 1 : -1
      ),
    }));  
  };


  filterProducts(event){//filter function event
    console.log(event.target.value )

    if(event.target.value==="") {
      this.setState({ size: event.target.value, products: data.products});
    } else {
      this.setState({ size: event.target.value, products: data.products.filter(product => product.availableSizes.indexOf(event.target.value)>=0)});
    }
  };

  render(){
  return (
    <div className="grid-container">
      <header >
        < a href="/ " >Shopping Cart</a>
      </header>
      <main>
        <div className = "content">
          <div className= "main"> 
          <Filter count={this.state.products.length}
            size={this.state.size}
            sort={this.state.sort}
            filterProducts={this.filterProducts}
            sortProducts={this.sortProducts}
            >
          </Filter>
              <Products products={this.state.products}></Products> </div>
          <div className = "sidebar"> Cart Items</div>
        </div>
      </main>
      <footer>
    All Rights Reserved.    
      </footer>
    </div>
  );
}
}

export default App;
