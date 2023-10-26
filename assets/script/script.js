'use strict';
// Utility functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}
function select(selector, parent = document) {
  return parent.querySelector(selector);
}
function selectById(selector, parent = document) {
  return parent.getElementById(selector);
}
function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}
function create(element, parent = document) {
  return parent.createElement(element);
}
function print(...args) {
  console.log(args.join(', '));
}
// Main code
const options = selectAll('.option');
const avatar = select('.avatar');
const thumbnails = select('.thumbnails');
const image = create('img');
options.forEach((option) => {
  onEvent('click', option, function () {
    image.src = this.attributes[0].nodeValue; // copying the 'src' attribute
    image.alt = this.attributes[1].nodeValue; // copying the 'alt' attribute
    avatar.appendChild(image); // Appending an 'img' element to the big div
    print(this.dataset.character);
  });
});
