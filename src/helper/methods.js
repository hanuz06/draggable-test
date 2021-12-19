export default function dragElement(elmnt) {
  let innerWidth = document.documentElement.clientWidth;
  let innerHeight = document.documentElement.clientHeight;

  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
  
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    // let innerWidth = e.view.innerWidth;
    // let innerHeight = e.view.innerHeight;

    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    let newTopPosition = elmnt.offsetTop - pos2;
    let newLeftPosition = elmnt.offsetLeft - pos1;

    if (newTopPosition < 0) {
      elmnt.style.top = 0 + "px";
    } else if (newTopPosition > innerHeight - 75) {
      elmnt.style.top = innerHeight - 75 + "px";
    } else {
      elmnt.style.top = newTopPosition + "px";
    }

    if (newLeftPosition < 0) {
      elmnt.style.left = 0 + "px";
    } else if (newLeftPosition > innerWidth - 75) {
      elmnt.style.left = innerWidth - 75 + "px";
    } else {
      elmnt.style.left = newLeftPosition + "px";
    }
  }
  function closeDragElement() {    
    document.onmouseup = null;
    document.onmousemove = null;
  }
}