import { fetchData } from "./data-api.js";

export const setBarChart = async () => {
  const fontFace = new FontFace("DM Sans", "url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap)");
  const ctx = document.querySelector("#myChartJs");

  const { error, result } = await fetchData();

  const arrDay = result.map(({ day }) => day);
  const amountDay = result.map(({ amount }) => amount);
  const totalAmount = amountDay.reduce((acum, num) => acum + num, 0);

  const loquesea = toolTipItems => {
    return "";
  };

  let opts = {
    type: "bar",
    data: {
      labels: arrDay,
      datasets: [
        {
          label: "$",
          data: amountDay,
          backgroundColor: ["rgb(236, 119, 95)", "rgb(236, 119, 95)", "rgb(236, 119, 95)", "rgb(236, 119, 95)", "rgb(236, 119, 95)", "rgb(236, 119, 95)"],
          borderColor: ["rgb(236, 119, 95)", "rgb(236, 119, 95)", "rgb(236, 119, 95)", "rgb(236, 119, 95)", "rgb(236, 119, 95)", "rgb(236, 119, 95)"],
          borderWidth: 1,
          borderRadius: 5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          display: false,
          // beginAtZero: true,
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          bodyFont: {
            size: 13,
            // weight: "bold",
            family: fontFace.family,
          },
          backgroundColor: "rgb(56, 35, 20)",
          yAlign: "bottom",
          displayColors: false,
          usePointStyle: true,
          callbacks: {
            title: loquesea,
          },
        },
      },
      elements: {
        bar: {
          hoverBackgroundColor: "rgb(118, 181, 188)",
          hoverBorderColor: "rgb(118, 181, 188)",
        },
      },
      layout: {
        padding: {
          top: 30,
        },
      },
    },
  };

  const myChart = new Chart(ctx, opts);
};
