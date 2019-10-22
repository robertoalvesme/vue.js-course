new Vue({
    el: '#desafio',
    data : {
        nome : 'Roberto',
        idade : 33,
        imagem : '//vuejs.org/images/logo.png',
        contador: 0,
        x: 0,
        y: 0,
        titulo : 'Bem vindo',
        aplicarC1 : false,
        aplicarC2 : false,
        classes : 'c1',
        cor: 'red',
        borderColor: '#000000'
    }, methods : {
        randomico: function(){
            return Math.random()
        },
        calcularIdade : function () {
            return this.idade * 3;
        },
        somar(qtd, event){
            this.contador+= qtd;
        },
        mouseXY(event){
            // console.log(event);
            this.x = event.screenX;
            this.y = event.screenY;
        },
        enviar(){
            alert("Enviar formulário");
        },
        alertar(){
            alert("Salvando dados");
        }
    }, computed : {
        // Usamos computado quando queremos que uma variável só chame o metodo quando for alterada
        resultado(){
            return  this.contador > 10 ? "Maior do que 10" : "Menor que 10";
        },
        estilo(){
            return {
                c1 : this.aplicarC1,
                c2 : !this.aplicarC2
            }
        },
        meuEstilo(){
            return{
                backgroundColor : this.cor,
                color: this.borderColor
            }
        }
    }, watch : {
        // Usamos watch quando queremos verificar um valor antigo e um novo de uma variável já declarada... legal aqui para poder usar em combobox para chamar um ajax quando mudar o combo
        contador(antigo, novo){
            // console.log( antigo, novo );
            setTimeout( () => {
               this.contador = 0;
            }, 2000 );
        }
    }

})