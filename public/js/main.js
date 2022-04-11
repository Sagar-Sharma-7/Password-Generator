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
// const u_char = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']; // uppercase letter array
// const l_char = [...'abcdefghijklmnopqyrstuvwxyz']; // lowercase letter array
// const n_char = [...'0123456789']; // numbers array
// const s_char = [...'!@#$&*?_-']; // symbols array

const characters = {
    uppercase: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
    lowercase: [...'abcdefghijklmnopqyrstuvwxyz'],
    numbers: [...'0123456789'],
    symbols: [...'!@#$&*?_-']
};


// operations runned after clicking "generate password" btn
run_btn.addEventListener("click", ()=> {
    // 1. Get password length
    const p_len = slider.value;

    // 2. getting selected char type
    let arr = [];
    checkbox.forEach(e => {
        if(e.checked){
            arr.push(e.name);
        };
    });
    console.log(arr);
    arr_len = arr.length;
    // const r1 = arr[Math.floor(Math.random() * arr_len)];
    // console.log(r1);
    password = [];
    c_per_pass = Math.floor(p_len/arr_len);

    let i;
    for(i = 0; i < arr_len; i++) {
       const  x = arr[i]
       let y = 0
       while (y < c_per_pass) {
           password.push(characters[x][Math.floor(Math.random() * 10)]);
           y += 1;
       };
       console.log(password);
    }

});