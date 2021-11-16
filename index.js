//Copy the user wallet address
let copyText = document.querySelector(".copy-address")
copyText.querySelector(".button").addEventListener("click", function(){
    let input = copyText.querySelector("input.text");
    input.select();
    document.execCommand("copy")
    copyText.classList.add("active");
})

//registration validation
