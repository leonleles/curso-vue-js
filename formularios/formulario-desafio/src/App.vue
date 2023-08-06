<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" @submit.prevent="handleSubmit" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->

				<!-- Nome completo (Nome e Sobrenome) -->
				<Rotulo nome="Nome completo (Nome e Sobrenome)">
					<!-- <input type="text" v-model="nome"> -->
					<NomeSobrenome :nome="nome" :sobrenome="sobrenome" />
				</Rotulo>

				<!-- Email -->
				<Rotulo nome="Email">
					<input type="email" v-model="email">
				</Rotulo>
				
				<!-- Senha -->
				<Rotulo nome="Senha">
					<input type="password" v-model="senha">
				</Rotulo>

				<!-- Armazenar Dados? (Sim/Não) -->
				<Rotulo nome="Armazenar Dados? (Sim/Não)">
					<input type="checkbox" v-model="isArmazenarDados">
				</Rotulo>

				<button type="submit">Enviar</button>

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>

				<Rotulo nome="Nome completo (Nome e Sobrenome)">{{ nome }} {{ sobrenome }}</Rotulo>

				<!-- Email -->
				<Rotulo nome="Email">{{ email }}</Rotulo>
				
				<!-- Senha -->
				<Rotulo nome="Senha">{{ senha }}</Rotulo>

				<!-- Armazenar Dados? (Sim/Não) -->
				<Rotulo nome="Armazenar Dados? (Sim/Não)">{{ isArmazenarDados }}</Rotulo>

				<button @click.prevent="handleSubmit">Voltar</button>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import NomeSobrenome from './components/NomeSobrenome.vue'

export default {
  name: "app",
  components: { Rotulo, NomeSobrenome },
  data() {
	return {
		nome: '',
		sobrenome: '',
		email: '',
		senha: '',
		isArmazenarDados: false,
		enviado: false,
	}
  },
  methods: {
	handleSubmit() {
		this.enviado = !this.enviado
	}
  }
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
