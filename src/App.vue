<script setup>
import Form from "./components/Form.vue";
import useWeather from "./composables/useWeather.js";
import Weather from "./components/Weather.vue";
import Spinner from "./components/Spinner.vue";
import Alert from "./components/Alert.vue";

const { getWeather, weather, showWeather, loading, error } = useWeather();

</script>

<template>
  <h1 class="titulo">Buscador de Clima</h1>
  <div class="contenedor buscador-clima">
    <Form @get-weather="getWeather" />
    <Spinner v-if="loading" />
    <Alert v-if="error">{{ error }}</Alert>
    <Weather v-if="showWeather" :weather="weather" />
  </div>
</template>
