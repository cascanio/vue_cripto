//Criação do objeto Vue

const aplicacao = new Vue ({
    el: '#main',    //define qual  elemento do HTML vai representar o objeto Vue
    data: {  //o atributo data define as propriedades da aplicação
        txtParaCripto: '',
        txtParaDescripto: '',
        msgErro: '',
        resultadoTitulo: '',
        resultadoTexto: '',
    },
    methods: {
        criptografar: function(event) {
            event.preventDefault();

            //se for > 0 definimos o titulo do box de mensagem o texto criptografado e apagamos a msg de erro
            if ( this.txtParaCripto.length > 0 ) {
                this.resultadoTitulo = "Texto criptografado";
                this.resultadoTexto = btoa(this.txtParaCripto) //função btoa do js para criptografar umt txt base64
                this.msgErro = "";
            } else { //se for < 0 apagamos o titulo do box de mensagem o texto cripto/descriptografado e definimos a msg de erro
                this.resultadoTitulo = "";
                this.resultadoTexto = "";
                this.msgErro = "Digite um texto para criptografar";
            }
        },

        verificaBase64: function(texto) {
            // definição do padrão para analisar se o texto é base64
            const regex = /^([A-Za-z0-9+/])*([A-Za-z0-9+/]|[A-Za-z0-9+/]=|[A-Za-z0-9+/]==)$/;
            return regex.test(texto) // uso da função .test do js para testar se o texto segue o padrão base64
        },

        descriptografar: function(event) {
            event.preventDefault();

            //chama o metodo verificaBase64 para ver se o txt digitado é um tt criptografado (base64)
            //e armazenamos na variável verificaBase64

            const verificaBase64 = this.verificaBase64(this.txtParaDescripto);

            //verifica se o txt digitado é base64 e se tem mais de 0 caracteres
            if (verificaBase64 && this.txtParaDescripto.length > 0) {
                this.resultadoTitulo = "Texto descriptografado"
                this.resultadoTexto = atob(this.txtParaDescripto);
                this.msgErro = ""
            } else {
                this.resultadoTitulo = "";
                this.resultadoTexto = "";
                this.msgErro = "Este não é um formato válido";
            }
        }
    }
    
})