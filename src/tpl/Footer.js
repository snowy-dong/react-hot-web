'use strict';
var React = require('react');
import { Link } from 'react-router';
// footer
const Footer = React.createClass({
render() {
    return (
     <footer id="footer">
        <div className="container">
        <div className="row">
        <div className="col-md-4">
        <h3>Company</h3>
          <ul className="link">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Energy</Link></li>
            <li><Link href="#">Customer Care</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
         </div>
         <div className="col-md-4">
          <h3>Subscribe</h3>
          <p>Far far away, behind the word mountains, far from the countries</p>
          <form action="#" id="form-subscribe">
          <div className="form-field">
          <input type="email" placeholder="Email Address" id="email" />
          <input type="submit" id="submit" value="Send" />
          </div>
          </form>
          </div>
            <div className="col-md-2">
              <ul className="social-icons">
                <li>
                  <Link href="#"><i className="icon-twitter-with-circle"></i></Link>
                  <Link href="#"><i className="icon-facebook-with-circle"></i></Link>
                  <Link href="#"><i className="icon-instagram-with-circle"></i></Link>
                  <Link href="#"><i className="icon-linkedin-with-circle"></i></Link>
                </li>
              </ul>
            </div>
          </div>
          </div>
      </footer>
    );
  }
});
module.exports = Footer;
