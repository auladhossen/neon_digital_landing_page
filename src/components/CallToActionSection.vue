<template>
  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2 class="text-info">Contact</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-6 info">
              <font-awesome-icon icon="fa-solid fa-location-dot" class="icon" />
              <h4>Address</h4>
              <p>{{ contact.address }}</p>
            </div>
            <div class="col-lg-6 info">
              <font-awesome-icon icon="fa-solid fa-phone" class="icon" />
              <h4>Call Us</h4>
              <p>{{ contact.phone }}</p>
            </div>
            <div class="col-lg-6 info">
              <font-awesome-icon icon="fa-solid fa-envelope" class="icon" />
              <h4>Email Us</h4>
              <p>{{ contact.phone }}</p>
            </div>
            <div class="col-lg-6 info">
              <font-awesome-icon icon="fa-solid fa-clock" class="icon" />
              <h4>Working Hours</h4>
              <p>{{ contact.working_hours }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            class="php-email-form"
            data-aos="fade-up"
          >
            <div class="form-group">
              <input
                placeholder="Your Name"
                type="text"
                name="name"
                class="form-control"
                id="name"
                required
              />
            </div>
            <div class="form-group mt-3">
              <input
                placeholder="Your Email"
                type="email"
                class="form-control"
                name="email"
                id="email"
                required
              />
            </div>
            <div class="form-group mt-3">
              <input
                placeholder="Subject"
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                required
              />
            </div>
            <div class="form-group mt-3">
              <textarea
                placeholder="Message"
                class="form-control"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>

            <div class="text-center">
              <button type="submit" class="btn btn-info">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->
</template>
<script setup>
import { contact } from "../data/data";
</script>

<style scoped>
.contact {
  background-color: azure;
  color: #383838;
  padding: 40px;
  text-align: center;
}
.icon {
  color: #8a8aad;
  font-size: 30px;
  margin-bottom: 7px;
}
</style>
