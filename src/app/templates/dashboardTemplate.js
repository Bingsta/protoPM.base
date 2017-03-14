import React, {Component} from 'react';
import styles from './dashboardTemplate.less';
import {
  Tabs,
  Tab
} from 'react-bootstrap';

export class DashboardTemplate extends Component {
  render() {
    return (
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{this.props.title}</h1>
        </header>
        <div className={styles.tabsContainer}>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tenancies">
              <h3>Tenancies</h3>
            </Tab>
            <Tab eventKey={2} title="Properties">
              <h3>Properties</h3>
            </Tab>
            <Tab eventKey={3} title="Landlords">
              <h3>Landlords</h3>
            </Tab>
            <Tab eventKey={4} title="Tenants">
              <h3>Tenants</h3>
            </Tab>
            <Tab eventKey={5} title="Suppliers">
              <h3>Suppliers</h3>
            </Tab>
          </Tabs>
        </div>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </article>
    );
  }
}

DashboardTemplate.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.array.isRequired
};
