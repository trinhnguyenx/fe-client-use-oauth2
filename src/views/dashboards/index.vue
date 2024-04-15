<template>
  <div v-if="userDataBack">
    <h1>Xin chào {{ userDataBack.fullname }}</h1>
    <h2>Email: {{ userDataBack.email }}</h2>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const userDataBack = ref(null);

const backCodeToServer = async (token) => {
  const secret_id = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3MTI3NDA4MjcsImV4cCI6MTcxMzM0NTYyN30.O5jFyCqOcFEXw2kqmdTrMaeJHf4PPTP0tixg8V-tz5s";
  try {
    const response = await axios.post(
      "http://localhost:3000/authorzation/decoded",
      { token: token, secret_id: secret_id }
    );
    userDataBack.value = response.data;
    console.log(userDataBack.value);
  } catch (error) {
    console.error(error);
  }
};

const handleAuthorizationCode = () => {
  const tokenQuery = route.query.code;
  if (tokenQuery) {
    console.log(tokenQuery);
    backCodeToServer(tokenQuery);
  }
};

onMounted(() => {
  handleAuthorizationCode()
});

watchEffect(() => {
  handleAuthorizationCode();
});
</script>
