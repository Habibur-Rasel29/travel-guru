import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AllPlace from './components/AllPlace/AllPlace';
import Booking from './components/Booking/Booking';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Log/Log';
import Notfound from './components/NotFound/Notfound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUSer] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUSer]}>

      <Router>

        <div>

          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/booking/myPlace">
              <Header></Header>
              <AllPlace></AllPlace>
            </PrivateRoute>

            <Route path="/place/:id">
              <Booking></Booking>
            </Route>

            <Route path="/login">
              <Header></Header>
              <Login></Login>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="*">
              <Header></Header>
              <Notfound></Notfound>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>

  )
}

export default App;


