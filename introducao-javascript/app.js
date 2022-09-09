let salvarH1 = document.querySelector(".titulo");
salvarH1.textContent = "Pacientes Alterados"

//manipulando DOM

let paciente = document.querySelector("#primeiro-paciente")
let tdpeso = paciente.querySelector(".info-peso");
let peso = tdpeso.textContent;

let tdAltura = paciente.querySelector(".info-altura")
let altura = tdAltura.textContent;


let tdImc = paciente.querySelector(".info-imc");

let imcCalc = peso/(altura*altura);

tdImc.textContent = imcCalc;



console.log(imcCalc);