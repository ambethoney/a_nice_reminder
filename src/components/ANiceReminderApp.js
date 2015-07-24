'use strict';

var React = require('react/addons'),
    $ = require('jquery');

var particlesJS = require('particles.js');



// CSS
require('normalize.css');
require('../styles/main.css');

// var imageURL = require('../images/yeoman.png');
// console.log(particlesJS);

var ParticlesBG = React.createClass({

  getInitialState: function(){
    var body = $('body');
    return {
      particlesJS(body, {
        'particles': {
        'number': {
          'value': 80,
          'density': {
            'enable': true,
            'value_area': 800
          }
        },
        'color': {
          'value': '#ffffff'
        },
        'shape': {
          'type': 'circle',
          'stroke': {
            'width': 0,
            'color': '#000000'
          },
          'polygon': {
            'nb_sides': 5
          },
          'image': {
            'src': 'img/github.svg',
            'width': 100,
            'height': 100
          }
        },
        'opacity': {
          'value': 0.5,
          'random': false,
          'anim': {
            'enable': false,
            'speed': 1,
            'opacity_min': 0.1,
            'sync': false
          }
        },
        'size': {
          'value': 5,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 40,
            'size_min': 0.1,
            'sync': false
          }
        },
        'line_linked': {
          'enable': true,
          'distance': 150,
          'color': '#ffffff',
          'opacity': 0.4,
          'width': 1
        },
        'move': {
          'enable': true,
          'speed': 6,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'out',
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'repulse'
          },
          'onclick': {
            'enable': true,
            'mode': 'push'
          },
          'resize': true
        },
        'modes': {
          'grab': {
            'distance': 400,
            'line_linked': {
              'opacity': 1
            }
          },
          'bubble': {
            'distance': 400,
            'size': 40,
            'duration': 2,
            'opacity': 8,
            'speed': 3
          },
          'repulse': {
            'distance': 200
          },
          'push': {
            'particles_nb': 4
          },
          'remove': {
            'particles_nb': 2
          }
        }
      },
      'retina_detect': true,
      'config_demo': {
        'hide_card': false,
        'background_color': '#b61924',
        'background_image': '',
        'background_position': '50% 50%',
        'background_repeat': 'no-repeat',
        'background_size': 'cover'
      }
      });
    }
  },


  render: function(){
    return (

      <ANiceReminderApp/>
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
  render: function() {
    return (
      <div className="container">
        <img src={this.state.quotes} className="import"/>
      </div>
      // <button>Need more inspiration?</button>

    );
  }
});
React.render(<ParticlesBG />, document.body); // jshint ignore:line

module.exports = ANiceReminderApp;
