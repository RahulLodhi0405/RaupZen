 // Disable Ctrl + U (View Source) and Ctrl + Shift + I (DevTools)
 document.addEventListener('keydown', function(e) {
    // Disable Ctrl + U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
       
    }

    // Disable Ctrl + Shift + I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
       
    }
});

document.body.style.userSelect = "none";
// Original JavaScript
function showMessage() {

}

// Obfuscated JavaScript (example output from obfuscator tool)
var _0xabc123 = ["\x61\x6C\x65\x72\x74", "\x54\x68\x69\x73\x20\x69\x73\x20\x61\x20\x73\x65\x63\x75\x72\x65\x20\x6D\x65\x73\x73\x61\x67\x65\x21"];
function _0xdef456() {

}

// Disable F12 (DevTools) key
document.onkeydown = function(e) {
if (e.keyCode == 123) { // F12
return false;
}
}

// Disable right-click (context menu)
document.addEventListener('contextmenu', function(e) {
e.preventDefault();
});