'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.css');

// var imageURL = require('../images/yeoman.png');

var ANiceReminderApp = React.createClass({
  render: function() {
    return (
      <div className="main">

      </div>
    );
  }
});
React.render(<ANiceReminderApp />, document.body); // jshint ignore:line

module.exports = ANiceReminderApp;
