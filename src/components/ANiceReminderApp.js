'use strict';

var React = require('react/addons'),
    $ = require('jquery');


// CSS
require('normalize.css');
require('../styles/main.css');

// var imageURL = require('../images/yeoman.png');



var ANiceReminderApp = React.createClass({
  getInitialState: function(){
    return {
      quotes: []
    };
  },
  componentDidMount: function(){
    $.ajax({
      headers: { 'X-Mashape-Key': '5QMMdTLEcLmshgQcIECzXr43EtlGp1ch1jpjsnHebykNW2EEix'},
      url: 'https://healthruwords.p.mashape.com/v1/quotes/',
      type: 'GET',
      dataType: 'JSON',
      success: function(data){
        var quote = data[0].media;
        if(this.isMounted()){
        // console.log(this)
          this.setState({
            quotes: quote
          });
        }
      }.bind(this)
    });
  },
  // add: function(data) {
  //     var arr = this.state.quotes;
  //     arr.push({
  //         quote: data
  //     });
  //     this.setState({quotes: arr});
  // },
  render: function() {
    return (
      <div className="container">
        <img src={this.state.quotes} className="import"/>
      </div>
      // <button>Need more inspiration?</button>

    );
  }
});
React.render(<ANiceReminderApp />, document.body); // jshint ignore:line

module.exports = ANiceReminderApp;
