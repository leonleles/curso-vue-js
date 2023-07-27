new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Clicou botão')
        },
        eventoKeydown(e) {
            this.valor = e.target.value
        },
        eventoKeydownEnter(e) {
            this.valor = e.target.value
        }
    }
})