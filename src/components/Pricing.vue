<script setup>
import { pricing_plans } from "../data/data";
</script>
<template>
  <section id="pricing" class="pricing">
    <div class="container">
      <div class="section-title">
        <h2 class="text-info">Pricing</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div class="row justify-content-center">
        <div
          class="col-lg-3 box shadow mx-3 py-3"
          data-aos="fade-right"
          v-for="(plan, index) in pricing_plans"
          :key="index"
        >
          <h3>{{ plan.name }}</h3>
          <h4>{{ plan.price }}<span>per month</span></h4>
          <ul>
            <li v-for="(feature, index) in plan.features" :key="index">
              <i class="bx bx-check"></i> {{ feature }}
            </li>
          </ul>
          <button type="submit" class="btn btn-info my-5">Get Started</button>
        </div>
      </div>
    </div>
  </section>
  <!-- End Pricing Section -->
</template>

<style scoped>
.pricing {
  padding: 40px;
}
</style>
