'use strict';

/**
 * todo: Make the images disappear when the user clicks on the button "SAVE"
 * todo: Make the images reappear, and the image the user selected disappear, when the user clicks on the button "REMOVE"
 * todo: Make the image the user selected appear in the <div> with the id "selected-character"
 * todo: Make the image the user selected fill the entire <div> with the id "selected-character"
 */

// Get the images
const images = document.querySelectorAll('img');

// Get the button "SAVE"
const save = document.getElementById('save');

// Get the button "REMOVE"
const remove = document.getElementById('remove');

// Get the div with the id "selected-character"
const selectedCharacter = document.getElementById('selected-character');

// Add an event listener to the button "SAVE"
save.addEventListener('click', () => {
  // Loop through the images
  for (let i = 0; i < images.length; i++) {
    // Make the images disappear
    images[i].classList.add('is-hidden');
    // Make the button "SAVE" disappear
    save.classList.add('is-hidden');
    // Make the button "REMOVE" reappear
    remove.classList.remove('is-hidden');
  }
});

// Add an event listener to the button "REMOVE"
remove.addEventListener('click', () => {
  // Loop through the images
  for (let i = 0; i < images.length; i++) {
    // Make the images reappear
    images[i].classList.remove('is-hidden');
    // Make the button "SAVE" reappear
    save.classList.remove('is-hidden');
    // Make the button "REMOVE" disappear
    remove.classList.add('is-hidden');
  }
});

// Add an event listener to the images
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', () => {
    // Make the image the user selected appear in the <div> with the id "selected-character"
    selectedCharacter.innerHTML = images[i].outerHTML;
    // Make the image the user selected fill the entire <div> with the id
    // "selected-character"
    selectedCharacter.firstChild.classList.add('is-full');
    // Remove hover effect from the image the user selected
    selectedCharacter.firstChild.classList.remove('small-img');
  });
}
