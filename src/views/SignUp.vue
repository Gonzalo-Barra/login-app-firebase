<template>
  <div class="signup">
    <b-container>
      <b-row>
        <b-col sm="12" xs="12" md="12" lg="12">
          <formulario-signup></formulario-signup>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import formularioSignup from "@/components/FormularioSignup.vue";

export default {
  name: "SignUp",
  components: {
    "formulario-signup": formularioSignup,
  },
};
</script>

<style scoped>
.signup {
  border: black 0.1px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  box-shadow: -1px 10px 19px -5px rgba(0, 0, 0, 0.79);
}
</style>
