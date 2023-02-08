<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-danger text-center my-5">Erro</h1>
        <p class="text-center">
          Ocorreu um erro ao carregar esta página. Por favor, recarregue a página.
        </p>
        <b-button class="btn btn-danger btn-lg mx-auto d-block" @click="reloadPage">
          Recarregar Página
        </b-button>
        <hr />
        <b-button class="btn btn-danger btn-lg mx-auto d-block"
          ><a href="/"> Voltar para home</a>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    reloadPage() {
      location.reload();
    },
  },
};
</script>

<style scoped>
.btn {
  margin-top: 30px;
}
a {
  text-decoration: none;
  color: white;
}

a:hover {
  color: white;
}
</style>
