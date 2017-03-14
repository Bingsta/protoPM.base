import React, {Component} from 'react';
import Headroom from 'react-headroom';
import styles from './header.less';
import {
  Glyphicon,
  Image,
  InputGroup,
  FormGroup,
  FormControl,
  Modal,
  Button,
  Dropdown,
  MenuItem,
  Nav,
  NavItem
} from 'react-bootstrap';

export class Header extends Component {
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
      <div>
        <Headroom
          tolerance={5}
          offset={400}
          >
          <header className={styles.header}>
            <div className={styles.logoContainer}>
            </div>
            <div className={styles.searchContainer}>
              <form>
                <FormGroup>
                  <InputGroup>
                    <FormControl type="search" placeholder="Search for..."/>
                    <InputGroup.Addon><Glyphicon glyph="search"/></InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
              </form>
            </div>
            <div className={styles.globalToolsContainer}>
              <ul className={styles.globalToolList}>
                <li className={styles.globalToolListItem}>
                  <button className={styles.tool} onClick={this.handleShowModal}><i className="icon-calendar"></i></button>
                </li>
                <li className={styles.globalToolListItem}>
                  <button className={styles.tool} onClick={this.handleShowModal}><i className="icon-key"></i></button>
                </li>
                <li className={styles.globalToolListItem}>
                  <button className={styles.tool} onClick={this.handleShowModal}><i className="icon-checkbox-checked"></i></button>
                </li>
                <li className={styles.globalToolListItem}>
                  <button className={styles.tool} onClick={this.handleShowModal}><i className="icon-bubble3"></i></button>
                </li>
                <li className={styles.globalToolListItem}>
                  <button className={styles.tool} onClick={this.handleShowModal}><i className="icon-notification"></i></button>
                </li>
              </ul>
              <div>
                <Dropdown pullRight id="dropdown-custom-1">
                  <Dropdown.Toggle className={styles.avatarButton}>
                    <Image src="../../content/images/avatars/2.jpg" height="40" circle/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="super-colors">
                    <MenuItem eventKey="1"><i className="icon-bubble3"></i> Settings</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3" active>Active Item</MenuItem>
                    <MenuItem divider/>
                    <MenuItem eventKey="4">Log out</MenuItem>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </header>
        </Headroom>
        <Modal show={this.state.modal} onHide={this.handleHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One fine body...
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleHideModal}>Close</Button>
            <Button bsStyle="primary" onClick={this.handleHideModal}>Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
