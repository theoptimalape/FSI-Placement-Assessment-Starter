// First, tell us your name
let yourName = "Amador J. Rodriguez" // HINT: Replace this with your own name!

// Variables
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = gb + cc + sugar

const credit = document.querySelector('#credit')
const gbMinusBtn = document.querySelector('#minus-gb')
const gbPlusBtn = document.querySelector('#add-gb')
const ccMinusBtn = document.querySelector('#minus-cc')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const sugarPlusBtn = document.querySelector('#add-sugar')
const totalDis = document.querySelector('#qty-total')

// Functions
function updateGB(displayGB) {
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = displayGB
    totalDis.innerHTML = total
}
function updateCC(displayCC) {
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = displayCC
    totalDis.innerHTML = total
}
function updateSugar(displaySugar) {
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = displaySugar
    totalDis.innerHTML = total
}


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function(e) {
    if(gb > 0) {
        gb--
        total--
    }
    updateGB(`${gb}`)
})
gbPlusBtn.addEventListener('click', function () {
    gb++
    total++
    updateGB(`${gb}`)
})
ccMinusBtn.addEventListener('click', function(e) {
    if(cc > 0) {
        cc--
        total--
    }
    updateCC(`${cc}`)
})
ccPlusBtn.addEventListener('click', function () {
    cc++
    total++
    updateCC(`${cc}`)
})
sugarMinusBtn.addEventListener('click', function(e) {
    if(sugar > 0) {
        sugar--
        total--
    }
    updateSugar(`${sugar}`)
})
sugarPlusBtn.addEventListener('click', function () {
    sugar++
    total++
    updateSugar(`${sugar}`)
})

