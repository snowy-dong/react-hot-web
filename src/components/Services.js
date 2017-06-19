var React = require('react');
var Footer = require('../tpl/Footer');
var CommonCenter = require('../tpl/Common');
var BgOverText = require('../tpl/BgOverText');
var JumbotronTpl = require('../tpl/JumbotronTpl');
const Services = React.createClass({
  getInitialState() {
    return {
      activePage: 1,
      OurServices: [],
      Achievements: [],
      commondata: {},
      commondata2: {},
      bgovertext: {},
      jumbotrontext: {}
    };
  },
  componentDidMount: function() {
    $.get('./data/services.json', function(result) {
        this.setState({
          OurServices: result.OurServices,
          Achievements: result.Achievements
        });
    }.bind(this));
    $.get('./data/CommonData.json', function(result) {
        this.setState({
          commondata: result.Services[0],
          commondata2: result.Services[1],
          jumbotrontext: result.JumbotronTpl[1]
        });
    }.bind(this));
    $.get('./data/BgOverText.json', function(result) {
        this.setState({
          bgovertext: result.Services[0]
        });
    }.bind(this));
  },
  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  },
  render() {
    return (
      <div className="lorem" >
        <JumbotronTpl backgroundImage={this.state.jumbotrontext.backgroundImage} locationpathname={this.props.location.pathname} title={this.state.jumbotrontext.title} desc={this.state.jumbotrontext.desc} />
        <div id="fh5co-services-section">
          <div className="container">
             <CommonCenter iconClass={this.state.commondata.iconClass} title={this.state.commondata.title} desc={this.state.commondata.desc} />
            <div className="row">
             {
          this.state.OurServices.map(function (item, index) {
                return (
                  <div className="col-md-4 text-center" key={index}>
                    <div className="services">
                      <span><i className={item.iconClass}></i></span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                    );
                    })
                }
            </div>
          </div>
        </div>
        <div id="fh5co-counter-section" className="fh5co-counters grey-bg">
          <div className="container">
            <CommonCenter iconClass={this.state.commondata2.iconClass} title={this.state.commondata2.title} desc={this.state.commondata2.desc} />
            <div className="row">
             {
          this.state.Achievements.map(function (item, index) {
                return (
                  <div className="col-md-3 text-center" key={index}>
                  <span className="fh5co-counter js-counter" data-from="0" data-to="1356" data-speed="5000" data-refresh-interval="50"></span>
                  <span className="fh5co-counter-label">{item.desc}</span>
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
module.exports = Services;
