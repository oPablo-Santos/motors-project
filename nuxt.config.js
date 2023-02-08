export default {
  layout: {
    default: "default",
    error: "error",
  },
  head: {
    title: "FWmotors - Loja de Peças para Carros Mitsubishi",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Encontre as melhores peças para seu carro Mitsubishi na FWmotors. Oferecemos uma ampla seleção de peças de alta qualidade, com entrega rápida e pagamento seguro.",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "peças para carro Mitsubishi, venda de peças para carro, peças de carro Mitsubishi, compra de peças para carro, FWmotors",
      },
      { hid: "robots", name: "robots", content: "index, follow" },
      { hid: "googlebot", name: "googlebot", content: "index, follow" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logotipo.jpeg" }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [],

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/pwa"],

  pwa: {
    manifest: {
      lang: "en",
      name: "FWmotors",
      short_name: "FWmotors",
      start_url: "/",
      display: "standalone",
      theme_color: "#000000",
      background_color: "#000000",
    },
  },

  build: {},
};
