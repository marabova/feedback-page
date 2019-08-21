import Chart from 'chart.js';

const ratingChart = data => {
  new Chart(document.getElementById('bar-chart'), {
    type: 'horizontalBar',
    data: {
      labels: ['*****', '****', '***', '**', '*'],
      datasets: [
        {
          label: 'Number of ratings',
          backgroundColor: '#ffce00',
          data: data,
        },
      ],
    },
    options: {
      legend: {
        display: true,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            categoryPercentage: 1.0,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: true,
        text: "See customer's rating",
      },
    },
    showTooltips: false,
  });
};

export default ratingChart;
