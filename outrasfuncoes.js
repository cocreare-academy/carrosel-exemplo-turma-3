function cliqueBotaoAlert() {
    alert('Obrigado por clicar em mim'); 
    console.log('Usuario fechou o alert');
}

function testaFormulario(event) {
    event.preventDefault();

    if (event.target['pass'].value == "" || event.target['user'].value == "") {
        alert('Preencha todos os campos do formulário')
    }
    console.log(event.target['pass'].value)
    console.log('Testando formulario')

    window.location="/login.html"
}

function cliqueSubmit(e) {
    console.log(e)
}

function maskNumber(e) {
    e.preventDefault()
    console.log(e)

    if (["0","1","2","3","4","5","6","7","8","9"].indexOf(e.key) != -1) {
        document.getElementById('numero').value +=  e.key
    }
    // document.getElementById('numero').value = e.target.value.replace(/[a-zA-z]/g, '')

}