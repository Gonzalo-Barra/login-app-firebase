<template>
  <b-container fluid>
    <b-row class="recover-password">
      <b-col cols="12" sm="12">
        <form  novalidate="true">
          <h1>Recuperar Contraseña</h1>
          <br />
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


          <div>
            <br />
            <b-button v-model="correo" block variant="primary" type="submit" @click.prevent="sendEmail">Recuperar Contraseña</b-button>
            <br />
            <br />
            <b-link to="/">¿No se ha registrado?, ingrese aquí</b-link>
          </div>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "FormularioRecoverPassword",
  data: function () {
    return {
      email: "",
    };
  },

  methods: {

    sendEmail() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(
          () => {
            this.$swal("Correo enviado", "", "success");
            this.$router.replace("/");
          },
          () => {
            this.$swal("Usuario no existe", "", "error");
          }
        );
    },
  },
};
</script>

<style >
.recover-password {
  padding: 30px 0px;
  background-color: #fdf9c4;
  border-radius: 7px;
  padding: 20px 20px;

}

a {
  text-decoration: none;
  color: black;
}
</style>