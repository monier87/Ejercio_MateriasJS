const materiasHTML= document.querySelector(".materias");

const materias =[
    {
        nombre:"Fisica 1",
        Nota: 5
    },{
        nombre:"Matematica",
        Nota: 6
    },{
        nombre:"Quimica",
        Nota: 9
    },{
        nombre:"Algebra",
        Nota: 8
    },{
        nombre:"Base de Dato",
        Nota: 4
    },
]

const obtenerMateria = (id)=>{
    return new Promise((resolve, reject)=>{
        materia=materias[id];
        if (materia==undefined)reject("No existe la Materia")
        else setTimeout(resolve(materia),Math.random()*400);
    })
}

obtenerMateria(1).then(res => console.log(res))