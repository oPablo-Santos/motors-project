<template>
  <div id="nav">
    <router-link id="logo_url" NuxtLink to="/">
      <img id="logo" src="../static/logotipo.jpeg" alt="logotipo fwmotors" />
    </router-link>
    <router-link to="/"> Home </router-link>
    <router-link to="/about"> Sobre nós </router-link>
    <router-link to="/myCart">
      <b-icon icon="BIconCart4" variant="danger"></b-icon> Meu Carrinho
    </router-link>

    <div>
      <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
        <template #button-content>
          <b-icon id="icon" icon="BIconCollection" variant="danger"></b-icon>
          <span class="text-white"> Categorias </span>
          <span class="sr-only"> </span>
        </template>
        <b-dropdown-item NuxtLink to="/produtos"> Todos </b-dropdown-item>
        <b-dropdown-item NuxtLink to="/categories/1"> Rodas </b-dropdown-item>
        <b-dropdown-item NuxtLink to="/categories/2"> Transmissão</b-dropdown-item>
        <b-dropdown-item NuxtLink to="/categories/3"> Aerofólios </b-dropdown-item>
      </b-dropdown>
    </div>
    <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button variant="outline-danger" class="my-2 my-sm-0" type="submit"
        >Search</b-button
      >
    </b-nav-form>
    <div>
      <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
        <template #button-content>
          <b-icon icon="BIconPersonCircle" variant="danger" />
        </template>
        <b-dropdown-item NuxtLink to="/user"> Usuário </b-dropdown-item>
        <b-dropdown-item v-if="loggedIn && admin" NuxtLink to="/dash">
          Dashboard
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>
<script>
import { BIcon, BIconCart4, BIconCollection, BIconPersonCircle } from "bootstrap-vue";

export default {
  components: {
    BIcon,
    BIconCart4,
    BIconCollection,
    BIconPersonCircle,
  },
  computed: {
    userIsAdmin() {
      return this.$store.getters["auth/userIsAdmin"];
    },
    userIsLoggedIn() {
      return this.$store.getters["auth/userIsLoggedIn"];
    },
  },
};
</script>
<style scoped>
#nav {
  background-color: #0f0f0f;
  border-bottom: 6px solid #ff0000;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#nav #logo_url {
  margin: auto;
  margin-left: 0;
}
#logo {
  width: 150px;
}
#nav a {
  color: #ffffff;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}
#nav a:hover {
  color: #ff0000;
}

@media only screen and (max-width: 767px) {
  #nav {
    flex-direction: column;
    align-items: center;
  }
  #logo {
    width: 100px;
  }
  #nav a {
    margin: 6px;
  }
}
</style>
