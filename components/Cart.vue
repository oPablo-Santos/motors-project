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
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="removeItem(item)">
              Remover
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Total: {{ total }}</h3>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      items: [
        { id: 1, name: "Produto 1", price: 10, quantity: 1 },
        { id: 2, name: "Produto 2", price: 20, quantity: 2 },
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
