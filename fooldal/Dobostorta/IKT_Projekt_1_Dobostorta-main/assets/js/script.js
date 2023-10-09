// Current values

let currentnum = document.getElementById("current");
let currentnumvalue = currentnum.getAttribute("curvalue");

// Define the ingredients

let d_egg = document.getElementById("d_egg");
let d_flour = document.getElementById("d_flour");
let d_butter = document.getElementById("d_butter");
let d_sugar = document.getElementById("d_sugar");

let c_chocho = document.getElementById("c_chocho");
let c_vanilla = document.getElementById("c_vanilla");
let c_egg = document.getElementById("c_egg");
let c_butter = document.getElementById("c_butter");
let c_sugar = document.getElementById("c_sugar");

let t_cubesugar = document.getElementById("t_cubesugar");
let t_butter = document.getElementById("t_butter");

let d_egg_onevalue = d_egg.getAttribute("onevalue");
let d_flour_onevalue = d_flour.getAttribute("onevalue");
let d_butter_onevalue = d_butter.getAttribute("onevalue");
let d_sugar_onevalue = d_sugar.getAttribute("onevalue");

let c_chocho_onevalue = c_chocho.getAttribute("onevalue");
let c_vanilla_onevalue = c_vanilla.getAttribute("onevalue");
let c_egg_onevalue = c_egg.getAttribute("onevalue");
let c_butter_onevalue = c_butter.getAttribute("onevalue");
let c_sugar_onevalue = c_sugar.getAttribute("onevalue");

let t_cubesugar_onevalue = t_cubesugar.getAttribute("onevalue");

// Round to two decimals
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

// Set the initial values for currentnumvalue slices
function valuesetfor(howmany) {
    d_egg.innerHTML = roundToTwo(d_egg_onevalue * howmany) + "db tojás";
    d_flour.innerHTML =  Math.round(d_flour_onevalue * howmany) + "g liszt";
    d_butter.innerHTML =  Math.round(d_butter_onevalue * howmany) + "g vaj";
    d_sugar.innerHTML =  Math.round(d_sugar_onevalue * howmany) + "g porcukor";

    c_chocho.innerHTML =  Math.round(c_chocho_onevalue * howmany) + "g csokoládé (70% kakaótartalom)";
    c_vanilla.innerHTML =  roundToTwo(c_vanilla_onevalue * howmany) + "db vanilia rúd";
    c_egg.innerHTML =  roundToTwo(c_egg_onevalue * howmany) + "db tojás";
    c_butter.innerHTML =  Math.round(c_butter_onevalue * howmany) + "g vaj";
    c_sugar.innerHTML =  Math.round(c_sugar_onevalue * howmany) + "g porcukor";

    t_cubesugar.innerHTML =  Math.round(t_cubesugar_onevalue * howmany) + "g kockacukor";
}

valuesetfor(currentnumvalue);

// Quantity buttons

let minusbutton = document.getElementById("minus");
let plusbutton = document.getElementById("plus");

minusbutton.addEventListener("click", function () {
    if (currentnumvalue > 1) {
        currentnumvalue--;
        currentnum.setAttribute("curvalue", currentnumvalue);
        currentnum.innerHTML = currentnumvalue + " szelet";

        valuesetfor(currentnumvalue);
    }
    });

plusbutton.addEventListener("click", function () {
    if (currentnumvalue < 32) {
        currentnumvalue++;
        currentnum.setAttribute("curvalue", currentnumvalue);
        currentnum.innerHTML = currentnumvalue + " szelet";

        valuesetfor(currentnumvalue);
    }
    });

