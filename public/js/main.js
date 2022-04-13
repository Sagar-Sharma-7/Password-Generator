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
    password = [];
    c_per_pass = Math.floor(p_len/arr_len);

    // 3. making pass of equal character type
    let i;
    for(i = 0; i < arr_len; i++) {
       const  x = arr[i];
       const z = characters[x].length; // characters length
       let y = 0;
       while (y < c_per_pass) {
           password.push(characters[x][Math.floor(Math.random() * z)]);
           y += 1;
       };
    };
    console.log(password); // password per char ready

    //4. if required adding random characters in password
    if (password.length != p_len){
        console.log("more char");
        let all_char_arr = [];
        const all_char = all_char_arr.concat(characters.uppercase, characters.lowercase, characters.numbers, characters.symbols);
        const req_char = p_len - password.length;
        let a = 0;
        console.log(all_char);
        while (a < req_char){
            password.push(all_char[Math.floor(Math.random() * all_char.length)]);
            a += 1;
        };
    };
    console.log(password);
    
});