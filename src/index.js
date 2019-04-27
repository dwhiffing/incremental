import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Shelter from './tabs/ShelterView'
import Farm from './tabs/FieldView'
import Forestry from './tabs/ForestryView'
import Resources from './resources/ResourceList'
import TabList from './tabs/TabList'
import { StoreProvider } from './storeContext'
import './index.css'

ReactDOM.render(
  <StoreProvider>
    <Router>
      <div className="flex flex-row height-100">
        <div className="flex flex-column" style={{ flex: 1, padding: 10 }}>
          <TabList />
          <Resources />
        </div>
        <div style={{ flex: 2, padding: 10 }}>
          <div>
            <Route exact path="/" component={Shelter} />
            <Route exact path="/farm" component={Farm} />
            <Route exact path="/forestry" component={Forestry} />
          </div>
        </div>
      </div>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
)
