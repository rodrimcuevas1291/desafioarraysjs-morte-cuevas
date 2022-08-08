class Pizza {
    constructor(id, sabor, precio, tamaño) {
        this.id = id
        this.sabor = sabor.toUpperCase()
        this.precio = precio
        this. tamaño = tamaño
        }
}

const pizzas = []

function agregarPizzas() {
pizzas.push(new Pizza(1, "Muzzarella", 900, "familiar"))
pizzas.push(new Pizza(2, "Napolitana", 1100, "familiar"))
pizzas.push(new Pizza(3, "Fugazzeta", 850, "individual"))
pizzas.push(new Pizza(4, "Pepperoni", 1650, "familiar"))
pizzas.push(new Pizza(5, "Especial", 1800, "familiar"))
pizzas.push(new Pizza(6, "Jamón y Morrones", 1400, "familiar"))
pizzas.push(new Pizza(7, "Cancha", 1100, "familiar"))
}

agregarPizzas();

alert("Bienvenidos a Simplo Cocina")
pedido = prompt("Que pizza vas a querer ordernar hoy? Te recordamos los sabores con los que contamos: \nMuzzarella \nNapolitana \nFugazzetta \nPepperoni \nEspecial \Jamón y Morrones \nCancha").toUpperCase()

let buscar = pizzas.filter(el => el.sabor.includes(pedido))
        
alert("Excelente elección, a continuación le diremos cual es el precio a pagar por esa Pizza")
        
alert(`El precio a pagar es de: ${buscar[0].precio} `)