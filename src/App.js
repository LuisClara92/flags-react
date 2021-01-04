import React, { useState, useEffect } from 'react';
import './App.css';
import CountryList from './country-list'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import ActionList from './action-list'
import Header from './header'
import Footer from './Footer'
import CountryPage from './country-page'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: '',

}

const store = createStore(reducer, initialState)

function App() {
  const [darkMode, setDarkMode] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])
  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router>
          <Footer />
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Switch>
            <Route path="/country/:id" component={CountryPage} />
            <Route path="/">
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
