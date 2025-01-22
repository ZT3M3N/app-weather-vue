<script setup>
import { reactive, ref } from "vue";
import Alert from "./Alert.vue"

const search = reactive({
    city: "",
    country: "",
});

const error = ref("");

const emit = defineEmits(["get-weather"]);

const countries = [
    { code: "US", name: "Estados Unidos" },
    { code: "MX", name: "México" },
    { code: "AR", name: "Argentina" },
    { code: "CO", name: "Colombia" },
    { code: "CR", name: "Costa Rica" },
    { code: "ES", name: "España" },
    { code: "PE", name: "Perú" },
];

const checkWeather = () => {
    if (Object.values(search).includes("")) {
        error.value = "Todos los campos son obligatorios";
        return;
    }
    error.value = "";
    emit("get-weather", search);

};

</script>
<template>
    <form class="formulario" @submit.prevent="checkWeather">
        <Alert v-if="error">{{ error }}</Alert>
        <div class="campo">
            <label for="ciudad">Ciudad</label>
            <input type="text" id="ciudad" placeholder="Ingresa una ciudad" v-model="search.city">
        </div>

        <div class="campo">
            <label for="pais">País</label>
            <select id="pais" v-model="search.country">
                <option value="" class="campo">--Seleccione--</option>
                <option v-for="country in countries" :value="country.code">{{ country.name }}</option>
            </select>
        </div>

        <input type="submit" value="Consultar clima">
    </form>
</template>
