var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'Show Courses',
    number: 12,
    header: 'Learn React',
    description: 'React is a fantastic new frontend framework. React is a fantastic new frontend framework.',
    imageUrl: 'https://facebook.github.io/react/img/logo.svg'
  }, {
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }, {
    title: 'Show Courses',
    number: 43,
    header: 'Learn Angular',
    description: 'Angular is a lousy framework by Google',
    imageUrl: 'http://www.w3schools.com/angular/pic_angular.jpg'
  }]
};

// React, please render this class
var element = React.createElement(ThumbnailList, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));
