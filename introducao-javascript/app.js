let salvarH1 = document.querySelector(".titulo");
salvarH1.textContent = "Pacientes Alterados"

//manipulando DOM

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    
    let paciente = pacientes[i];

    let tdpeso = paciente.querySelector(".info-peso");
    let peso = tdpeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura")
    let altura = tdAltura.textContent;


    let tdImc = paciente.querySelector(".info-imc");

    let imcCalc = peso / (altura * altura);

    tdImc.textContent = imcCalc.toFixed(2);



    
}


