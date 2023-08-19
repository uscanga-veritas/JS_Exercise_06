let Pedro = {aqua: 0, emocion: 0, alegria: 0, frescura: 0};
let Juana = {aqua: 0, emocion: 0, alegria: 0, frescura: 0};

let imgPedro = document.getElementById("Pedro");
let imgJuana = document.getElementById("Juana");

let dialogPedro = document.getElementById("dialogPedro");
let dialogJuana = document.getElementById("dialogJuana");

let aquaInputPedro = document.getElementById("aquaInputPedro");
let aquaInputJuana = document.getElementById("aquaInputJuana");

let confirmPedro = document.getElementById("confirmPedro");
let confirmJuana = document.getElementById("confirmJuana");

let currentStep = 0;

imgPedro.addEventListener("click", () => {
    dialogPedro.showModal();
    currentStep = 0;
    changeDialogText();
});

imgJuana.addEventListener("click", () => {
    dialogJuana.showModal();
    currentStep = 0;
    changeDialogText();
});

confirmPedro.addEventListener("click", () => {
    switch (currentStep) {
        case 0:
            Pedro.aqua = parseFloat(aquaInputPedro.value);
            break;
        case 1:
            Pedro.emocion = parseFloat(aquaInputPedro.value);
            break;
        case 2:
            Pedro.alegria = parseFloat(aquaInputPedro.value);
            break;
        case 3:
            Pedro.frescura = parseFloat(aquaInputPedro.value);
            dialogPedro.close();
            console.log("Datos de Pedro:", Pedro);
            return; // Salir del ciclo cuando se completa
    }
    currentStep++;
    changeDialogText();
    aquaInputPedro.value = ""; // Borrar el valor del input
});

confirmJuana.addEventListener("click", () => {
    Juana.aqua = parseFloat(aquaInputJuana.value);
    dialogJuana.close();
    console.log("Datos de Juana:", Juana);
});

function changeDialogText() {
    let steps = [
        "Ingrese la cantidad de Aqua vendidas:",
        "Ingrese la cantidad de Emoción vendidas:",
        "Ingrese la cantidad de Alegría vendidas:",
        "Ingrese la cantidad de Frescura vendidas:"
    ];

    let currentText = steps[currentStep];
    document.getElementById("dialogTextPedro").textContent = currentText;
}