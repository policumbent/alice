import React, {Component, lazy, Suspense} from "react";
import {Bar, Line} from "react-chartjs-2";
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table
} from "reactstrap";
import {CustomTooltips} from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import {getStyle, hexToRgba} from "@coreui/coreui/dist/js/coreui-utilities";
import SocketIoHelper from "../../helpers/socketHelper";

const Widget03 = lazy(() => import("../../views/Widgets/Widget03"));

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

// Card Chart 1
const cardChartData1 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: brandPrimary,
      borderColor: "rgba(255,255,255,.55)",
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ]
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent"
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent"
        }
      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5
        }
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 2
const cardChartData2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: brandInfo,
      borderColor: "rgba(255,255,255,.55)",
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ]
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent"
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent"
        }
      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5
        }
      }
    ]
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 3
const cardChartData3 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.2)",
      borderColor: "rgba(255,255,255,.55)",
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ]
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 4
const cardChartData4 = {
  labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.3)",
      borderColor: "transparent",
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ]
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  }
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: "New Clients"
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: "Recurring Clients"
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: "Pageviews"
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: "Organic"
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: "CTR"
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: "Bounce Rate"
  }
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        backgroundColor: "transparent",
        borderColor: variant ? variant : "#c2cfd6",
        data: dataset.data,
        label: dataset.label
      }
    ]
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  },
  legend: {
    display: false
  }
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 100;
var data1 = [];
var data2 = [];
var data3 = [];
var label = [];

// lascio per caricare lo storico
for (var i = 0; i <= elements; i++) {
  /*data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);*/
  label.push("");
}

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: "index",
    position: "nearest",
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return {
          backgroundColor:
            chart.data.datasets[tooltipItem.datasetIndex].borderColor
        };
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(300 / 5),
          max: 300
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    },
    line: {
      tension: 0
    }
  },
  animation: {
    duration: 0
  }
};

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: label,
      datasets: [
        {
          label: "Power",
          fill: false,
          backgroundColor: brandInfo, //hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: "#fff",
          borderWidth: 2,
          data: data1
        },
        {
          label: "Heartrate",
          fill: false,
          backgroundColor: brandDanger,
          borderColor: brandDanger,
          pointHoverBackgroundColor: "#fff",
          borderWidth: 2,
          data: data2
        },
        {
          label: "Speed",
          fill: false,
          backgroundColor: brandWarning,
          borderColor: brandWarning,
          pointHoverBackgroundColor: "#fff",
          borderWidth: 2,
          //borderDash: [8, 5],
          data: data3
        }
      ]
    };

    this.newData = "no data yet";

    SocketIoHelper.requestData();
  }

  collectData(data) {
    this.newData = data;
  }

  componentDidMount() {
    var _this = this;

    SocketIoHelper.getData(data => _this.collectData(JSON.parse(data)));

    setInterval(function() {
      var oldDataSet1 = _this.state.datasets[0];
      var oldDataSet2 = _this.state.datasets[1];
      var oldDataSet3 = _this.state.datasets[2];
      var labels = _this.state.labels;
      var time = Math.round(_this.newData.Minutes * 100 * 60) / 100;
      var minutes = Math.floor(time / 60);
      var seconds = time % 60;

      var newData1 = [];
      var newData2 = [];
      var newData3 = [];

      for (var x = 1; x < _this.state.labels.length; x++) {
        newData1.push(oldDataSet1.data[x]);
        newData2.push(oldDataSet2.data[x]);
        newData3.push(oldDataSet3.data[x]);
      }

      // TODO: stampare secondi asse x ?
      labels.shift();
      labels.push("");

      newData1.push(_this.newData.Watts);
      newData2.push(_this.newData.Hrate);
      newData3.push(_this.newData.Speed);

      var newDataSet1 = {
        ...oldDataSet1
      };
      var newDataSet2 = {
        ...oldDataSet2
      };
      var newDataSet3 = {
        ...oldDataSet3
      };

      newDataSet1.data = newData1;
      newDataSet2.data = newData2;
      newDataSet3.data = newData3;

      var newState = {
        ..._this.state,
        datasets: [newDataSet1, newDataSet2, newDataSet3]
      };

      _this.setState(newState);
      SocketIoHelper.requestData();
    }, 1000);
  }

  render() {
    return <Line data={this.state} options={mainChartOpts} height={300} />;
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown
                    id="card1"
                    isOpen={this.state.card1}
                    toggle={() => {
                      this.setState({card1: !this.state.card1});
                    }}
                  >
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings" />
                    </DropdownToggle>

                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem disabled>Disabled action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{height: "70px"}}>
                <Line
                  data={cardChartData2}
                  options={cardChartOpts2}
                  height={70}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown
                    id="card2"
                    isOpen={this.state.card2}
                    toggle={() => {
                      this.setState({card2: !this.state.card2});
                    }}
                  >
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{height: "70px"}}>
                <Line
                  data={cardChartData1}
                  options={cardChartOpts1}
                  height={70}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown
                    id="card3"
                    isOpen={this.state.card3}
                    toggle={() => {
                      this.setState({card3: !this.state.card3});
                    }}
                  >
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
              <div className="chart-wrapper" style={{height: "70px"}}>
                <Line
                  data={cardChartData3}
                  options={cardChartOpts3}
                  height={70}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown
                    id="card4"
                    isOpen={this.state.card4}
                    toggle={() => {
                      this.setState({card4: !this.state.card4});
                    }}
                  >
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{height: "70px"}}>
                <Bar
                  data={cardChartData4}
                  options={cardChartOpts4}
                  height={70}
                />
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <div
                  className="chart-wrapper"
                  style={{height: 400 + "px", marginTop: 0 + "px"}}
                >
                  <Graph />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
