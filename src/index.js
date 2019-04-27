import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Forest from './tabs/ForestView'
import Field from './tabs/FieldView'
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
            <Route exact path="/" component={Forest} />
            <Route exact path="/farm" component={Field} />
          </div>
        </div>
      </div>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
)
