import React, {Component} from 'react';
import {PageTemplate} from '../templates/pageTemplate';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  Modal,
  SplitButton,
  MenuItem,
  DropdownButton,
  ButtonToolbar,
  ButtonGroup,
  Button} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const products = [
  {
    id: 1,
    name: "Item name 1",
    price: 100
  }, {
    id: 2,
    name: "Item name 2",
    price: 200
  }, {
    id: 3,
    name: "Item name 3",
    price: 300
  }, {
    id: 4,
    name: "Item name 4",
    price: 400
  }, {
    id: 5,
    name: "Item name 5",
    price: 500
  }
];

export class Components extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modal: false
    };

    this.handleOnSelectAlert = this.handleOnSelectAlert.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.priceFormatter = this.priceFormatter.bind(this);
  }

  priceFormatter(cell) {
    return `<i class="glyphicon glyphicon-usd"></i> ${cell}`;
  }

  handleOnSelectAlert(eventKey) {
    console.log(`Alert from menu item.\neventKey: ${eventKey}`);
  }

  handleShowModal() {
    console.log(`show modal`);
    this.setState({modal: true});
  }

  handleHideModal() {
    console.log(`hide modal`);
    this.setState({modal: false});
  }

  handleSelect(eventKey, event) {
    event.preventDefault();
    console.log(`selected ${eventKey}`);
  }

  render() {
    return (
      <PageTemplate title="Components">

        <h2>Buttons</h2>
        <h3>Main styles</h3>
        <ButtonToolbar>
          <Button bsStyle="primary">primary</Button>
          <Button bsStyle="default">default</Button>
          <Button bsStyle="success">success</Button>
          <Button bsStyle="info">info</Button>
          <Button bsStyle="warning">warning</Button>
          <Button bsStyle="danger">danger</Button>
        </ButtonToolbar>
        <h4>Active</h4>
        <ButtonToolbar>
          <Button bsStyle="primary" active>primary</Button>
          <Button bsStyle="default" active>default</Button>
          <Button bsStyle="success" active>success</Button>
          <Button bsStyle="info" active>info</Button>
          <Button bsStyle="warning" active>warning</Button>
          <Button bsStyle="danger" active>danger</Button>
        </ButtonToolbar>
        <h4>Disabled</h4>
        <ButtonToolbar>
          <Button bsStyle="primary" disabled>primary</Button>
          <Button bsStyle="default" disabled>default</Button>
          <Button bsStyle="success" disabled>success</Button>
          <Button bsStyle="info" disabled>info</Button>
          <Button bsStyle="warning" disabled>warning</Button>
          <Button bsStyle="danger" disabled>danger</Button>
        </ButtonToolbar>

        <h3>Dropdowns</h3>
        <ButtonToolbar>
          <DropdownButton bsStyle="primary" title="primary">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
          <DropdownButton bsStyle="default" title="default">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
          <DropdownButton bsStyle="success" title="success">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
          <DropdownButton bsStyle="info" title="info">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
          <DropdownButton bsStyle="warning" title="warning">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
          <DropdownButton bsStyle="danger" title="danger">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <h3>Splitbutton</h3>
        <ButtonToolbar>
          <SplitButton bsStyle="primary" title="primary">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          <SplitButton bsStyle="default" title="default">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          <SplitButton bsStyle="success" title="success">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          <SplitButton bsStyle="info" title="info">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          <SplitButton bsStyle="warning" title="warning">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          <SplitButton bsStyle="danger" title="danger">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </ButtonToolbar>

        <h3>Sizes</h3>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">large</Button>
          <Button bsStyle="default" bsSize="large">large</Button>
        </ButtonToolbar>
        <br/>
        <ButtonToolbar>
          <Button bsStyle="primary">default</Button>
          <Button bsStyle="default">default</Button>
        </ButtonToolbar>
        <br/>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="small">small</Button>
          <Button bsStyle="default" bsSize="small">small</Button>
        </ButtonToolbar>
        <br/>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="xsmall">extra small</Button>
          <Button bsStyle="default" bsSize="xsmall">extra small</Button>
        </ButtonToolbar>

        <h3>Button groups</h3>

        <ButtonGroup>
          <Button>left</Button>
          <Button>middle</Button>
          <Button>right</Button>
        </ButtonGroup>

        <br/>
        <br/>

        <ButtonToolbar>

          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>8</Button>
          </ButtonGroup>

        </ButtonToolbar>

        <h3>Vertical</h3>
        <ButtonGroup vertical>
          <Button>Button</Button>
          <Button>Button</Button>
          <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
          <Button>Button</Button>
          <Button>Button</Button>
          <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
          <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
        </ButtonGroup>

        <h2>Modal dialogs</h2>
        <Button bsStyle="primary" onClick={this.handleShowModal}>Show modal dialog</Button>

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

        <h2>Navs</h2>

        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
          <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
            <MenuItem eventKey="4.1">Action</MenuItem>
            <MenuItem eventKey="4.2">Another action</MenuItem>
            <MenuItem eventKey="4.3">Something else here</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4.4">Separated link</MenuItem>
          </NavDropdown>
        </Nav>

        <h2>Navbar</h2>

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <h2>React bootstrap table</h2>
        <BootstrapTable data={products} striped={Boolean(true)} hover={Boolean(true)}>
          <TableHeaderColumn dataField="id" isKey={Boolean(true)} dataAlign="center" dataSort={Boolean(true)}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort={Boolean(true)}>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </PageTemplate>
    );
  }
}
