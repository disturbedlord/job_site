function Click(args) {
  let element = document.getElementById(args);
  console.log(element);
  element.contentEditable = true;
}

export { Click };
