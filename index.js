const slider = document.getElementById("length");
const lengthvalue = document.getElementById("LengthValue");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const genbtn = document.getElementById("generate");
const copybtn = document.getElementById("copy");
const result = document.getElementById("resulttext");

slider.addEventListener("input",function(){
    lengthvalue.textContent = slider.value;
});



genbtn.onclick = function(){
    
    const length = Number(slider.value);
    
    let includeupper = false;
    let includelower = false;
    let includenum = false;
    let includesymbols = false;
    
    if (uppercase.checked){
        includeupper =  true;
    }
    if (lowercase.checked){
        includelower =  true;
    }
    if (numbers.checked){
        includenum =  true;
    }
    if (symbols.checked){
        includesymbols =  true;
    }

    function gen_password(length, includeupper, includelower, includenum, includesymbols){

        const Upperpool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const Lowerpool = "abcdefghijklmnopqrstuvwxyz";
        const Numpool = "0123456789";
        const Symbolspool = "!@#$%^&*()_+-=[]{}|;:.,<>?";

        let characterpool = "";
        let password = "";

        if(includeupper){
            characterpool += Upperpool;
        }
        if(includelower){
            characterpool += Lowerpool;
        }
        if(includenum){
            characterpool += Numpool;
        }
        if(includesymbols){
            characterpool += Symbolspool;
        }

        if (characterpool.length === 0)
        {
            return "PLEASE SELECT ATLEAST ONE OPTION.";
        }
        
        for(let i = 0; i< length; i++){
            const randIndex = Math.floor(Math.random() * characterpool.length);
            password += characterpool[randIndex];
        }
        
        return password;
}
    const password = gen_password(length, includeupper,  includelower, includenum , includesymbols);
    console.log(password);
    result.textContent = `${password}`
}

copybtn.onclick = function(){
    if(result.textContent === "" || result.textContent === "PLEASE SELECT ATLEAST ONE OPTION."){
        return;
    }
    navigator.clipboard.writeText(result.textContent)

    copybtn.textContent ="COPIED!";
    setTimeout(() => {
        copybtn.textContent = "COPY"
    }, 1500);
}

