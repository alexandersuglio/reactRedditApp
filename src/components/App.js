import React, { Component } from 'react';
import '../style/App.css';

import SearchBar from '../containers/search_bar';
import PostsList from '../containers/posts_list';

class App extends Component {
  render() {
    return (
    
      <div className="App">
       
        <nav className="navbar navbar-default navbar-fixed-top">
       
          <div className="container">
       
            <div className="navbar-header">
       
              <a className="navbar-brand" href="/">seenIt</a>
       
            </div>
       
            <SearchBar />
       
          </div>
       
        </nav>
       
        <div className="app-content">
       
          <PostsList />
       
        </div>
      
      </div>
    
    );
  }
}

export default App;
