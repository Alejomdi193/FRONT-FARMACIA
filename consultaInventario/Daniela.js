const URL = "http://localhost:5284/api/";
const urlInventario = "Inventario";
const urlProducto = "Producto";
const urlMovimientoInventario = "MovimientoInventario";

const headers = new Headers({ 'Content-Type': 'application/json' });
const botonConsulta1 = document.getElementById('consulta1Boton');
const botonConsulta10 = document.getElementById('botonConsulta10');
const botonConsulta13 = document.getElementById('botonConsulta13');
const botonConsulta19 = document.getElementById('botonConsulta19');
const botonConsulta25 = document.getElementById('botonConsulta25');
const botonConsulta28 = document.getElementById('botonConsulta28');
const botonConsulta31 = document.getElementById('botonConsulta31');
const botonConsulta34 = document.getElementById('botonConsulta34');

botonConsulta1.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta1();
});

async function getConsulta1() {
    console.log("entrooooooo");

    try {
        const response = await (await fetch(`${URL}${urlInventario}/consulta1`)).json();
        console.log(response);

        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 1";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsulta");
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Medicamento: </b>${element.descripcionMedicamento.nombre}</h5>
                        <p class="card-text"><b>Fecha de expiración: </b>${element.fechaExpiracion}</p>
                        <p class="card-text"><b>Cantidad de Mg: </b>${element.descripcionMedicamento.cantidadMg}</p>
                        <p class="card-text"><b>Descripción: </b>${element.descripcionMedicamento.descripcion}</p>
                    </div>
                </div>`
                modalBody.appendChild(div)
            }
            console.log(response);
        } else {
            console.error("ta vacio");
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
}