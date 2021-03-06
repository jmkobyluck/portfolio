function OnShowPart(e, part) {
  let elements = {
    main: document.getElementById("main"),
    left: document.getElementById("left"),
    right: document.getElementById("right"),
    bottom: document.getElementById("bottom"),
  };

  let isAboutToShow = !!!elements[part].style.transform;

  if (!isAboutToShow) elements.main.style.filter = null;
  else elements.main.style.filter = "blur(20px)";

  switch (part) {
    case "left":
      elements.right.style.transform = null;
      elements.bottom.style.transform = null;
      if (!!elements.left.style.transform) elements.left.style.transform = null;
      else elements.left.style.transform = "translateX(958px)";
      break;
    case "right":
      elements.left.style.transform = null;
      elements.bottom.style.transform = null;
      if (!!elements.right.style.transform)
        elements.right.style.transform = null;
      else elements.right.style.transform = "translateX(-962px)";
      break;
    case "bottom":
      elements.right.style.transform = null;
      elements.left.style.transform = null;
      if (!!elements.bottom.style.transform)
        elements.bottom.style.transform = null;
      else elements.bottom.style.transform = "translateY(-800px)";
      break;
    default:
      break;
  }
}
