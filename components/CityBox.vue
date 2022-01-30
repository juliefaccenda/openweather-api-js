<template>
  <div class="col mobileChangeOrder">
    <div class="individual-block">
      <div class="top-infos">
        <span>{{ city }}, {{ country }}</span>
      </div>
      <div class="lowInfos">
        <div class="temperature">
          <div class="loading" v-show="loading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
              class="uil-ring-alt"
            >
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="none"
                class="bk"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgba(255,255,255,0)"
                fill="none"
                stroke-width="10"
                stroke-linecap="round"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#737c84"
                fill="none"
                stroke-width="6"
                stroke-linecap="round"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  dur="1.5s"
                  repeatCount="indefinite"
                  from="0"
                  to="502"
                />
                <animate
                  attributeName="stroke-dasharray"
                  dur="1.5s"
                  repeatCount="indefinite"
                  values="188.25 62.75;1 250;188.25 62.75"
                />
              </circle>
            </svg>
          </div>
          <div class="danger" v-show="error">
            <span>Something went wrong</span>
            <button @click="retry">Try Again</button>
          </div>
          <div class="sucess" v-show="!loading && !error">
            <span class="low-temp" v-if="temperature <= 5">{{
              temperature + "&deg;"
            }}</span>
            <span
              class="medium-temp"
              v-else-if="temperature > 5 && temperature <= 25"
              >{{ temperature + "&deg;" }}</span
            >
            <span class="high-temp" v-else>{{ temperature + "&deg;" }}</span>
          </div>
        </div>
        <div class="sucess" v-show="!loading && !error">
          <div class="extra-infos-temperature">
            <div class="row extrasInfos">
              <div class="col no-gutters">
                <p>humidity</p>
                <span>{{ humidity }}<small>%</small></span>
              </div>
              <div class="col no-gutters">
                <p>pressure</p>
                <span>{{ pressure }}<small>hPa</small></span>
              </div>
            </div>
            <div class="updated">
              Updated at <span>{{ updateAt }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
  // atualiza a api a cada 10min
  created() {
    setInterval(this.getData, 600000);
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
          this.timestamp = Date.now;
          this.loading = false;
          this.error = false;
        })
        .catch(() => {
          this.loading = false;
          this.error = true;
        });
    },

    retry() {
      this.loading = true;
      this.error = false;
      this.getData();
    },
  },
};
</script>
