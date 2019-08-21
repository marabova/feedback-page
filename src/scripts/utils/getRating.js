import ratingChart from "../components/chart";
import { getLocalStorage } from "../utils/getLocalStorage";

const getRating = () => {
  if (getLocalStorage()) {
    const ratings = new Array(5).fill(0);
    const storedFeedbackData = JSON.parse(getLocalStorage());

    storedFeedbackData.forEach(({ rating }) => {
      const ratingNum = Number(rating);
      ratings[ratingNum - 1] = ratings[ratingNum - 1] + 1;
    });

    ratingChart(ratings.reverse());
  }
};

export default getRating;
