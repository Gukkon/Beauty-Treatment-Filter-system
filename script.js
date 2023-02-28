let all = document.getElementById("all-btn");
let mass = document.getElementById("mass-btn");
let face = document.getElementById("face-btn");
let manped = document.getElementById("manped-btn");
let wax = document.getElementById("wax-btn");


let alltreat = document.getElementsByClassName("treatdiv");
let waxing = document.getElementsByClassName("wax");
let massage = document.getElementsByClassName("mass");
let facial = document.getElementsByClassName("face");
let manPed = document.getElementsByClassName("manped");


function fn1() {
    if (all) {
      for(let i = 0; i < alltreat.length; i++) {
         alltreat[i].style.display = "block";
      }
    }
}

function fn2() {
    if (mass) {
        massage.style.display = "block";
        facial.style.display = "none";
        manPed.style.display = "none";
        waxing.style.display = "none";
    }
}
  function fn3() {
    if (face) {
        facial.style.display = "block";
        massage.style.display = "none";
        manPed.style.display = "none";
        waxing.style.display = "none";
    }
  }
    function fn4() {
    if (manped) {
        manPed.style.display = "block";
        facial.style.display = "none";
        massage.style.display = "none";
        waxing.style.display = "none";
    }
    }

      function fn5() {
    if (waxing) {
        waxing.style.display = "block";
        facial.style.display = "none";
        manPed.style.display = "none";
        massage.style.display = "none";;
    }
      }



// TAKE TWO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function fn1() {
//     if (all === true) {
//         document.getElementsByClassName('treatdiv').style.display = "block";
//     } else if (mass === true){
//         document.getElementById('mass').style.display = "block";
//         document.getElementById('face').style.display = "none";
//         document.getElementById('manped').style.display = "none";
//         document.getElementById('wax').style.display = "none";
//     } else if (face === true) {
//         document.getElementById('face').style.display = "block";
//         document.getElementById('mass').style.display = "none";
//         document.getElementById('manped').style.display = "none";
//         document.getElementById('wax').style.display = "none";
//     } else if (manped === true) {
//         document.getElementById('manped').style.display = "block";
//         document.getElementById('face').style.display = "none";
//         document.getElementById('mass').style.display = "none";
//         document.getElementById('wax').style.display = "none";
//     } else if (wax === true) {
//         document.getElementById('wax').style.display = "block";
//         document.getElementById('face').style.display = "none";
//         document.getElementById('manped').style.display = "none";
//         document.getElementById("mass").style.display = "none";
//     }
// }


//TAKE THREE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// function fn1() {

//     let mass = document.getElementById("massage").value;
//     let face = document.getElementById("facials").value;
//     let manPed = document.getElementById("manPed").value;
//     let wax = document.getElementById("waxing").value;
//     let pregNo = document.getElementById("preg-no").value;
//     let pregYes = document.getElementById("preg-yes").value;
//     let allergies = document.getElementById("allergies").value;
//     let diabetes = document.getElementById("diabetes").value;
//     let highBlood = document.getElementById("highBlood").value;
//     let thyroid = document.getElementById("thyroid").value;
//     let fract = document.getElementById("fractures").value;
//     let surg = document.getElementById("surgeries").value;

// } if (massage.checked===true) {
//     console.log('You selected massage');
// } else if (facials.checked===true) {
//     console.log('You selected facials');
// } else if (manPed.checked===true) {
//   console.log('You selected manicures and pedicures');
// } else if (waxing.checked===true) {
//   console.log('You selected waxing');
// }



// let massage = [
//     {
//         treatName: 'Full Body Massage',
//         pregnant: false,
//         duration: '1 Hour',
//         fractures: false,
//         surgeries: false,
//         allergies: true,
//         diabetes: true,
//         highBlood: true,
//         thyroid: true,
//         price: 80,
//     },
//     {
//         treatName: 'Full Deep Tissue Body Massage',
//         pregnant: false,
//         duration: '1.5 Hours',
//         fractures: false,
//         surgeries: false,
//         allergies: true,
//         diabetes: true,
//         highBlood: true,
//         thyroid: true,
//         price: 120,
//     },
//     {
//         treatName: 'Lower Body Massage',
//         pregnant: true,
//         duration: '30 Minutes',
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: true,
//         highBlood: true,
//         thyroid: true,
//         price: 40,
//     },
//     {
//         treatName: 'Upper Body Massage',
//         pregnant: false,
//         duration: '30 Minutes',
//         fractures: false,
//         surgeries: false,
//         allergies: true,
//         diabetes: true,
//         highBlood: true,
//         thyroid: true,
//         price: 40,
//     },
//     {
//         treatName: 'Arms and Legs Massage',
//         pregnant: false,
//         duration: '1 Hour',
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: true,
//         highBlood: true,
//         thyroid: true,
//         price: 80,
//     },
//     {
//         treatName: 'Pregnancy Massage',
//         pregnant: true,
//         duration: '1 Hour',
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: true,
//         highBlood: true,
//         thyroid: true,
//         price: 50,
//     },
//     {
//         treatName: 'Soft Tissue Massage',
//         pregnant: true,
//         duration: '1 Hour',
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: true,
//         highBlood: true,
//         thyroid: true,
//         price: 70,
//     },
// ];

// let facials = [
//     {
//         treatName: 'Head in the Clouds',
//         pregnant: false,
//         fractures: true,
//         surgeries: true,
//         allergies: false,
//         diabetes: true,
//         highBlood: true,
//         thyroid: true,
//         duration: '1 Hour',
//         price: '£80',
//     },
//     {
//         treatName: 'Elemis Ritual Facial',
//         pregnant: false,
//         fractures: true,
//         surgeries: true,
//         allergies: false,
//         diabetes: true,
//         highBlood: true,
//         thyroid: true,
//         duration: '1.5 Hours',
//         price: '£120',
//     },
//     {
//         treatName: 'Exfoliating Facial',
//         pregnant: true,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: false,
//         highBlood: false,
//         thyroid: false,
//         duration: '30 Minutes',
//         price: '£40',
//     },
//     {
//         treatName: 'Chemical Peel',
//         pregnant: false,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: false,
//         highBlood: false,
//         thyroid: false,
//         duration: '30 Minutes',
//         price: '£40',
//     },
//     {
//         treatName: 'Laser Skin',
//         pregnant: false,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: true,
//         highBlood: false,
//         thyroid: false,
//         duration: '1 Hour',
//         price: '£80',
//     },
//     {
//         treatName: 'Oxygen Facial',
//         pregnant: true,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: false,
//         highBlood: true,
//         thyroid: true,
//         duration: '1 Hour',
//         price: '£50',
//     },
//     {
//         treatName: 'Deep Cleansing',
//         pregnant: true,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: false,
//         highBlood: true,
//         thyroid: true,
//         duration: '1 Hour',
//         price: '£70',
//     },
// ];

// let manPed = [
//     {
//         treatName: 'Gel Type',
//         pregnant: false,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: false,
//         highBlood: false,
//         thyroid: false,
//         duration: '1 Hour',
//         price: '£80',
//     },
//     {
//         treatName: 'Basic',
//         pregnant: true,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: false,
//         highBlood: false,
//         thyroid: false,
//         duration: '1.5 Hours',
//         price: '£30',
//     },
//     {
//         treatName: 'French and Dip Powder',
//         pregnant: true,
//         fractures: false,
//         surgeries: false,
//         allergies: true,
//         diabetes: true,
//         highBlood: false,
//         thyroid: false,
//         duration: '30 Minutes',
//         price: '£40',
//     },
//     {
//         treatName: 'Hard Gel',
//         pregnant: false,
//         fractures: false,
//         surgeries: false,
//         allergies: true,
//         diabetes: true,
//         highBlood: true,
//         thyroid: false,
//         duration: '30 Minutes',
//         price: '£20',
//     },
//     {
//         treatName: 'Shellac',
//         pregnant: false,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: false,
//         highBlood: false,
//         thyroid: false,
//         duration: '1 Hour',
//         price: '£70',
//     },
// ];

// let waxing = [
//     {
//         treatName: 'Chest Wax',
//         pregnant: false,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: false,
//         highBlood: false,
//         thyroid: false,
//         duration: '1 Hour',
//         price: '£40',
//     },
//     {
//         treatName: 'Back Wax',
//         pregnant: false,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: false,
//         highBlood: false,
//         thyroid: false,
//         duration: '30 Minutes',
//         price: '£50',
//     },
//     {
//         treatName: 'Face Wax',
//         pregnant: true,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: false,
//         highBlood: false,
//         thyroid: false,
//         duration: '30 Minutes',
//         price: '£10',
//     },
//     {
//         treatName: 'Top Lip Wax',
//         pregnant: false,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: false,
//         highBlood: false,
//         thyroid: false,
//         duration: '30 Minutes',
//         price: '£10',
//     },
//     {
//         treatName: 'Full Leg Wax',
//         pregnant: false,
//         fractures: false,
//         surgeries: false,
//         allergies: true,
//         diabetes: true,
//         highBlood: true,
//         thyroid: false,
//         duration: '1 Hour',
//         price: '£40',
//     },
//     {
//         treatName: 'Chin Wax',
//         pregnant: true,
//         fractures: false,
//         surgeries: false,
//         allergies: true,
//         diabetes: true,
//         highBlood: true,
//         thyroid: false,
//         duration: '30 Minutes',
//         price: '£15',
//     },
//     {
//         treatName: 'Bikini Wax',
//         pregnant: false,
//         fractures: false,
//         surgeries: true,
//         allergies: true,
//         diabetes: false,
//         highBlood: false,
//         thyroid: false,
//         duration: '30 Minutes',
//         price: '£15',
//     },
//     {
//         treatName: 'Full Body Wax',
//         pregnant: false,
//         fractures: false,
//         surgeries: false,
//         allergies: false,
//         diabetes: true,
//         highBlood: true,
//         thyroid: false,
//         duration: '1 Hour',
//         price: '£80',
//     },
// ];




































// //Pregnant length that will affect treatment
// if (howManyMonths <= 3) {
//     console.log('Restrictions will apply to what treatments you would like to have');
// } else {
//     console.log('Certain treatments will alter. Speak to your beautician for more details');
//   }

// //Age that will affect what treatments you can actually have
// if (age < 16) {
//     console.log('Please be advised that anyone under 16 cannot receive any treatment');
// } else if ((age === 16) || (age === 17)) {
//     console.log('Certain treatments will be unavailable to you.');
// } else {
//     console.log('Please choose from any treatment');
// }
