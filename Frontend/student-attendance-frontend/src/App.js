import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Schedule from './pages/Schedule';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/attendance" component={Attendance} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/" exact component={() => <div>Home Page</div>} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
