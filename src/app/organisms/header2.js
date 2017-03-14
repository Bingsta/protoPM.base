import React, {Component} from 'react';
import Headroom from 'react-headroom';
import styles from './header2.less';
import {
  MenuItem,
  Image,
  Nav,
  Dropdown,
  Navbar,
  NavItem,
  FormGroup,
  FormControl,
  Glyphicon,
  InputGroup
} from 'react-bootstrap';

export class Header2 extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modal: false
    };

    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
  }

  handleShowModal() {
    console.log(`show modal`);
    this.setState({modal: true});
  }

  handleHideModal() {
    console.log(`hide modal`);
    this.setState({modal: false});
  }

  render() {
    return (
      <Headroom
        tolerance={5}
        offset={400}
        >
        <header className={styles.header}>
          <Navbar inverse collapseOnSelect fluid className={styles.navbar}>
            <Navbar.Header>
              <Navbar.Brand></Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Form pullLeft>
                <FormGroup className={styles.formGroup}>
                  <InputGroup>
                    <FormControl type="text" placeholder="Search"/>
                    <InputGroup.Addon><Glyphicon glyph="search"/></InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
              </Navbar.Form>
              <Nav>
                <Dropdown id="dropdown-custom-1">
                  <Dropdown.Toggle className={`${styles.addButton} btn btn-primary navbar-btn `}>
                    <i className="icon-plus2"></i> Add a new...
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <MenuItem eventKey="1"><i className="icon-user-plus"></i>&nbsp;&nbsp;Add a new client</MenuItem>
                    <MenuItem eventKey="2"><i className="icon-user-tie"></i>&nbsp;&nbsp;Add a new supplier</MenuItem>
                    <MenuItem divider/>
                    <MenuItem eventKey="3"><i className="icon-home2"></i>&nbsp;&nbsp;Add a new property</MenuItem>
                    <MenuItem eventKey="4"><i className="icon-certificate"></i>&nbsp;&nbsp;Add a new tenancy</MenuItem>
                    <MenuItem divider/>
                    <MenuItem eventKey="5"><i className="icon-calendar2"></i>&nbsp;&nbsp;Add a new appointment</MenuItem>
                    <MenuItem eventKey="6"><i className="icon-checkbox-checked"></i>&nbsp;&nbsp;Add a new reminder</MenuItem>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              <Nav pullRight>
                <Dropdown pullRight id="dropdown-custom-1">
                  <Dropdown.Toggle className={styles.avatarButton}>
                    Lee Crosby&nbsp;&nbsp;<Image src="../../content/images/avatars/2.jpg" height="35" circle/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <MenuItem eventKey="1"><i className="icon-equalizer"></i>&nbsp;&nbsp;Account settings</MenuItem>
                    <MenuItem eventKey="2"><i className="icon-pencil"></i>&nbsp;&nbsp;Another action</MenuItem>
                    <MenuItem eventKey="3"><i className="icon-bookmark2"></i>&nbsp;&nbsp;Yet another action</MenuItem>
                    <MenuItem divider/>
                    <MenuItem eventKey="4"><i className="icon-exit"></i>&nbsp;&nbsp;Log out</MenuItem>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  <i className={`${styles.toolIcon} icon-calendar2`}></i><span className={`visible-xs-inline`}>&nbsp;&nbsp;Appointments</span></NavItem>
                <NavItem eventKey={2} href="#"><i className={`${styles.toolIcon} icon-checkbox-checked`}></i><span className={`visible-xs-inline`}>&nbsp;&nbsp;Task manager</span></NavItem>
                <NavItem eventKey={2} href="#"><i className={`${styles.toolIcon} icon-key`}></i><span className={`visible-xs-inline`}>&nbsp;&nbsp;Key manager</span></NavItem>
                <NavItem eventKey={2} href="#"><i className={`${styles.toolIcon} icon-bubble9`}></i><span className={`visible-xs-inline`}>&nbsp;&nbsp;Chat</span></NavItem>
                <NavItem eventKey={2} href="#"><i className={`${styles.toolIcon} icon-notification`}></i><span className={`visible-xs-inline`}>&nbsp;&nbsp;Notifications</span></NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </Headroom>
    );
  }
}
