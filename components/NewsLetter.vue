<template>
    <b-container fluid class="mt-3 p-3 bg-light text-center fixed-bottom">
      <h3 class="text-center">Inscreva-se para receber nossas ofertas e promoções</h3>
      <b-form class="form-inline d-flex justify-content-center">
        <b-form-input type="email" placeholder="Seu email aqui" class="mx-3 my-2" />
        <b-form-input
          type="text"
          placeholder="Seu número de Whatsapp aqui"
          class="mx-3 my-2"
        />
        <b-button variant="danger">Inscreva-se</b-button>
      </b-form>
    </b-container>
  </template>
  <style>
  .fixed-bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  </style>