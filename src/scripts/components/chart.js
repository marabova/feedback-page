import Chart from "chart.js";

const ratingChart = data => {
  new Chart(document.getElementById("bar-chart"), {
    type: "horizontalBar",
    data: {
      labels: ["*****", "****", "***", "**", "*"],
      datasets: [
        {
          label: "Feedback rating",
          backgroundColor: "#ffce00",
          data: data
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      },
      title: {
        display: true,
        text: "See customer's rating"
      }
    },
    showTooltips: false,
    plugins: {
      datalabels: {
        color: "#fff",
        align: "center",
        anchor: "center",
        font: { weight: "bold" }
      }
    }
  });
};

export default ratingChart;
