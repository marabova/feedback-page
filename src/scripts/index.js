import "normalize.css";
import "../styles/style.scss";
import displayComments from "./utils/displayComments";
import getRating from "./utils/getRating";
import Form from "./components/form";
import { getLocalStorage } from "./utils/getLocalStorage";

!getLocalStorage() ? localStorage.setItem("feedback", "[]") : "";

window.addEventListener("DOMContentLoaded", event => {
  new Form(document.querySelector("#feedback-form"));

  getRating();
  displayComments();
});
