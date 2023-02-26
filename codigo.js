const materiasHTML = document.querySelector(".materias");

const materias = [{
    nombre: "Fisica 1",
    Nota: 7
}, {
    nombre: "Matematica",
    Nota: 8
}, {
    nombre: "Quimica",
    Nota: 9
}, {
    nombre: "Algebra",
    Nota: 7
}, {
    nombre: "Base de Dato",
    Nota: 8
}, ]

const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        materia = materias[id];
        if (materia == undefined) reject("No existe la Materia")
        else setTimeout(() => { resolve(materia) }, Math.random() * 400);
    })
}

const devolverMaterias = async() => {
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].Nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias()