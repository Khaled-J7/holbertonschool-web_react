import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
import logo from '../assets/holberton-logo.jpg';

$(document).ready(function () {
  // Add logo element
  $('body').append('<div id="logo"></div>');

  // Add elements to the body
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Counter function
  let count = 0;
  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  // Bind debounced function to button click
  $('button').on('click', _.debounce(updateCounter, 500));
});
