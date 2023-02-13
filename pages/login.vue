<template>
  <div>
    <b-container class="login-container">
      <b-row>
        <b-col md="6" class="mx-auto">
          <b-card>
            <b-card-header>
              <h3>Login</h3>
            </b-card-header>
            <b-card-body>
              <b-form @submit="login">
                <b-form-group label="Email" label-for="email">
                  <b-form-input id="email" v-model="email" type="email" required />
                </b-form-group>
                <b-form-group label="Senha" label-for="password">
                  <b-form-input
                    id="password"
                    v-model="password"
                    type="password"
                    required
                  />
                </b-form-group>
                <b-button type="submit" variant="primary"> Entrar </b-button>
              </b-form>
              <hr />
              <p><a href="/register">Cadastrar-se</a></p>
            </b-card-body>
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
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (email === "admin@email.com" && password === "admin123") {
        localStorage.setItem("user", email);
        localStorage.setItem("userRole", "admin");
        this.$router.push("/");
      } else {
        localStorage.setItem("user", email);
        localStorage.setItem("userRole", "user");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.login-container {
  padding-top: 50px;
}
</style>
