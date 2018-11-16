import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header';
import Dashboard from './../components/Dashboard'
import AddExpense from './../components/AddExpense'
import HelpPage from './../components/HelpPage'
import NotFoundPage from './../components/NotFoundPage'
import EditPage from '../components/EditPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route
            exact path="/"
            component={Dashboard}
          />
          <Route
            path="/create"
            component={AddExpense}
          />
          <Route
            path="/help"
            component={HelpPage}
          />
          <Route
            path="/edit/:id"
            component={EditPage}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter