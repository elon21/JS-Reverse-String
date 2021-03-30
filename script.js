// const input = document.getElementById("input-string")
// const input = document.querySelector(".display")
// const input = document.querySelector("p")



function reverseString(string) {
    console.log("Girilen Değer: ", string);

    var splittedString = string.split("");
    console.log("🚀 ~ file: script.js ~ line 11 ~ reverseString ~ splittedString", splittedString)
}




const input = document.querySelector("#input-string");
const button = document.querySelector("#submit-button");


button.addEventListener("click", () => {
    reverseString(input.value)
});

