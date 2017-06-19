'use strict';
var React = require('react');
var Footer = require('../tpl/Footer');
var CommonCenter = require('../tpl/Common');
var BgOverText = require('../tpl/BgOverText');
var JumbotronTpl = require('../tpl/JumbotronTpl');
import { Button, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';
// 关于
const About = React.createClass({
 getInitialState() {
    return {
      showModal: false,
      centerContent: [],
      commondata: {},
      bgovertext: {},
      jumbotrontext: {}
     };
  },
  close() {
    this.setState({ showModal: false });
  },
  open() {
    this.setState({ showModal: true });
  },
  componentDidMount: function() {
    $.get('./data/AboutCenter.json', function(result) {
        this.setState({
          centerContent: result
        });
    }.bind(this));

    $.get('./data/CommonData.json', function(result) {

        this.setState({
          commondata: result.About[0],
          jumbotrontext: result.JumbotronTpl[0]
        });
    }.bind(this));
    $.get('./data/BgOverText.json', function(result) {

        this.setState({
          bgovertext: result.About[0]
        });
    }.bind(this));
  },
render() {
  const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div className="lorem" >
       <JumbotronTpl backgroundImage={this.state.jumbotrontext.backgroundImage} locationpathname={this.props.location.pathname} title={this.state.jumbotrontext.title} desc={this.state.jumbotrontext.desc}>
       <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Launch demo modal
        </Button>
      </JumbotronTpl>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
          <div id="fh5co-about-section">
      <div className="container">
        <CommonCenter iconClass={this.state.commondata.iconClass} title={this.state.commondata.title} desc={this.state.commondata.desc} />
        <div className="row">
             {
          this.state.centerContent.map(function (item, index) {
                return (
                   <div className="col-md-4 text-center" key={index}>
                   <div className="about-wrap">
                    <div className="desc">
                    <div className="about">
                      <img src={item.images} />
                    </div>
                      <h3>{item.job}</h3>
                      <p className="pos">{item.name}</p>
                      <p>{item.desc}</p>
                      <p className="fh5co-social-icons">
                        <a href="#"><i className="icon-twitter2"></i></a>
                        <a href="#"><i className="icon-facebook2"></i></a>
                        <a href="#"><i className="icon-instagram"></i></a>
                        <a href="#"><i className="icon-dribbble2"></i></a>
                        <a href="#"><i className="icon-youtube"></i></a>
                      </p>
                    </div>
                    </div>
                    </div>
                    );
                    })
                }
        </div>
      </div>
    </div>
      <BgOverText backgroundImage={this.state.bgovertext.backgroundImage} title={this.state.bgovertext.title} desc={this.state.bgovertext.desc} />
        <Footer />
      </div>
    );
  }
});
module.exports = About;
