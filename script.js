// Variables for my filter buttons that the user can select

let all = document.getElementById("all-btn");
let mass = document.getElementById("mass-btn");
let face = document.getElementById("face-btn");
let manped = document.getElementById("manped-btn");
let wax = document.getElementById("wax-btn");

// Variables for my treatment divs
let alltreat = document.getElementsByClassName("treatdiv");
let waxing = document.getElementsByClassName("wax");
let massage = document.getElementsByClassName("mass");
let facial = document.getElementsByClassName("face");
let manPed = document.getElementsByClassName("manped");

// Functions for each filter button to execute code that loops through each div to show the correct treatment selected and hide the ones the user doesn't want //

function fn1() {
    if (all) {
      for(let i = 0; i < alltreat.length; i++) {
         alltreat[i].style.display = "block";
      }
    }
}


function fn2() {
  for(let i = 0; i < facial.length; i++) {
    facial[i].style.display = "none";
  }
    for(let i = 0; i < manPed.length; i++) {
    manPed[i].style.display = "none";
    }
      for(let i = 0; i < waxing.length; i++) {
    waxing[i].style.display = "none";
 }
  if (mass) {
    for(let i = 0; i < massage.length; i++) {
       massage[i].style.display = "block";
    }
  }
}

function fn3() {
  for(let i = 0; i < massage.length; i++) {
    massage[i].style.display = "none";
  }
    for(let i = 0; i < manPed.length; i++) {
    manPed[i].style.display = "none";
    }
      for(let i = 0; i < waxing.length; i++) {
    waxing[i].style.display = "none";
 }
  if (face) {
    for(let i = 0; i < facial.length; i++) {
       facial[i].style.display = "block";
    }
  }
}

function fn4() {
  for(let i = 0; i < facial.length; i++) {
    facial[i].style.display = "none";
  }
    for(let i = 0; i < massage.length; i++) {
    massage[i].style.display = "none";
    }
      for(let i = 0; i < waxing.length; i++) {
    waxing[i].style.display = "none";
 }
  if (manped) {
    for(let i = 0; i < manPed.length; i++) {
       manPed[i].style.display = "block";
    }
  }
}

function fn5() {
  for(let i = 0; i < facial.length; i++) {
    facial[i].style.display = "none";
  }
    for(let i = 0; i < manPed.length; i++) {
    manPed[i].style.display = "none";
    }
      for(let i = 0; i < massage.length; i++) {
    massage[i].style.display = "none";
 }
  if (wax) {
    for(let i = 0; i < waxing.length; i++) {
       waxing[i].style.display = "block";
    }
  }
}