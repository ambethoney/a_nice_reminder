'use strict';

var React = require('react/addons'),
    $ = require('jquery');

require('particles.js/particles.js');



// CSS
require('normalize.css');
require('../styles/main.css');



var ParticlesBG = React.createClass({

  componentDidMount: function(){

    particlesJS.load('background', '../json/particles.json', function() {
    });
  },


  render: function(){
    return (
      <div className="background">
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
      url: 'https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=DEMO_KEY',
      type: 'GET',
      dataType: 'JSON',
      success: function(data){
        console.log(data.url)
        var image = document.createElement("img");
        image.src = data.url;
        $(image).addClass('img');
        $('.container').append(image);

      }
    });
  },
  render: function() {
    return (

      <div className="container">

      </div>


    );
  }
});
React.render(<ParticlesBG />, document.body); // jshint ignore:line

module.exports = ANiceReminderApp;
