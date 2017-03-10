import React, {Component} from 'react';
import {DashboardTemplate} from '../templates/dashboardTemplate';

export class Home extends Component {
  render() {
    return (<DashboardTemplate title="Home dashboard">
      <h2>Home content</h2>
      <h4>Home content</h4>
    </DashboardTemplate>);
  }
}
