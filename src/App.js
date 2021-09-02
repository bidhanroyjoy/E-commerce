import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import { ErrorPage, CheckoutPage, AboutPage, HomePage, ProductsPage, SingleProductPage, CartPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/cart'>
            <CartPage />
          </Route>
          <Route exact path='/products'>
            <ProductsPage />
          </Route>
          <Route path='/products/:id' children={<SingleProductPage/>} />
          <Route path='/checkout'>
            <CheckoutPage />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
