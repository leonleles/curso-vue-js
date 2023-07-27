new Vue({
  el: "#desafio",
  data: {
    nome: "Leonardo",
    idade: 1,
    imageSRC: "https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  methods: {
    idade3x: function () {
      return this.idade * 3;
    },
    numberRandom: function () {
      return Math.random();
    },
  },
});
