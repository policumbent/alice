import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities';

//const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle('--success');
const brandInfo = getStyle('--info');
const brandWarning = getStyle('--warning');
const brandDanger = getStyle('--danger');

// TODO: change `numElement` to 200
const numElement = 150;
const numCardElement = 50;

// Main Chart

let label = Array(numElement).fill('');

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function (tooltipItem: any, chart: any) {
        return {
          backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor,
        };
      },
    },
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        display: false,
        gridLines: {
          drawOnChartArea: true,
        },
      },
    ],
    yAxes: [
      {
        display: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
    line: {
      tension: 0,
    },
  },
  animation: {
    duration: 0,
  },
};

const mainChartData = {
  labels: label,
  datasets: [
    {
      label: 'Power',
      fill: false,
      backgroundColor: brandInfo, //hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      hidden: true,
      data: Array(numElement + 1).fill(null),
    },
    {
      label: 'Cadence',
      fill: false,
      backgroundColor: brandSuccess,
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: Array(numElement + 1).fill(null),
    },
    {
      label: 'Speed',
      fill: false,
      backgroundColor: brandWarning,
      borderColor: brandWarning,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      //borderDash: [8, 5],
      data: Array(numElement + 1).fill(null),
    },
    {
      label: 'Heartrate',
      fill: false,
      backgroundColor: brandDanger,
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      hidden: true,
      data: Array(numElement + 1).fill(null),
    },
  ],
};

// Card Charts

let miniLabel = Array(numCardElement).fill('');

// Power
const cardChartData1 = {
  labels: miniLabel,
  datasets: [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: Array(numCardElement).fill(null),
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true,
          max: 500,
        },
      },
    ],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 0,
    },
  },
  animation: {
    duration: 0,
  },
};

// Cadence
const cardChartData2 = {
  labels: miniLabel,
  datasets: [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: Array(numCardElement).fill(null),
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          min: 50,
          max: 150,
        },
      },
    ],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 0,
    },
  },
  animation: {
    duration: 0,
  },
};

// Speed
const cardChartData3 = {
  labels: miniLabel,
  datasets: [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: Array(numCardElement).fill(null),
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true,
          max: 160,
        },
      },
    ],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 0,
    },
  },
  animation: {
    duration: 0,
  },
};

// Heartrate
const cardChartData4 = {
  labels: miniLabel,
  datasets: [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: Array(numCardElement + 1).fill(null),
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          min: 100,
          max: 200,
        },
      },
    ],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 0,
    },
  },
  animation: {
    duration: 0,
  },
};

export {
  mainChartOpts,
  mainChartData,
  cardChartData1,
  cardChartData2,
  cardChartData3,
  cardChartData4,
  cardChartOpts1,
  cardChartOpts2,
  cardChartOpts3,
  cardChartOpts4,
  numCardElement,
  numElement,
};
