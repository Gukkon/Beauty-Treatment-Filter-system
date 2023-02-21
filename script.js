

function fn1() {

} if (massage.checked===true) {
    console.log('You selected massage');
} else if (facials.checked===true) {
    console.log('You selected facials');
} else if (manPed.checked===true) {
  console.log('You selected manicures and pedicures');
} else if (waxing.checked===true) {
  console.log('You selected waxing');
}



let massage = [
    {
        treatName: 'Full Body Massage',
        pregnant: false,
        duration: '1 Hour',
        fractures: false,
        surgeries: false,
        allergies: true,
        diabetes: true,
        highBlood: true,
        thyroid: true,
        price: 80,
    },
    {
        treatName: 'Full Deep Tissue Body Massage',
        pregnant: false,
        duration: '1.5 Hours',
        fractures: false,
        surgeries: false,
        allergies: true,
        diabetes: true,
        highBlood: true,
        thyroid: true,
        price: 120,
    },
    {
        treatName: 'Lower Body Massage',
        pregnant: true,
        duration: '30 Minutes',
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: true,
        highBlood: true,
        thyroid: true,
        price: 40,
    },
    {
        treatName: 'Upper Body Massage',
        pregnant: false,
        duration: '30 Minutes',
        fractures: false,
        surgeries: false,
        allergies: true,
        diabetes: true,
        highBlood: true,
        thyroid: true,
        price: 40,
    },
    {
        treatName: 'Arms and Legs Massage',
        pregnant: false,
        duration: '1 Hour',
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: true,
        highBlood: true,
        thyroid: true,
        price: 80,
    },
    {
        treatName: 'Pregnancy Massage',
        pregnant: true,
        duration: '1 Hour',
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: true,
        highBlood: true,
        thyroid: true,
        price: 50,
    },
    {
        treatName: 'Soft Tissue Massage',
        pregnant: true,
        duration: '1 Hour',
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: true,
        highBlood: true,
        thyroid: true,
        price: 70,
    },
];

let facials = [
    {
        treatName: 'Head in the Clouds',
        pregnant: false,
        fractures: true,
        surgeries: true,
        allergies: false,
        diabetes: true,
        highBlood: true,
        thyroid: true,
        duration: '1 Hour',
        price: '£80',
    },
    {
        treatName: 'Elemis Ritual Facial',
        pregnant: false,
        fractures: true,
        surgeries: true,
        allergies: false,
        diabetes: true,
        highBlood: true,
        thyroid: true,
        duration: '1.5 Hours',
        price: '£120',
    },
    {
        treatName: 'Exfoliating Facial',
        pregnant: true,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: false,
        highBlood: false,
        thyroid: false,
        duration: '30 Minutes',
        price: '£40',
    },
    {
        treatName: 'Chemical Peel',
        pregnant: false,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: false,
        highBlood: false,
        thyroid: false,
        duration: '30 Minutes',
        price: '£40',
    },
    {
        treatName: 'Laser Skin',
        pregnant: false,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: true,
        highBlood: false,
        thyroid: false,
        duration: '1 Hour',
        price: '£80',
    },
    {
        treatName: 'Oxygen Facial',
        pregnant: true,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: false,
        highBlood: true,
        thyroid: true,
        duration: '1 Hour',
        price: '£50',
    },
    {
        treatName: 'Deep Cleansing',
        pregnant: true,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: false,
        highBlood: true,
        thyroid: true,
        duration: '1 Hour',
        price: '£70',
    },
];

let manPed = [
    {
        treatName: 'Gel Type',
        pregnant: false,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: false,
        highBlood: false,
        thyroid: false,
        duration: '1 Hour',
        price: '£80',
    },
    {
        treatName: 'Basic',
        pregnant: true,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: false,
        highBlood: false,
        thyroid: false,
        duration: '1.5 Hours',
        price: '£30',
    },
    {
        treatName: 'French and Dip Powder',
        pregnant: true,
        fractures: false,
        surgeries: false,
        allergies: true,
        diabetes: true,
        highBlood: false,
        thyroid: false,
        duration: '30 Minutes',
        price: '£40',
    },
    {
        treatName: 'Hard Gel',
        pregnant: false,
        fractures: false,
        surgeries: false,
        allergies: true,
        diabetes: true,
        highBlood: true,
        thyroid: false,
        duration: '30 Minutes',
        price: '£20',
    },
    {
        treatName: 'Shellac',
        pregnant: false,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: false,
        highBlood: false,
        thyroid: false,
        duration: '1 Hour',
        price: '£70',
    },
];

let waxing = [
    {
        treatName: 'Chest Wax',
        pregnant: false,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: false,
        highBlood: false,
        thyroid: false,
        duration: '1 Hour',
        price: '£40',
    },
    {
        treatName: 'Back Wax',
        pregnant: false,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: false,
        highBlood: false,
        thyroid: false,
        duration: '30 Minutes',
        price: '£50',
    },
    {
        treatName: 'Face Wax',
        pregnant: true,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: false,
        highBlood: false,
        thyroid: false,
        duration: '30 Minutes',
        price: '£10',
    },
    {
        treatName: 'Top Lip Wax',
        pregnant: false,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: false,
        highBlood: false,
        thyroid: false,
        duration: '30 Minutes',
        price: '£10',
    },
    {
        treatName: 'Full Leg Wax',
        pregnant: false,
        fractures: false,
        surgeries: false,
        allergies: true,
        diabetes: true,
        highBlood: true,
        thyroid: false,
        duration: '1 Hour',
        price: '£40',
    },
    {
        treatName: 'Chin Wax',
        pregnant: true,
        fractures: false,
        surgeries: false,
        allergies: true,
        diabetes: true,
        highBlood: true,
        thyroid: false,
        duration: '30 Minutes',
        price: '£15',
    },
    {
        treatName: 'Bikini Wax',
        pregnant: false,
        fractures: false,
        surgeries: true,
        allergies: true,
        diabetes: false,
        highBlood: false,
        thyroid: false,
        duration: '30 Minutes',
        price: '£15',
    },
    {
        treatName: 'Full Body Wax',
        pregnant: false,
        fractures: false,
        surgeries: false,
        allergies: false,
        diabetes: true,
        highBlood: true,
        thyroid: false,
        duration: '1 Hour',
        price: '£80',
    },
];




































//Pregnant length that will affect treatment
if (howManyMonths <= 3) {
    console.log('Restrictions will apply to what treatments you would like to have');
} else {
    console.log('Certain treatments will alter. Speak to your beautician for more details');
  }

//Age that will affect what treatments you can actually have
if (age < 16) {
    console.log('Please be advised that anyone under 16 cannot receive any treatment');
} else if ((age === 16) || (age === 17)) {
    console.log('Certain treatments will be unavailable to you.');
} else {
    console.log('Please choose from any treatment');
}
