new Vue({
	el: '#desafio',
	data: {
		classeEfeito: '',
		classUser: '',
		classUser4: '',
		aplicarClassUser4: 'false'
	},
	methods: {
		iniciarEfeito() {
		this.classeEfeito = 'destaque'

		setInterval(() => {
			this.classeEfeito = 'encolher'
		}, 2000)
		},
		iniciarProgresso() {

		}
	}
})
