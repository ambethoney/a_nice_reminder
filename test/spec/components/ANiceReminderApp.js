'use strict';

describe('ANiceReminderApp', () => {
  let React = require('react/addons');
  let ANiceReminderApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ANiceReminderApp = require('components/ANiceReminderApp.js');
    component = React.createElement(ANiceReminderApp);
  });

  it('should create a new instance of ANiceReminderApp', () => {
    expect(component).toBeDefined();
  });
});
