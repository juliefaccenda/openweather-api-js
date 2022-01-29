<template>
  <div class="principal">
    <header>
      <Logo />
    </header>
    <main>
      <section id="list-of-cities">
        <div class="container">
          <div class="row">
            <CityBox cityName="Nuuk" cityCountry="GL" />
            <CityBox cityName="Urubici" cityCountry="BR" />
            <CityBox cityName="Nairobi" cityCountry="KE" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  layout: "default",
};
</script>
