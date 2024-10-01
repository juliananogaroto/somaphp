// Turma, este js aciona os comando do formulário para o evento 'submit'
document.getElementById("valueForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
 
    // Esta parte do código, recebe os valores do vetor.
    const values = [
        parseInt(document.getElementById("value1").value, 10),
        parseInt(document.getElementById("value2").value, 10),
        parseInt(document.getElementById("value3").value, 10),
        parseInt(document.getElementById("value4").value, 10),
        parseInt(document.getElementById("value5").value, 10)
    ];
 
    // este comando sorteia um valor aleatório randomicamente
    const randomIndex = Math.floor(Math.random() * values.length);
    const randomValue = values[randomIndex];
 
    // Aqui exibiremos o resultado
    document.getElementById("result").textContent = `Valor sorteado: ${randomValue}`;
});