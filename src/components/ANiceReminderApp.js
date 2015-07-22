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
          this.setState({
            quotes: quote
          });
        }
      }
    });
  },
  add: function(data) {
      var arr = this.state.quotes;
      arr.push({
          quote: data
      });
      this.setState({quotes: arr});
  },
  render: function() {
    return (
      <div className="container">
      hello world
        <img src={this.state.quotes}/>
        <button>Need more inspiration?</button>
      </div>

    );
  }
});
React.render(<ANiceReminderApp />, document.body); // jshint ignore:line

module.exports = ANiceReminderApp;
