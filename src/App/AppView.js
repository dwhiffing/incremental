import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Buildings from '../Buildings'
import Shelter from '../Shelter'
import Jobs from '../Jobs'
import Resources from '../Resources'
import Links from './Links'
import { TICK_DURATION } from '../constants'

const AppView = ({ save, load, tick, triggerCommand, state }) => {
  if (state.app.loading) {
    load()
    return false
  }

  useEffect(() => {
    setInterval(tick, TICK_DURATION)
  }, [])

  useEffect(() => {
    setInterval(save, TICK_DURATION)
  }, [])

  return (
    <Router>
      <div className="flex flex-row height-100">
        <div className="flex flex-column" style={{ flex: 1, padding: 10 }}>
          <Links />
          <Resources />
        </div>
        <div style={{ flex: 2, padding: 10 }}>
          <div>
            <Route exact path="/" component={Shelter} />
            <Route exact path="/buildings" component={Buildings} />
            <Route exact path="/jobs" component={Jobs} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default AppView
