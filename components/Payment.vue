<template>
  <div class="d-flex justify-content-center">
    <div class="card w-50">
      <div class="card-body">
        <h5 class="card-title text-center">Informações de Pagamento</h5>
        <form>
          <div class="form-group">
            <label for="nome-titular">Nome do Titular</label>
            <input type="text" class="form-control" id="nome-titular" />
          </div>
          <div class="form-group">
            <label for="numero-cartao">Número do Cartão</label>
            <input type="text" class="form-control" id="numero-cartao" />
          </div>
          <div class="form-group">
            <label for="validade">Validade</label>
            <input type="text" class="form-control" id="validade" />
          </div>
          <div class="form-group">
            <label for="cvv">CVV</label>
            <input type="text" class="form-control" id="cvv" />
          </div>
        </form>
        <h5 class="card-title text-center">Valor Total</h5>
        <p class="text-center">R$ {{ valorTotal }}</p>
        <h5 class="card-title text-center">Valor do Frete</h5>
        <p class="text-center">R$ {{ valorFrete }}</p>
        <hr />
        <h5 class="card-title text-center">Valor Total com Frete</h5>
        <p class="text-center">R$ {{ valorTotalComFrete }}</p>
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-danger mt-3">Finalizar Compra</button>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <router-link :to="{ path: '/' }" class="btn btn-primary">Voltar</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valorTotal: 129.99,
      valorFrete: 30.00,
    };
  },
  computed: {
    valorTotalComFrete() {
      return this.valorTotal + this.valorFrete;
    },
  },
};
</script>
