import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useEffect } from 'react'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import Header from './layout/Header/Header'
import Orders from './components/Orders/Orders'
import Profile from './components/Profile/Profile'
import Payment from './components/Payment/Payment'
import { loadStripe } from '@stripe/stripe-js'
import 'react-toastify/dist/ReactToastify.css';
import { Elements } from '@stripe/react-stripe-js'
import { auth, db } from './firebase/firebaseConfig';
import { useStateValue } from './context/StateProvider';
import Footer from './layout/Footer/Footer';
import ProductList from './components/ProductList/ProductList';

const promise = loadStripe('pk_test_51HPvTZEm4kUlkaUGOprKB6CIt1RW7nlhHhINLYNBJCTM2m2eSwsML1Lq6eEJmHadidUcmUAP1Rbtq45kC4EW9Iv200K0HUq19q')

function App() {
  const [profile, setProfile] = useState([]);
  const [products, setProducts] = useState([]);
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {


    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // user is logged in
      dispatch({
        type: "SET_USER",
        user: authUser ? authUser : null
      })
    })

    return () => {
      // any cleanup
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (user && profile) {
      db.collection('users').doc(user?.uid).collection('profile')
        .onSnapshot(snapshot => (
          setProfile(snapshot.docs.map(doc => doc.data()))
        ))
    }
    else
      setProfile([])

    if (user && products) {
      db.collection('products').doc().collection('products')
        .onSnapshot(snapshot => (
          setProducts(snapshot.docs.map(doc => doc.data()))
        ))
    }
    else
      setProducts([])
  }, [user])

  useEffect(() => {
    dispatch({
      type: "SET_PROFILE",
      userName: profile[0],
    });
  }, [profile])

  console.log(products)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/products">
            <Header />
            <ProductList />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
