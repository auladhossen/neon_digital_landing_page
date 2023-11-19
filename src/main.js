import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faClock,
  faArrowTurnUp,
  faEnvelope,
  faLocationDot,
  faMobilePhone,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUser,
  faClock,
  faEnvelope,
  faArrowTurnUp,
  faLocationDot,
  faMobilePhone,
  faPhone
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
