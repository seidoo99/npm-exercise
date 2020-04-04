var robot = require('robotjs');
// robot.typeString('I AM A FELLOW HUMAN AND NOT A ROBOT');
// robot.keyTap('enter');

var screenSize = robot.getScreenSize();
var width = screenSize.width;

for (var x = 0; x < width; x++) {
    robot.moveMouseSmooth(x);
}