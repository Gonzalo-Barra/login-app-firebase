<template>
  <div>
    <b-button block variant="primary" @click="logout">Cerrar Sesion</b-button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "logout-component",
  // props: {},
  data: function () {
    return {};
  },
  methods: {
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$swal('Desconectado', '','success');
          this.$router.replace("/");
        });
    },
  },
};
</script>

<style scoped>
</style>