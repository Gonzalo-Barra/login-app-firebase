<template>
  <b-container fluid>
    <b-row class="formulario">
      <b-col cols="12" sm="12">
        <div class="home">
          <h1>Welcome home</h1>
          <img src="http://placeimg.com/640/480/tech" alt="" />
          <br />
          <br />
          <logout></logout>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import LogoutButton from "@/components/LogoutButton.vue";

export default {
  name: "Home",
  components: {
    logout: LogoutButton,
  },
};
</script>
<style scoped>
.home {
  padding: 20px 20px;
  border: black 0.1px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  box-shadow: -1px 10px 19px -5px rgba(0, 0, 0, 0.79);
  background-color: white;
}
</style>