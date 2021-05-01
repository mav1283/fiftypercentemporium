import { useEffect } from 'react';
import { Header, Footer } from './components/layout';
import { ProductDetails, ProductList } from './components/products';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Cart from './components/cart/Cart';
import SearchNotFound from './components/loading/SearchNotFound';

function App() {

  useEffect(()=>{
    window.onbeforeunload = () => {
      //localStorage.removeItem('isAuth');
      localStorage.clear();
    }
  },[])
  
  return (
    <div className="App">
      <Router>
        <Header />
          <main className="main" >
            <Switch>
              <Route path="/" exact component={ProductList} />
              <Route path="/product/:productId" exact component={ProductDetails} />
              <Route path="/cart" component={Cart} />
              <Route path="/search_not_found" component={SearchNotFound} />
            </Switch> 
          </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
