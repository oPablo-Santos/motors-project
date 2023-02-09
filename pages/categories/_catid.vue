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
      products: [
        {
          id: 1,
          name: "Roda 1",
          description: "Descrição da roda 1",
          price: 199.99,
          img: "https://www.example.com/img1.jpg",
        },
        {
          id: 1,
          name: "Roda 2",
          description: "Descrição da roda 2",
          price: 299.99,
          img: "https://www.example.com/img2.jpg",
        },
        {
          id: 1,
          name: "Roda 3",
          description: "Descrição da roda 3",
          price: 149.99,
          img: "https://www.example.com/img3.jpg",
        },
        {
          id: 2,
          name: "Transmissão 1",
          description: "Descrição da transmissão 1",
          price: 199.99,
          img: "https://www.example.com/img4.jpg",
        },
        {
          id: 2,
          name: "Transmissão 2",
          description: "Descrição da transmissão 2",
          price: 299.99,
          img: "https://www.example.com/img5.jpg",
        },
        {
          id: 2,
          name: "Transmissão 3",
          description: "Descrição da transmissão 3",
          price: 149.99,
          img: "https://www.example.com/img6.jpg",
        },
        {
          id: 3,
          name: "Aerofólio 1",
          description: "Descrição do aerofólio 1",
          price: 199.99,
          img: "https://www.example.com/img7.jpg",
        },
        {
          id: 3,
          name: "Aerofólio 2",
          description: "Descrição do aerofólio 2",
          price: 299.99,
          img: "https://www.example.com/img8.jpg",
        },
        {
          id: 3,
          name: "Aerofólio 3",
          description: "Descrição do aerofólio 3",
          price: 149.99,
          img: "https://www.example.com/img9.jpg",
        },
      ],
    };
  },
};
</script>
