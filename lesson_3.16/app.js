
let elContet = document.getElementById("con");
let elInput = document.getElementById("input");
let elForm = document.getElementById("form");


let elP1 = document.getElementById("pos")
let elP2 = document.getElementById("neg")
let elP3 = document.getElementById("net")


let elp = document.getElementById("one")
let elBox = document.querySelectorAll(".box p")
elBox.forEach((item) => {
  item.addEventListener("click" , (e)=> {
    elBox.forEach((p) => {
      p.style.opacity = "0.5";
    });

    let x =  e.target.textContent;
    item.style.opacity = "1"
    elp.textContent = `${x} contet`
  })
})





elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  elP1.style.opacity = " 0.5"
  elP2.style.opacity = " 0.5"
  elP3.style.opacity = " 0.5"

  if (elInput.value == 1) {
    elP1.style.opacity = " 1"
    elp.textContent= elP1.textContent + " contet"
  }
  else if (elInput.value == 2) {
    elP2.style.opacity = " 1"
    elp.textContent= elP2.textContent + " contet"
  }
  else if (elInput.value == 3) {
    elP3.style.opacity = " 1"
    elp.textContent= elP3.textContent + " contet"
  }
  else {
    alert("Index invalid ")
  }

  elInput.value = "";
})


