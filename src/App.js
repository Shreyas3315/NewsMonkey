import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  state = {
    progress:0
  }
  setProgress(progress){
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            
          />
          <Routes>
            <Route path='/' element={<News  country="us" pageSize={6} category="general" />} />
            <Route path='/business' element={<News  country="us" pageSize={6} category="business" />} />
            <Route path='/entertainment' element={<News country="us" pageSize={6} category="entertainment" />} />
            <Route path='/general' element={<News country="us" pageSize={6} category="general" />} />
            <Route path='/health' element={<News country="us" pageSize={6} category="health" />} />
            <Route path='/science' element={<News country="us" pageSize={6} category="science" />} />
            <Route path='/sports' element={<News country="us" pageSize={6} category="sports" />} />
            <Route path='/technology' element={<News country="us" pageSize={6} category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
