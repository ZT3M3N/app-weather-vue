<script setup>
import useWeather from "../composables/useWeather.js";

const { tempFormatting } = useWeather();
defineProps({
    weather: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="resultado">
        <h2>Clima de: {{ weather.name }}</h2>
        <p class="actual">{{ tempFormatting(weather.main.temp) }}&deg;C</p>
        <div class="temperaturas">
            <p>Mín: {{ tempFormatting(weather.main.temp_min) }} <span>&deg;C</span></p>
            <p>Max: {{ tempFormatting(weather.main.temp_max) }} <span>&deg;C</span></p>
        </div>
    </div>
</template>
