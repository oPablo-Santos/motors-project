<template>
  <div>
    <b-container class="products-container">
      <b-row>
        <b-col md="4" v-for="product in products">
          <b-card class="product-card">
            <img :src="product.img" class="card-img-top" :alt="product.name" />
            <b-card-body>
              <h5 class="product-name">{{ product.name }}</h5>
              <p class="product-description">{{ product.description }}</p>
              <b-button variant="primary" @click="addToCart(product)"
                >Adicionar ao carrinho</b-button
              >
            </b-card-body>
            <b-card-footer class="text-muted">R$ {{ product.price }}</b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Produto 1",
          description: "Descrição do produto 1",
          price: 199.99,
          img: "https://http2.mlstatic.com/D_NQ_NP_748461-MLB40785850033_022020-O.jpg",
        },
        {
          name: "Produto 2",
          description: "Descrição do produto 2",
          price: 299.99,
          img: "https://http2.mlstatic.com/D_NQ_NP_748461-MLB40785850033_022020-O.jpg",
        },
        {
          name: "Produto 3",
          description: "Descrição do produto 3",
          price: 149.99,
          img: "https://http2.mlstatic.com/D_NQ_NP_748461-MLB40785850033_022020-O.jpg",
        },
        {
          name: "Produto 3",
          description: "Descrição do produto 3",
          price: 149.99,
          img: "https://http2.mlstatic.com/D_NQ_NP_748461-MLB40785850033_022020-O.jpg",
        },
        {
          name: "Produto 3",
          description: "Descrição do produto 3",
          price: 149.99,
          img: "https://http2.mlstatic.com/D_NQ_NP_748461-MLB40785850033_022020-O.jpg",
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      // Adicionar o produto ao carrinho de compras
    },
  },
};
</script>

<style>
.product-card {
  text-align: center;
  margin-bottom: 20px;
}

.product-name {
  font-weight: bold;
}

.product-description {
  font-size: 14px;
}
</style>
