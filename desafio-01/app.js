new Vue({
    el: '#desafio',
    data : {
        nome : 'Roberto',
        idade : 33,
        imagem : '//vuejs.org/images/logo.png'
    }, methods : {
        randomico: function(){
            return Math.random()
        },
        calcularIdade : function () {
            return this.idade * 3;
        }
    }

})