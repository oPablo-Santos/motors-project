<template>
  <div>
    <template v-if="isLoggedIn">
      <b-card class="my-5">
        <b-card-header> Controle de Usuário </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group label="Nome" label-for="name-input">
              <b-form-input id="name-input" v-model="user.name"></b-form-input>
            </b-form-group>
            <b-form-group label="Foto" label-for="photo-input">
              <b-form-file id="photo-input" v-model="user.photo"></b-form-file>
            </b-form-group>
            <b-form-group label="E-mail" label-for="email-input">
              <b-form-input
                id="email-input"
                type="email"
                v-model="user.email"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Senha" label-for="password-input">
              <b-form-input
                id="password-input"
                type="password"
                v-model="user.password"
              ></b-form-input>
            </b-form-group>
            <b-button variant="primary">Salvar Alterações</b-button>
          </b-form>
        </b-card-body>
        <b-card-footer v-if="isAdmin"> Você é um administrador </b-card-footer>
      </b-card>
    </template>
    <template v-else>
      <b-alert variant="danger" show>
        Você precisa estar logado para acessar esta página. Por favor, faça login
        <b-link to="/login">aqui</b-link>.
      </b-alert>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        photo: "",
        email: "",
        password: "",
      },
      isLoggedIn: true,
    };
  },
  mounted() {
    // Verifica se o usuário está logado
    if (localStorage.getItem("user")) {
      this.isLoggedIn = true;
    } else {
      this.$router.push("/login");
    }
  },
  computed: {
    isAdmin() {
      return localStorage.getItem("userRole") === "admin";
    },
  },
};
</script>
