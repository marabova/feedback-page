import getRating from "../utils/getRating";
import writeSingleComment from "./comment";
import { getLocalStorage } from "../utils/getLocalStorage";

class Form {
  constructor(form) {
    this.form = form;
    this.attachEventListener(form);
  }

  attachEventListener(form) {
    if (form) {
      form.addEventListener("submit", this.handleSubmit.bind(this));
    }
  }

  updateFeedBackStore(data) {
    if (getLocalStorage()) {
      let storedFeedback = JSON.parse(getLocalStorage());
      data.id = storedFeedback.length + 1;
      storedFeedback.push(data);
      localStorage.setItem("feedback", JSON.stringify(storedFeedback));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {};

    const formData = new FormData(this.form);
    formData.forEach((value, key) => {
      data[key] = value;
    });

    this.updateFeedBackStore(data);

    getRating();
    writeSingleComment(data);
  }
}

export default Form;
