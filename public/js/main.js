const copyBtn = document.querySelector("#copyBtn");
let resultBox = document.querySelector("#resultBox");
const resultBtn = document.querySelector("#resultBtn");
const checkbox = document.querySelectorAll(".checkbox");
const slider = document.querySelector("#slider");
const givenPassLeng = document.querySelector("#passwordLength");


// text content
resultBox.innerHTML = "Get Strongest Password";
copyBtn.innerHTML = "Copy";

let passLeng;
setInterval(() => {
    passLeng = slider.value;
    givenPassLeng.innerHTML = passLeng;
}, 1);


// charcters for password
const characters = {
    uppercase: "ABCDERFGHIKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "01234567890123456789012345",
    symbols: "!@#$_!@#$_!@#$_!"
};


// result
resultBtn.addEventListener("click", () => {
    // animation
    const animation = setInterval(() => {
        let i;
        let animate = "";
        for(i = 0; i < passLeng; i++){
            animate += Math.floor(Math.random() * 10);
        }
        resultBox.innerHTML = animate;
    }, 1);



    let result = "";
    let selectedChecks = "";

    checkbox.forEach(check => {
        if(check.checked){
            selectedChecks += characters[check.name];
        }
    });

    if(!selectedChecks){
        alert("Please select any character type for your password...");
        clearInterval(animation)
    }else{
        setTimeout(() => {
            clearInterval(animation)
            let i;
            for(i = 0; i < passLeng; i++){
                result += selectedChecks.charAt(Math.floor(Math.random() * selectedChecks.length));
                resultBox.innerHTML = result;
            }
        }, 500);
};
});


// copy btn
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(resultBox.innerHTML);
    copyBtn.innerHTML = `&#10003; Copied`;

    setTimeout(() => {
        copyBtn.innerHTML = "Copy";
    }, 1000);
});