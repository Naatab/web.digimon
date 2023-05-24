const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa-regular fa-xmark'
    : ''
}

const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})


const url = (`https://digimon-api.vercel.app/api/digimon`);
const botonDigimon = document.getElementById('botonBuscar');
const digimonSeleccionado = document.getElementById('digimonSeleccionado');

const intentoDigimon = (input) => {

    const urlDigimon = `${url}/name/${input}` || `${url}/name/agumon`;

    fetch(urlDigimon)
        .then(response => response.json())
        .then(datos => {

            console.log(datos);

            const imagen = document.getElementById('imagen');
            imagen.style.backgroundImage = `url(${datos[0].img})`;
            imagen.classList.add('imagen-pequena');


            const nombre = document.getElementById('nombre');
            const nivel = document.getElementById('nivel');

            nombre.innerHTML = datos[0].name;
            nivel.innerHTML = datos[0].level;

        })
        .catch(() => {

            document.getElementById('error').innerHTML = `Ese Digimon no está en nuestra base de datos pero mira, aquí está Mamemon ¡Disfrutalo! `;

            intentoDigimon('mamemon');
        })

}

botonDigimon.addEventListener('click', (e) => {
    e.preventDefault();

    const inputDigimon = document.getElementById('buscarDigimon');

    console.log(inputDigimon.value)

    document.getElementById('error').innerHTML = '';

    intentoDigimon(inputDigimon.value);
})



fetch(`https://digimon-api.vercel.app/api/digimon/name/agumon`)
    .then(response => response.json())
    .then(datos => {

        const nombre1 = datos[0].name;
        const nivel1 = datos[0].level;
        const imagen1 = datos[0].img;

        document.getElementById('nombre1').innerHTML = nombre1;
        document.getElementById('nivel1').innerHTML = nivel1;
        document.getElementById('imagenTabla1').innerHTML = `<img src="${imagen1}" style="width: 5rem"/>`; 
            imagen1.classList.add('imagen-pequena');

    })
    fetch(`https://digimon-api.vercel.app/api/digimon/name/gabumon`)
    .then(response => response.json())
    .then(datos => {

        const nombre2 = datos[0].name;
        const nivel2 = datos[0].level;
        const imagen2 = datos[0].img;

        document.getElementById('nombre2').innerHTML = nombre2;
        document.getElementById('nivel2').innerHTML = nivel2;
        document.getElementById('imagenTablas2').innerHTML = `<img src="${imagen2}" style="width: 5rem"/>`;

    })
    fetch(`https://digimon-api.vercel.app/api/digimon/name/patamon`)
    .then(response => response.json())
    .then(datos => {

        const nombre3 = datos[0].name;
        const nivel3 = datos[0].level;
        const imagen3 = datos[0].img;

        document.getElementById('nombre3').innerHTML = nombre3;
        document.getElementById('nivel3').innerHTML = nivel3;
        document.getElementById('imagenTabla3').innerHTML = `<img src="${imagen3}" style="width: 5rem"/>`; 

    })
    fetch(`https://digimon-api.vercel.app/api/digimon/name/gatomon`)
    .then(response => response.json())
    .then(datos => {

        const nombre4 = datos[0].name;
        const nivel4 = datos[0].level;
        const imagen4 = datos[0].img;

        document.getElementById('nombre4').innerHTML = nombre4;
        document.getElementById('nivel4').innerHTML = nivel4;
        document.getElementById('imagenTabla4').innerHTML = `<img src="${imagen4}" style="width: 5rem"/>`; 

    })
    fetch(`https://digimon-api.vercel.app/api/digimon/name/tentomon`)
    .then(response => response.json())
    .then(datos => {

        const nombre5 = datos[0].name;
        const nivel5 = datos[0].level;
        const imagen5 = datos[0].img;

        document.getElementById('nombre5').innerHTML = nombre5;
        document.getElementById('nivel5').innerHTML = nivel5;
        document.getElementById('imagenTabla5').innerHTML = `<img src="${imagen5}" style="width: 5rem"/>`; 

    })
    fetch(`https://digimon-api.vercel.app/api/digimon/name/biyomon`)
    .then(response => response.json())
    .then(datos => {

        const nombre6 = datos[0].name;
        const nivel6 = datos[0].level;
        const imagen6 = datos[0].img;

        document.getElementById('nombre6').innerHTML = nombre6;
        document.getElementById('nivel6').innerHTML = nivel6;
        document.getElementById('imagenTabla6').innerHTML = `<img src="${imagen6}" style="width: 5rem"/>`; 

    })
    fetch(`https://digimon-api.vercel.app/api/digimon/name/palmon`)
    .then(response => response.json())
    .then(datos => {

        const nombre7 = datos[0].name;
        const nivel7 = datos[0].level;
        const imagen7 = datos[0].img;

        document.getElementById('nombre7').innerHTML = nombre7;
        document.getElementById('nivel7').innerHTML = nivel7;
        document.getElementById('imagenTabla7').innerHTML = `<img src="${imagen7}" style="width: 5rem"/>`; 

    })
    fetch(`https://digimon-api.vercel.app/api/digimon/name/gomamon`)
    .then(response => response.json())
    .then(datos => {

        const nombre8 = datos[0].name;
        const nivel8 = datos[0].level;
        const imagen8 = datos[0].img;

        document.getElementById('nombre8').innerHTML = nombre8;
        document.getElementById('nivel8').innerHTML = nivel8;
        document.getElementById('imagenTabla8').innerHTML = `<img src="${imagen8}" style="width: 5rem"/>`; 

    })

    .catch((error) => {
        console.log(error);
    })



fetch(`https://digimon-api.vercel.app/api/digimon/level/fresh`)
    .then(response => response.json())
    .then(datos => {

        console.log(datos[0].name);

        let datosTabla2 = "";
        datos.map((values) => {
            datosTabla2 += `<tr>
                <td data-cell="nombre">${values.name}</td>
                <td data-cell="nivel">${values.level}</td>
                <td data-cell="imagen"><img src="${values.img}" style="width: 5rem"/></td>
            </tr>`;
        })
        document.getElementById("cuerpoTabla2").innerHTML = datosTabla2;

    })
    .catch((error) => {
        console.log(error);
    })
