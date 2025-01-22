import { ref, computed } from "vue";
import axios from "axios";

export default function useWeather() {
  const weather = ref({});
  const loading = ref(false);
  const error = ref("");
  const getWeather = async ({ city, country }) => {
    //Importar API key
    const key = import.meta.env.VITE_API_KEY;
    loading.value = true;
    weather.value = {};
    error.value = "";
    try {
      //Ontener latidud y longitud
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`;
      const { data } = await axios(url);
      const { lat, lon } = data[0];
      //Obtener el clima
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      const { data: result } = await axios(urlWeather);
      weather.value = result;
    } catch {
      error.value = "Ciudad no encontrada";
    } finally {
      loading.value = false;
    }
  };

  const showWeather = computed(() => {
    return Object.values(weather.value).length > 0;
  });

  const tempFormatting = (temp) => parseInt(temp - 273.15);

  return {
    getWeather,
    weather,
    showWeather,
    tempFormatting,
    loading,
    error,
  };
}
