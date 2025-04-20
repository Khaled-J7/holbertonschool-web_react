import $ from 'jquery'; // Import jQuery
import _ from 'lodash'; // Import Lodash
import '../css/main.css'; // Import the CSS file

$(document).ready(function() {
  // Create and append the logo element
  $('body').prepend('<div id="logo"></div>');

  // Append a counter element
  $('body').append('<button id="counter">Click me!</button>');
});
