<script setup>
import { features } from "../data/data";
</script>
<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-title mb-6">
        <h4 class="text-info">Our Services</h4>
        <h2>We Are Specialized in the Following Services</h2>
        <p class="mb-6">{{ features.description }}</p>
      </div>

      <div class="row justify-content-center">
        <div class="col-xl-10 d-flex align-items-center order-2 order-lg-1">
          <div class="content d-flex flex-column justify-content-center">
            <div class="row justify-content-center">
              <div
                class="col-md-5 m-3 icon-box p-5 shadow"
                data-aos="fade-up"
                v-for="(feature, index) in features.list"
                :key="index"
              >
                <i :class="feature.icon_class"></i>
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End App Features Section -->
</template>

<style scoped>
.features {
  background-color: azure;
  padding: 40px;
}
</style>
