<template>
  <b-container fluid>
    <b-row class="formulario">
      <b-col cols="12" sm="12">
        <form novalidate="true">
          <h1>Registro</h1>
          <p>
            <b-form-group>
              <b-input-group size="sm">
                <b-input-group-prepend is-text>
                  <b-icon icon="envelope"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  id="email-group"
                  name="email"
                  type="email"
                  v-model="email"
                  placeholder="ingrese su correo"
                ></b-form-input>
              </b-input-group>
            </b-form-group>
          </p>

          <p>
            <b-form-group>
              <b-input-group size="sm">
                <b-input-group-prepend is-text>
                  <b-icon icon="key"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  id="password-group"
                  name="password"
                  type="password"
                  v-model="password"
                  placeholder="Ingrese-password"
                ></b-form-input>
              </b-input-group>
            </b-form-group>
          </p>
      <b-button block variant="primary" type="submit" @click.prevent="SignUp" >Registrarse</b-button>

          <br>
          <br>
          <router-link to="/">Ya se ha registrado?. login aqui</router-link>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "FormularioSignup",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    SignUp: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
             this.$swal('Usuario creado', '','success');
            this.$router.replace("/");
          },
          () => {
            this.$swal('Ya existe un usuario con ese correo creado', '','error');
          }
        );
    },
  },
};
</script>

<style>
.formulario {
  width: 500px;
  background-color: #fdf9c4;
  border-radius: 7px;
  padding: 20px 20px;

}

a {
    text-decoration: none;
    color: black;
}
</style>