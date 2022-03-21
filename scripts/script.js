const main = document.getElementById('main')
const form = document.getElementById('form')
const divResults = document.getElementById('divResults')
const cantPc = document.getElementById('cantPc')
const precioPc = 1800000

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (cantPc.value == "" || cantPc.value == 0 || cantPc.value < 0) {
        Swal.fire({
            text: 'Verifique la cantidad ingresada',
            confirmButtonColor: "#BB2D3B"
        })
    } else {
        const subTotal = Number(cantPc.value) * precioPc
        if (Number(cantPc.value) >= 10 && Number(cantPc.value) <= 20) { // 10% de descuento de 10 a 20 unidades
            const descuento = subTotal * 0.1
            const valorTotal = subTotal - descuento
            const datoDesc = "Descuento del 10%"
            const datos = {
                subTotal, descuento, valorTotal, datoDesc
            }
            mostrarInfo(datos)
        }
        else if (Number(cantPc.value) > 20 && Number(cantPc.value) <= 30) { // 20% de descuento de 21 a 30 unidades
            const descuento = subTotal * 0.2
            const valorTotal = subTotal - descuento
            const datoDesc = "Descuento del 20%"
            const datos = {
                subTotal, descuento, valorTotal, datoDesc
            }
            mostrarInfo(datos)
        }
        else if (Number(cantPc.value) > 30) { // 30% de descuento de 31 unidades hacia adelante
            const descuento = subTotal * 0.3
            const valorTotal = subTotal - descuento
            const datoDesc = "Descuento del 30%"
            const datos = {
                subTotal, descuento, valorTotal, datoDesc
            }
            mostrarInfo(datos)
        }
        else { // 0% de descuento para menor a 1o unidades
            const descuento = 0
            const valorTotal = subTotal
            const datoDesc = "No hay descuento para esta compra"
            const datos = {
                subTotal, descuento, valorTotal, datoDesc
            }
            mostrarInfo(datos)
        }
    }
})

const mostrarInfo = (datos) => {
    main.innerHTML = ""
    divResults.innerHTML = `
        <div id="resultsContent">
            <span class="detalleTitle">Detalles de la compra</span>
            <div class="detalleContent">
                <div class="mb-3">
                    <label for="valorPC" class="form-label">Valor de la compra</label>
                    <input type="number" class="form-control" id="valorPC" value=${datos.subTotal} disabled>
                </div>
                <div class="mb-3">
                    <label for="valorDesc" class="form-label">Valor de descuento</label>
                    <input type="number" class="form-control" id="valorDesc" value=${datos.descuento} disabled>
                </div>
                <div class="mb-3">
                    <label for="valorTo" class="form-label">Total</label>
                    <input type="number" class="form-control" id="valorTo" value=${datos.valorTotal} disabled>
                </div>
                <div class="mb-3">${datos.datoDesc}</div>
                <button type="button" class="btn btn-danger" onclick="nuevoCalculo()">Nuevo Calculo</button>
            </div>
        </div>
    `
}

const nuevoCalculo = () => {
    window.location.reload()
}