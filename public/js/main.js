// variables
const p_div = document.querySelector(".password");
const copy_btn = document.querySelector(".copy_btn");
const upper = document.querySelector("#upper");
const lower = document.querySelector("#lower");
const num = document.querySelector("#num");
const symbol = document.querySelector("#symbol");
const checkbox = document.querySelectorAll(".checkbox");
const slider = document.querySelector("#slider");
const len_box = document.querySelector("#len_value");
const run_btn = document.querySelector("#btn");


// change value of password length as we move the slider.
len_box.innerHTML = slider.value;
slider.oninput = function(){
    len_box.innerHTML = this.value;
};


// creating arr of each type of char
const u_char = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']; // uppercase letter array
const l_char = [...'abcdefghijklmnopqyrstuvwxyz']; // lowercase letter array
const n_char = [...'0123456789']; // numbers array
const s_char = [...'!@#$&*?_-']; // symbols array


// operations runned after clicking "generate password" btn
run_btn.addEventListener("click", ()=> {
    // 1. Get password length
    console.log(slider.value);
    let arr = []
    checkbox.forEach(e => {
        if(e.checked){
            arr.push(e.name);
        }
    });
    // array with selected char type is ready.

});