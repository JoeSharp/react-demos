const COLOURS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
let index = 0;

function onColourSwitchClick() {
    console.log('Clicked on the colour switcher');

    var divSwitchable = document.querySelector('#switchable');

    var newColour = COLOURS[index++];
    index %= COLOURS.length;
    divSwitchable.style.backgroundColor = newColour;
    divSwitchable.innerHTML = newColour;
}