let PetSalon= {
    name:"The fashion pet",
    tel: "999-999-0000",
    hours:{
        open:"9:00 am",
        close:"6:00 pm",
    },
    address: {
        city: "Queens",
        street: "lincoln street",
        zip: "11420",
    },
    pets: [
        {
            name:"scooby",
            age:70,
            gender:"male",
            service:"grooming",
        },
        {
            name:"scrappy",
            age:50,
            gender:"male",
            service:"nails",
        }
    ]
}
function displayPetName(){
    const petsDiv = document.querySelector("#pets");
    for (let i = 0; i<PetSalon.pets.length; i++){
        petsDiv.innerHTML += `
        <li>${PetSalon.pets[i].name}
            </li>`;
    }
}

function init()
{
    displayPetName();
}
window.onload = init;