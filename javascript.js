const Answer = () => {
    // Retrieve number buttons' content
    const one = document.querySelector("#one").textContent;
    const two = document.querySelector("#two").textContent;
    const three = document.querySelector("#three").textContent;
    const four = document.querySelector("#four").textContent;
    const five = document.querySelector("#five").textContent;
    const six = document.querySelector("#six").textContent;
    const seven = document.querySelector("#seven").textContent;
    const eight = document.querySelector("#eight").textContent;
    const nine = document.querySelector("#nine").textContent;
    const zero = document.querySelector("#zero").textContent;
    const doubleZero = document.querySelector("#doublezero").textContent;

    // Retrieve operator buttons' content
    const minus = document.querySelector("#minus").textContent;
    const plus = document.querySelector("#plus").textContent;
    const mult = document.querySelector("#mult").textContent;
    const remainder = document.querySelector("#remainder").textContent;
    const dot = document.querySelector("#dot").textContent;
    const AC = document.querySelector("#AC").textContent;
    const oneBack = document.querySelector("#backspace").textContent;

    // Display area
    const show = document.querySelector("#show");

    // Example: display the value of button "1"
    let a = show.innerHTML = one;

    console.log(a);
};
