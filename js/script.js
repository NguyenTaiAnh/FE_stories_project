var ratio = window.devicePixelRatio || 1;
var w = screen.width * ratio;
var h = screen.height * ratio;
console.log("check log: ", w < 768)
console.log("check log: ", w )
if (w < 768) {
    alert('Less than 960');
}
else {
// alert('More than 960');
}
