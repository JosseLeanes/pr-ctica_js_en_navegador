
const controlGastos = {
    presupuesto: 0,
    gastos: 0,
    saldo: 0
}

const campoEntradaPresupuesto = document.querySelector('.FormAddPresupuesto input')
const buttonPresupuesto = document.querySelector('.FormAddPresupuesto button')

buttonPresupuesto.addEventListener('click', capturarValorPresupuesto)

function capturarValorPresupuesto() {
    const valorPresupuesto = Number(campoEntradaPresupuesto.value)
    controlGastos.presupuesto = valorPresupuesto
    controlGastos.saldo = valorPresupuesto
    atualizarInterface()
}

const campoConceptoGasto = document.querySelector('.FormAddGasto_Nombre')
const campoValorGasto = document.querySelector('.FormAddGasto_Valor')
const buttonGasto = document.querySelector('.FormAddGasto button')

buttonGasto.addEventListener('click', capturarValorGasto)

function capturarValorGasto() {
    const conceptoGasto = campoConceptoGasto.value
    const valorGasto = Number(campoValorGasto.value)
    controlGastos.gastos += valorGasto
    controlGastos.saldo -= valorGasto
    atualizarInterface()
    añadirGastoInterface(conceptoGasto, valorGasto)

}
const presupuesto = document.querySelector('.seccResultados_Presupuesto p')
const gastos = document.querySelector('.seccResultados_Gastos p')
const saldo = document.querySelector('.seccResultados_Saldo p')

function atualizarInterface() {
    presupuesto.innerText = `+€ ${controlGastos.presupuesto}`
    gastos.innerText = `- € ${controlGastos.gastos}`
    saldo.innerText = `€ ${controlGastos.saldo}`
}
const listaGastos = document.querySelector('.containerGastos_lista')

function añadirGastoInterface(conceptoGasto, valorGasto) {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const img = document.createElement('img')

    h3.innerText = conceptoGasto
    p.innerText = `€ ${valorGasto}`
    img.src = "./assets/img/lixo.png"
    img.alt = "bote"

    img.addEventListener('click', removerGasto)
    li.dataset.valor = valorGasto
    li.appendChild(h3)
    li.appendChild(p)
    li.appendChild(img)
    listaGastos.appendChild(li)
}

function removerGasto(evento) {
    const gastoClickeado = evento.target.parentNode
    const valorGastoClickeado = Number(gastoClickeado.dataset.valor)
    controlGastos.gastos -= valorGastoClickeado
    controlGastos.saldo += valorGastoClickeado
    atualizarInterface()
    gastoClickeado.remove()
}