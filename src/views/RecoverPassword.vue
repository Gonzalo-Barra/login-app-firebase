<template>
  <div class="recover-password">
    <b-container>
      <b-row>
        <b-col sm="12" xs="12" md="12" lg="12">
          <formulario-recover-password></formulario-recover-password>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FormularioRecoverPassword from "../components/FormularioRecoverPassword.vue";

export default {
  name: "RecoverPassword",
  components: {
    "formulario-recover-password": FormularioRecoverPassword,
  },
};
</script>

<style scoped>
.recover-password {
  border: black 0.1px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  box-shadow: -1px 10px 19px -5px rgba(0, 0, 0, 0.79);
  
}
</style>
