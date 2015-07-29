'use strict';

var React = require('react/addons'),
    $ = require('jquery');

require('particles.js/particles.js');



// CSS
require('normalize.css');
require('../styles/main.css');



var ParticlesBG = React.createClass({

  componentDidMount: function(){

    particlesJS.load('testing', '../json/particles.json', function() {
    });
  },


  render: function(){
    return (
      <div id="testing">
        <ANiceReminderApp/>
      </div>

    );
  }
});

var ANiceReminderApp = React.createClass({
  getInitialState: function(){
    return {
      quotes: []
    };
  },
  componentDidMount: function(){
    $.ajax({
      url: 'http://api.theysaidso.com/qod.json',
      type: 'GET',
      dataType: 'JSON',
      success: function(data){
        var quote = data.contents.quotes[0].quote;
        $('.quote').html(quote);

      }
    });
  },
  render: function() {
    return (
      <div className="container">
        <div className="inner-container">
          <div className="quote"></div>
        </div>
      </div>
      // <button>Need more inspiration?</button>

    );
  }
});
React.render(<ParticlesBG />, document.body); // jshint ignore:line

module.exports = ANiceReminderApp;
