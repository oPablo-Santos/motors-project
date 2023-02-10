<template>
  <b-form>
    <b-form-group label="Número do Cartão" label-for="card-number">
      <b-form-input id="card-number" type="text" />
    </b-form-group>

    <b-form-group label="Nome do Titular" label-for="card-holder-name">
      <b-form-input id="card-holder-name" type="text" />
    </b-form-group>

    <b-form-group label="Data de Vencimento" label-for="card-expiration-date">
      <b-form-input id="card-expiration-date" type="text" />
    </b-form-group>

    <b-form-group label="Código de Segurança" label-for="card-security-code">
      <b-form-input id="card-security-code" type="text" />
    </b-form-group>

    <b-button type="submit">Finalizar Compra</b-button>
  </b-form>
</template>

<script>
export default {
  name: "Payment",
};
</script>
