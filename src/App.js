import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart';
import Login from './components/Login';
import { useStateValue } from './context/StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase/firebaseConfig';
import Payment from './components/Payment';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51HPvTZEm4kUlkaUGOprKB6CIt1RW7nlhHhINLYNBJCTM2m2eSwsML1Lq6eEJmHadidUcmUAP1Rbtq45kC4EW9Iv200K0HUq19q')


function App() {

  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      // any cleanup
      unsubscribe()
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
