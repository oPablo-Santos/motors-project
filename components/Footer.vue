<template>
  <footer id="footer">
    <div class="container d-flex justify-content-between align-items-center">
      <img src="../static/logotipo.jpeg" alt="Logotipo" />
      <div class="text-white">
        <h1>FW Motors &copy; 2023</h1>
        <p>Av. Rangel Pestana | Cep: 11111-222</p>
        <div class="d-flex">
        <p>
          <a href="https://web.whatsapp.com">
            <img id="wpp"
              src="../static/face.png"
              alt="facebook-icon"
            />
            11 1234-4321 </a>
        </p>
        <p>
          <a href="https://web.whatsapp.com">
            <img id="wpp"
              src="../static/insta.png"
              alt="Instagram-icon"
            />
            11 1234-4321 </a>
        </p>
        <p>
          <a href="https://web.whatsapp.com">
            <img id="wpp"
              src="../static/wap.png"
              alt="whatsapp-icon"
            />
            11 1234-4321 </a>
        </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  height: 150px;
  background-color: #000000;
  color: #ffffff;
  bottom: 0;
  width: 100%;
}

img {
  width: 20%;
}

#wpp {
  width: 10%;
}
</style>
