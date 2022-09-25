const myImage = document.querySelector('img');

myImage.onclick = function() {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'image/myimg.jpeg') {
    myImage.setAttribute('src','image/myimg4.jpeg');
  } else {
    myImage.setAttribute('src','image/myimg.jpeg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to the land of reality, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome back to the land of re-reality, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
  
