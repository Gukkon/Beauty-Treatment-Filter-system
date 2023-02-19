const firstName = 'Shaun';

const lastName = 'Homer';

const age = 14;

const gender = 'Male';

const pregnant = 'no';

const howManyMonths = 0;

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

const massage = [
    {
        treatName: 'Full Body Massage',
        pregnant: false,
        duration: '1 Hour',
        price: '£80',
    },
    {
        treatName: 'Full Deep Tissue Body Massage',
        pregnant: false,
        duration: '1.5 Hours',
        price: '£120',
    },
    {
        treatName: 'Lower Body Massage',
        pregnant: true,
        duration: '30 Minutes',
        price: '£40',
    },
    {
        treatName: 'Upper Body Massage',
        pregnant: false,
        duration: '30 Minutes',
        price: '£40',
    },
    {
        treatName: 'Arms and Legs Massage',
        pregnant: false,
        duration: '1 Hour',
        price: '£80',
    },
    {
        treatName: 'Pregnancy Massage',
        pregnant: true,
        duration: '1 Hour',
        price: '£50',
    },
    {
        treatName: 'Soft Tissue Massage',
        pregnant: true,
        duration: '1 Hour',
        price: '£70',
    },
];

const facials = [
    {
        treatName: 'Head in the Clouds',
        pregnant: false,
        duration: '1 Hour',
        price: '£80',
    },
    {
        treatName: 'Elemis Ritual Facial',
        pregnant: false,
        duration: '1.5 Hours',
        price: '£120',
    },
    {
        treatName: 'Exfoliating Facial',
        pregnant: true,
        duration: '30 Minutes',
        price: '£40',
    },
    {
        treatName: 'Chemical Peel',
        pregnant: false,
        duration: '30 Minutes',
        price: '£40',
    },
    {
        treatName: 'Laser Skin',
        pregnant: false,
        duration: '1 Hour',
        price: '£80',
    },
    {
        treatName: 'Oxygen Facial',
        pregnant: true,
        duration: '1 Hour',
        price: '£50',
    },
    {
        treatName: 'Deep Cleansing',
        pregnant: true,
        duration: '1 Hour',
        price: '£70',
    },
];

const manPed = [
    {
        treatName: 'Gel Type',
        pregnant: false,
        duration: '1 Hour',
        price: '£80',
    },
    {
        treatName: 'Basic',
        pregnant: true,
        duration: '1.5 Hours',
        price: '£30',
    },
    {
        treatName: 'French and Dip Powder',
        pregnant: true,
        duration: '30 Minutes',
        price: '£40',
    },
    {
        treatName: 'Hard Gel',
        pregnant: false,
        duration: '30 Minutes',
        price: '£20',
    },
    {
        treatName: 'Shellac',
        pregnant: false,
        duration: '1 Hour',
        price: '£70',
    },
];

const waxing = [
    {
        treatName: 'Chest Wax',
        pregnant: false,
        duration: '1 Hour',
        price: '£40',
    },
    {
        treatName: 'Back Wax',
        pregnant: false,
        duration: '30 Minutes',
        price: '£50',
    },
    {
        treatName: 'Face Wax',
        pregnant: true,
        duration: '30 Minutes',
        price: '£10',
    },
    {
        treatName: 'Top Lip Wax',
        pregnant: false,
        duration: '30 Minutes',
        price: '£10',
    },
    {
        treatName: 'Full Leg Wax',
        pregnant: false,
        duration: '1 Hour',
        price: '£40',
    },
    {
        treatName: 'Chin Wax',
        pregnant: true,
        duration: '30 Minutes',
        price: '£15',
    },
    {
        treatName: 'Bikini Wax',
        pregnant: false,
        duration: '30 Minutes',
        price: '£15',
    },
    {
        treatName: 'Full Body Wax',
        pregnant: false,
        duration: '1 Hour',
        price: '£80',
    },
];