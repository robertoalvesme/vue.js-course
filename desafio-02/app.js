new Vue({
    el: '#desafio',
    data: {
        valor: ''
    }, methods : {
        alerta(){
            alert('Exibindo alerta');
        },
        alterarValor(event){
            this.valor = event.target.value;
        }
    }
})