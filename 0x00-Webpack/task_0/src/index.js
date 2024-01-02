import $ from 'jquery';

// Create three paragraphs and append them to the body

const paragraphs = [
  'Holberton Dashboard',
  'Dashboard data for the students',
  'Copyright - Holberton School'
];

$(document).ready(() => {
  paragraphs.forEach((text) => {
    $('<p>').text(text).appendTo('body');
  });
});
