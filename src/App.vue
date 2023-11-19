<script setup>
import FeatureSection from "./components/FeatureSection.vue";
import CallToActionSection from "./components/CallToActionSection.vue";
import HeroSection from "./components/HeroSection.vue";
import Pricing from "./components/Pricing.vue";

function scrollToSection(sectionId) {
  console.log("sectionId", sectionId);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <div id="app">
    <button @click="scrollToTop" class="scroll-to-top">
      <font-awesome-icon icon="fa-solid fa-arrow-turn-up" class="icon" />
    </button>

    <nav class="fixed-top header-transparent">
      <div class="logo" @click="scrollToSection('hero')">
        <img
          src="https://neondigitalsolution.com/wp-content/uploads/2023/09/Untitled-design-1-e1696368663294-300x127.png"
          alt="Business Logo"
        />
      </div>
      <ul class="menu">
        <li><a @click="scrollToSection('hero')">Home</a></li>
        <li><a @click="scrollToSection('features')">Services</a></li>
        <li><a @click="scrollToSection('pricing')">Pricing</a></li>
        <li><a @click="scrollToSection('contact')">Contact</a></li>
        <li><a @click="scrollToSection('blog')">Blog</a></li>
      </ul>
    </nav>

    <HeroSection />
    <FeatureSection />
    <Pricing />
    <CallToActionSection />
  </div>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
}

.scroll-to-top:hover {
  background-color: #2980b9;
}

.logo {
  cursor: pointer;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo img {
  max-height: 40px;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

body {
  /* margin: 0;
  font-family: "Arial", sans-serif; */
  scroll-behavior: smooth;
}

/* #app {
  text-align: center;
  padding: 20px;
} */

nav {
  /* background-color: #3498db; */
  color: #fff;
  padding: 10px;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.menu li {
  margin-right: 40px;
}

.menu a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
}
</style>
