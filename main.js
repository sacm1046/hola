const name = "sacmaaaa"; //string
let lastname = "asd"; //string
let lastnam = 'asd'; //string
let number = 0; //number
let boolean = false //boolean
let array = ["sacma", 0, false, 65]
let perro = {
    pelo: "bonito",
    raza: "kiltro",
    edad: 29,
    es_mayor_deedad: true,
    dueño: {
        nombre: "sacm",
        edad: 29
    },
}
let welcome = "Javascript"
perro.dueño.nombre
const set_name = () => {
    alert(`bienvenido ${name}`)
}

// if / else / else if
/* let edad = 18;
let mayoria_de_edad = 18 */

/* const mayor_de_edad = () => {
    if (edad > mayoria_de_edad) {
        console.log("Puede ingresar")
    } else if (edad === mayoria_de_edad) {
        console.log("Estay en la quema")
    }
    else {
        console.log("pa la casa")
    }
} */

/* const mayor_de_edad2 = () => edad > mayoria_de_edad ? console.log("puede ingresar") : edad = mayoria_de_edad ? console.log("Estay en la quema") : console.log("pa la casa")

const mayor_de_edad3 = () => edad > mayoria_de_edad && console.log("puede ingresar")
 */

// for 
/* let array2 = ["asd",1,2,3,4,5]

for(let x=0;x < array2.length; x++){
    if(typeof(array2[x]) === "string" ){
        console.log("valor: "+array2[x]+" - index: "+x)
    }
}
array2.map((item, i)=>console.log("valor: "+item +" - index: "+i)) 
let filter_array = array2.filter((item)=> item>3 )
console.log(filter_array)
 */

//EVENT LISTENERS
/* let my_btn = document.getElementById('btn-send')
let my_input = document.getElementById('input-age') */

/* let mayoria_de_edad = 18 */
//Css
/* my_btn.style.color="red"
my_btn.style.fontSize="200px" */
//HTML

//Class

/* const mayor_de_edad = (edad) => {
    if (edad >= mayoria_de_edad) {
        my_btn.classList.add("green_btn")
        my_btn.classList.remove("red_btn")
    }
    else {
        my_btn.classList.add("red_btn")
        my_btn.classList.remove("green_btn")
    }
}
my_input.addEventListener('change', (e)=>{
    console.log(e.target.value)
    mayor_de_edad(e.target.value)
}) */
///////////////////////////////////////////
let counter = document.getElementById("counter")
let add = document.getElementById("add")
let reset = document.getElementById("reset")
let value = 0

add.addEventListener('click', (e)=>{
    value++
    counter.innerHTML=value
    counter.classList.add('soft')
    setTimeout(()=>{counter.classList.remove('soft')},500)
})
reset.addEventListener('click', (e)=>{
    value=0
    counter.innerHTML=value
    counter.classList.add('soft')
    setTimeout(()=>{counter.classList.remove('soft')},500)
})

