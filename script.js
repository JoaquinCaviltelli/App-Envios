var cardConteiner = document.querySelector(".cardConteiner");

var point1 = document.getElementById("point1");
var point2 = document.getElementById("point2");
var point3 = document.getElementById("point3");
var point4 = document.getElementById("point4");

var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");


var btnCalcularEnvio = document.getElementById("btnCalcularEnvio");
var btnMasInfo = document.getElementById("btnMasInfo");
var btnDetalles = document.getElementById("btnDetalles");
var btnVolverACalcular = document.getElementById("btnVolverACalcular");

var inputKm = document.getElementById("km");
var inputOperacion = document.getElementById("operacion");
var costoDeEnvio = document.getElementById("costoDeEnvio");

var masInfoGastos = document.getElementById("masInfoGastos");
var masInfoDescuentos = document.getElementById("masInfoDescuentos");
var masInfoEnvios = document.getElementById("masInfoEnvios");

var detallesViaticos = document.getElementById("detallesViaticos");
var detallesPeajes = document.getElementById("detallesPeajes");
var detallesCombustible = document.getElementById("detallesCombustible");
var detallesHorasExtras = document.getElementById("detallesHorasExtras");





var km
var operacion
var porcentaje
var total
var viaticos
var peaje
var combustible = 90.59;
var ltCombustible
var costoCombustible
var horas
var horasExtras
var gastos
var envio



point1.addEventListener("click", function () {
  conteinerTranslate(0);
  pointActive(point1)
  pointDesactive(point2, point3, point4);
})

point2.addEventListener("click", function () {
  conteinerTranslate(-100);
  pointActive(point2);
  pointDesactive(point1, point3, point4);
})

point3.addEventListener("click", function () {
  conteinerTranslate(-200);
  pointActive(point3);
  pointDesactive(point1, point2, point4);

})

point4.addEventListener("click", function () {
  conteinerTranslate(-300);
  pointActive(point4);
  pointDesactive(point1, point2, point3)
})



btnCalcularEnvio.addEventListener("click", function () {
  conteinerTranslate(-100);
  pointActive(point2);
  pointDesactive(point1, point3, point4);
  recopilarDatos();

})

btnMasInfo.addEventListener("click", function () {
  conteinerTranslate(-200);
  pointActive(point3);
  pointDesactive(point1, point2, point4);
})

btnDetalles.addEventListener("click", function () {
  conteinerTranslate(-300);
  pointActive(point4);
  pointDesactive(point1, point2, point3)
})

btnVolverACalcular.addEventListener("click", function () {
  conteinerTranslate(0);
  pointActive(point1)
  pointDesactive(point2, point3, point4);

  reiniciarInput();
})



//Mover las cards

function conteinerTranslate(vw) {
  cardConteiner.style.transform = `translateX(` + vw + `vw)`
}

//Activar Point

function pointActive(point) {
  point.classList.add("active")
}

//Desactivar Point

function pointDesactive(pointA, pointB, pointC) {
  pointA.classList.remove("active");
  pointB.classList.remove("active");
  pointC.classList.remove("active");
}

//Recopilar Datos

function recopilarDatos() {
  km = inputKm.value;
  operacion = inputOperacion.value;

  calcularEnvio()

  if (envio === "Gratis") {

    costoDeEnvio.innerHTML = `${envio}`

  } else {
    costoDeEnvio.innerHTML = `$ ${envio}`

  }

  masInfoGastos.innerHTML = `$ ${gastos}`
  masInfoDescuentos.innerHTML = `$ ${porcentaje}`
  masInfoEnvios.innerHTML = `$ ${envio}`

  detallesViaticos.innerHTML = `$ ${viaticos}`
  detallesPeajes.innerHTML = `$ ${peaje}`
  detallesCombustible.innerHTML = `$ ${costoCombustible}`
  detallesHorasExtras.innerHTML = `$ ${horasExtras}`


}

//Calcular Envio

function calcularEnvio() {

  porcentaje = Math.round(operacion * 0.01)

  if (km * 7.5 < 2500) {
    viaticos = Math.round(km * 7.5)
  } else {
    viaticos = 2500
  }

  peaje = Math.round((km / 100) * 90)

  ltCombustible = Math.round((km * 0.2525) * 2)

  costoCombustible = Math.round(ltCombustible * combustible)

  horas = km * 0.035

  if (horas < 8) {

    horasExtras = 0
  } else {
    horasExtras = Math.round((horas - 8) * 300)
  }

  if (km > 80) {
    gastos = Math.round(viaticos + peaje + horasExtras + costoCombustible)
  } else {
    gastos = costoCombustible
  }

  if (porcentaje > gastos) {
    envio = "Gratis"
  } else {
    envio = Math.round(gastos - porcentaje)
  }
}

function reiniciarInput() {
  inputKm.value = ""
  inputOperacion.value = ""

  inputKm.focus()
}



var hammer1 = new Hammer(card1);
var hammer2 = new Hammer(card2);
var hammer3 = new Hammer(card3);
var hammer4 = new Hammer(card4);


hammer1.on('panleft panright', function (ev) {
  if (ev.type === "panleft") {

    cardConteiner.style.transform = `translateX(-100vw)`

    pointActive(point2)
    pointDesactive(point1, point3, point4);

  }
});


hammer2.on('panleft panright', function (ev) {
  if (ev.type === "panleft") {

    cardConteiner.style.transform = `translateX(-200vw)`;
    pointActive(point3)
    pointDesactive(point2, point1, point4);
  }
  if (ev.type === "panright") {

    cardConteiner.style.transform = `translateX(0vw)`
    pointActive(point1)
    pointDesactive(point2, point3, point4);
  }
});

hammer3.on('panleft panright', function (ev) {
  if (ev.type === "panleft") {

    cardConteiner.style.transform = `translateX(-300vw)`;
    pointActive(point4)
  pointDesactive(point2, point3, point1);
  }
  if (ev.type === "panright") {

    cardConteiner.style.transform = `translateX(-100vw)`;
    pointActive(point2)
    pointDesactive(point1, point3, point4);
  }
});
hammer4.on('panleft panright', function (ev) {

  if (ev.type === "panright") {

    cardConteiner.style.transform = `translateX(-200vw)`;
    pointActive(point3)
  pointDesactive(point2, point1, point4);
  }
});