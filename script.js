//get html elements
let saveEl = document.getElementById("save_el")
let countEL = document.getElementById("count-el")

// initialize count to 0
let count = 0

// listen for clicks
function increment() {
    count += 1
    countEL.innerHTML = count
}

function save() {
    let counterOutput = count + " - "
    saveEl.innerHTML += counterOutput
    count = 0
    countEL.innerHTML = count
}

