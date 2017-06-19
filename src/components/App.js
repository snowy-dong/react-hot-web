var React = require('react');
import { IndexLink } from 'react-router';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap';
const App = React.createClass({
render() {
    return (
  <div>
    <div className="Sidebar">
      <Navbar inverse >
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/" activeClassName="active" className="link">Home</IndexLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#/About">About</NavItem>
          <NavItem eventKey={2} href="#/Blog">Blog</NavItem>
          <NavItem eventKey={3} href="#/Services">Services</NavItem>
        </Nav>
       <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      </Navbar>
    </div>
        {this.props.children}
  </div>
    );
  }

});
module.exports = App;
