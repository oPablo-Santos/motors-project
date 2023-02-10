<template>
  <div>
    <b-container class="register-container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <b-form @submit="registerUser">
            <b-form-group label="Nome Completo:" label-for="full-name">
              <b-form-input id="full-name" v-model="fullName" type="text" required />
            </b-form-group>
            <b-form-group label="Email:" label-for="email">
              <b-form-input id="email" v-model="email" type="email" required />
            </b-form-group>
            <b-form-group label="Senha:" label-for="password">
              <b-form-input id="password" v-model="password" type="password" required />
            </b-form-group>
            <b-form-group label="Contato:" label-for="contact">
              <b-form-input id="contact" v-model="contact" type="text" required />
            </b-form-group>
            <b-button type="submit" variant="primary"> Cadastrar </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      contact: "",
    };
  },
  methods: {
    registerUser() {
      // Enviar as informações para o servidor para realizar o cadastro do usuário
    },
  },
};
</script>
<style>
.register-container {
  padding-top: 20px;
}
</style>
