<template>
  <div class="container">
    <h2>Carrinho de Compras</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>R$ {{ item.price.toFixed(2) }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="removeItem(item)">
              Remover
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Total: R$ {{ total.toFixed(2) }}</h3>
    <button class="btn btn-primary">
      <a href="/pay">Finalizar compra</a>
    </button>
    <button class="btn btn-secondary">
      <a href="/">Voltar</a>
    </button>
  </div>
</template>
<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}

table {
  width: 100%;
}

thead th {
  text-align: left;
}

button a {
  color: white;
  text-decoration: none;
}
</style>
<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      items: [
        { id: 1, name: "Produto 1", price: 10.99, quantity: 1 },
        { id: 2, name: "Produto 2", price: 20.49, quantity: 2 },
      ],
    };
  },
  computed: {
    total() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    addItem(item) {
      this.items.push(item);
    },
    removeItem(item) {
      this.items = this.items.filter((i) => i.id !== item.id);
    },
  },
};
</script>
