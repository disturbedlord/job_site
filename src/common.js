function Click(args) {
  let element = document.getElementById(args);
  console.log(element);
  element.contentEditable = true;
}

function textAreaAdjust(ele) {
  let element = document.getElementById(ele.target.id);
  console.log("ele", element);
  // element.style.display = "none";
  element.style.height = "1px";
  element.style.height = 25 + element.scrollHeight + "px";
}

export { Click, textAreaAdjust };
