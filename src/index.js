/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import _ from 'lodash';
import './style.css';
import html from './template.html';
import Icon from './images/speaker-background.png';

const arr = [
  {
    description: 'wash the dishes',
    completed: 'true',
    id: 1,
  },
  {
    description: 'cook food',
    completed: 'false',
    id: 2,
  },
  {
    description: 'do laundry',
    completed: 'false',
    id: 3,
  },
];

// eslint-disable-next-line no-return-assign
arr.map((card) => document.getElementById('text-content').innerHTML
  += `<section class="checkbox-label-wrapper"><div class="description"><input type="checkbox" id="checkbox" name="checkbox" value="checkbox">
  <label for="checkbox" id="checkbox-1" class="label">${card.description}</label>
  </div><span class="dots">&#8942</span></section>`);

// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');
//   // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

//   return element;
// }

// document.body.appendChild(component());