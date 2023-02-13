<template>
  <div>
    <b-container class="products-container">
      <b-row>
        <b-col md="4" v-for="product in products" v-if="product.category === 'aerofolio'">
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
      <b-row>
        <b-col md="4" v-for="product in products" v-if="product.category === 'rodas'">
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
      <b-row>
        <b-col
          md="4"
          v-for="product in products"
          v-if="product.category === 'transmissão'"
        >
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
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await this.$axios.get("/products");
        this.products = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
