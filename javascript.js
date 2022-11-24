const BoxContainer = document.getElementsByClassName("littleBoxes")[0];
function AddBoxes() {
  const buttonboxes = document.getElementsByClassName("inputClass")[0].value; 
  if (buttonboxes >1) {
    for (var i = 0; i < buttonboxes; i++) {
      const newbox = document.createElement("div");
      newbox.classList.add("stylebox");
      BoxContainer.appendChild(newbox);}
  } else {
  
  for (var i = 0; i < 256; i++) {
    const newbox = document.createElement("div");
    newbox.classList.add("stylebox");
    BoxContainer.appendChild(newbox);}
} }
AddBoxes();

// function getInputValue () {
//   const buttonboxes = document.getElementsByClassName("inputClass")[0].value; 
  
// };


 

// buttonboxes.addEventListener('click', makeNewBoxes); 