import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import CycleBuild from 'pages/CycleBuild';
import NotificationSent from 'pages/NotificationSent';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route exact path='/cycleBuild' component={ CycleBuild }/>
      <Route exact path='/notification' component={ NotificationSent }/>
      <Route render={ () => <Redirect to='/' /> }/>
    </Switch>
  )
}
