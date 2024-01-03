import $ from 'jquery';
import _ from 'lodash';

let count = 0;

// Function to update the counter and display the count
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Wait for the DOM to be ready
$(document).ready(function () {

  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startButton">Click here to get started</button>');
  $('body').append('<p id="count">0 clicks on the button</p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Debounced function to handle button click
  const debouncedUpdateCounter = _.debounce(updateCounter, 500);

  // Bind click event to the button using jQuery
  $('#startButton').on('click', function () {
    debouncedUpdateCounter();
  });
});

