import React, { Component } from 'react';
import './App.css';
import AlbumArtProvider from './components/AlbumContext';
import Item from './components/Item';
import Search from './components/Search';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <AlbumArtProvider>
        <HashRouter basename="Albumify">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/frank+sinatra" />}
            />
            <Route
              path="/frank+sinatra"
              render={() => <Item searchTerm="frank+sinatra" />}
            />
            <Route
              path="/search/:searchInput"
              render={props => (
                <Search searchTerm={props.match.params.searchInput} />
              )}
              />
          </Switch>
        </HashRouter>
      </AlbumArtProvider>
    );
  }
  
}

export default App;
