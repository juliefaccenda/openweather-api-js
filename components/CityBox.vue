<template>
  <div class="col second-col">
    <div class="individual-block">
      <div class="top-infos">
        <span class="secondCity">{{ city }}, {{ country }}</span>
      </div>
      <div class="temperature secondloading">
        <div class="loading" v-show="loading"></div>
        <div class="danger" v-show="error">
          <span>Something went wrong</span>
          <button @click="retry">Try Again</button>
          </div>
        <span class="secondTemp low-temp" v-if="temperature <= 5">{{
          temperature
        }}</span>
        <span
          class="secondTemp medium-temp"
          v-else-if="temperature > 5 && temperature <= 25"
          >{{ temperature }}</span
        >
        <span class="secondTemp high-temp" v-else>{{ temperature }}</span>
      </div>
      <div class="extra-infos-temperature">
        <div class="row extrasInfos">
          <div class="col no-gutters">
            <p>humidity</p>
            <span class="secondHumidity">{{ humidity }}</span>
          </div>
          <div class="col no-gutters">
            <p>pressure</p>
            <span class="secondPressure">{{ pressure }}</span>
          </div>
        </div>
        <div class="updated">
          Updated at <span class="secondDt">{{ updateAt }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cityName", "cityCountry"],
  async beforeMount() {
    await this.getData();
  },
  data() {
    return {
      city: this.cityName,
      country: this.cityCountry,
      temperature: "",
      pressure: "",
      humidity: "",
      updateAt: "",
      loading: true,
      error: false,
    };
  },
  methods: {
    async getData() {
      const data = await this.$axios
        .$get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName},${this.cityCountry}&units=metric&appid=76bf9d701a655d8e1d5d7d7b6924839f`
        )
        .then((response) => {
          this.pressure = response.main.pressure;
          this.temperature = parseInt(`${response.main.temp}`, 10);
          this.humidity = response.main.humidity;
          this.updateAt = new Date(response.dt).toLocaleTimeString("en-US");
          this.loading = false;
          this.error = false;
        })
        .catch(() => {
          this.loading = false;
          this.error = true;
        });
    },
    async retry(){
      this.loading = true;
      this.error = false;
      await this.getData()
    }
  },
};
</script>

