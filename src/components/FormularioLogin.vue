<template>
  <b-container fluid >
    <b-row class="formulario">
      <b-col cols="12" sm="12">
        <form novalidate="true">
          <h1>Ingresar</h1>
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

          <div>
            <b-button block variant="primary" type="Submit" @click.prevent="Submit" >Ingresar</b-button>
            <br />
          </div>

          <div>
            <br/>
            <b-link to="/signup">¿No se ha registrado?, ingrese aquí</b-link>
            <br>
            <b-link to="/recoverpassword"
              >¿Ha olvidado la contraseña?, ingrese aquí
            </b-link>
          </div>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase";
export default {
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$swal('Usuario logeado', '','success');
            this.$router.replace("Home");
          },
          () => {
            this.$swal('Usuario/Contraseña Incorrecta', '','error');
          }
        );
    },
  },
};
</script>

<style scoped>
.formulario {

  width: 500px;
  padding: 30px 30px;
  background-color: #fefacc;
}

a {
    text-decoration: none;
    color: black;
}


</style>