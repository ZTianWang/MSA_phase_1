'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    // toggle: if the class is there, remove it. If not, add it.
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    // get the current class name of the element (body in this case)
    const className = document.body.className;
    if (className == "light-theme") {
        // textContent: the text inside the button
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});