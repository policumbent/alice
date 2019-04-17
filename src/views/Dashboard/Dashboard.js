import React, {
  Component
} from "react";
import {
  Line
} from "react-chartjs-2";
import {
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row
} from "reactstrap";
import {
  CustomTooltips
} from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import {
  getStyle
} from "@coreui/coreui/dist/js/coreui-utilities";
import SocketIoHelper from "../../helpers/socketHelper";

//const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

// Main Chart

//Random Numbers
/*function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}*/

var elements = 250;
var label = [];

// lascio per caricare lo storico
for (var i = 0; i <= elements; i++) {
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
          backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor
        };
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true
  },
  scales: {
    xAxes: [{
      display: false,
      gridLines: {
        drawOnChartArea: true
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: true,
      }
    }]
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
  },
};

const mainChartData = {
  labels: label,
  datasets: [{
      label: "Power",
      fill: false,
      backgroundColor: brandInfo, //hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      data: []
    },
    {
      label: "Cadence",
      fill: false,
      backgroundColor: brandSuccess,
      borderColor: brandSuccess,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      data: []
    },
    {
      label: "Speed",
      fill: false,
      backgroundColor: brandWarning,
      borderColor: brandWarning,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      //borderDash: [8, 5],
      data: []
    },
    {
      label: "Heartrate",
      fill: false,
      backgroundColor: brandDanger,
      borderColor: brandDanger,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      data: []
    }
  ]
};

class MainChart extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
    this.data = this.props.data;
  }

  componentDidUpdate() {
    if (this.data !== this.props.data) {
      this.data = this.props.data;
      var _this = this;

      var oldDataSet1 = _this.state.datasets[0];
      var oldDataSet2 = _this.state.datasets[1];
      var oldDataSet3 = _this.state.datasets[2];
      var oldDataSet4 = _this.state.datasets[3];

      var labels = _this.state.labels;
      /*var time = Math.round(_this.data.Minutes * 100 * 60) / 100;
      var minutes = Math.floor(time / 60);
      var seconds = time % 60;*/

      var newData1 = [];
      var newData2 = [];
      var newData3 = [];
      var newData4 = [];

      for (var x = 1; x < _this.state.labels.length; x++) {
        newData1.push(oldDataSet1.data[x]);
        newData2.push(oldDataSet2.data[x]);
        newData3.push(oldDataSet3.data[x]);
        newData4.push(oldDataSet4.data[x]);

      }

      // TODO: stampare secondi asse x ?
      labels.shift();
      labels.push("");

      newData1.push(_this.data.power);
      newData2.push(_this.data.heartrate);
      newData3.push(_this.data.speed);
      newData4.push(_this.data.cadence);


      var newDataSet1 = {
        ...oldDataSet1
      };
      var newDataSet2 = {
        ...oldDataSet2
      };
      var newDataSet3 = {
        ...oldDataSet3
      };
      var newDataSet4 = {
        ...oldDataSet4
      };

      newDataSet1.data = newData1;
      newDataSet2.data = newData2;
      newDataSet3.data = newData3;
      newDataSet4.data = newData4;

      var newState = {
        ..._this.state,
        datasets: [newDataSet1, newDataSet2, newDataSet3, newDataSet4]
      };

      _this.setState(newState);
    }
  }

  render() {
    return <Line data={this.state} options={this.props.opts} height={300} />;
  }
}


var miniElements = 80;
var miniLabel = [];

// lascio per caricare lo storico
for (i = 0; i <= miniElements; i++) {
  miniLabel.push("");
}

// Card Charts

// Power
const cardChartData1 = {
  labels: miniLabel,
  datasets: [{
    backgroundColor: "rgba(255,255,255,.2)",
    borderColor: "rgba(255,255,255,.55)",
    data: []
  }]
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false,
      ticks: {
        beginAtZero: true,
        max: 450
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 0
    }
  },
  animation: {
    duration: 0
  }
};

// Cadence
const cardChartData2 = {
  labels: miniLabel,
  datasets: [{
    backgroundColor: "rgba(255,255,255,.2)",
    borderColor: "rgba(255,255,255,.55)",
    data: []
  }]
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false,
      ticks: {
        min: 50,
        max: 150
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 0
    }
  },
  animation: {
    duration: 0
  }
};

// Speed
const cardChartData3 = {
  labels: miniLabel,
  datasets: [{
    backgroundColor: "rgba(255,255,255,.2)",
    borderColor: "rgba(255,255,255,.55)",
    data: []
  }]
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false,
      ticks: {
        beginAtZero: true,
        max: 160
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 0
    }
  },
  animation: {
    duration: 0
  }
};

// Heartrate
const cardChartData4 = {
  labels: miniLabel,
  datasets: [{
    backgroundColor: "rgba(255,255,255,.2)",
    borderColor: "rgba(255,255,255,.55)",
    data: []
  }]
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false,
      ticks: {
        min: 100,
        max: 200
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 0
    }
  },
  animation: {
    duration: 0
  }
};

class CardChart extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
    this.data = this.props.data;
    this.value = this.props.value;
  }

  componentDidUpdate() {
    if (this.data !== this.props.data) {
      this.data = this.props.data;
      var _this = this;

      var oldDataSet = _this.state.datasets[0];
      var labels = _this.state.labels;
      var newData = [];

      for (var x = 1; x < _this.state.labels.length; x++) {
        newData.push(oldDataSet.data[x]);
      }

      labels.shift();
      labels.push("");

      var value = _this.data[_this.value];
      newData.push(value);

      var newDataSet = {
        ...oldDataSet
      };

      newDataSet.data = newData;

      var newState = {
        ..._this.state,
        datasets: [newDataSet]
      };

      _this.setState(newState);
    }
  }

  render() {
    return <Line data={this.state} options={this.props.opts} height={70} />;
  }

}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      data: ""
    };

    SocketIoHelper.requestData();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  updateData(data) {
    this.setState({
      data
    });

    setTimeout(function() {
      SocketIoHelper.requestData();
    }, 50);
  }

  componentDidMount() {
    SocketIoHelper.getData(data => {
      this.updateData(data);
    });
  }

  render() {
    console.log(this.state.data);
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
                <div className="text-value">{this.state.data.power}</div>
                <div>Power</div>
              </CardBody>
              <div className="chart-wrapper" style={{height: "70px"}}>
                <CardChart
                  state={cardChartData1}
                  opts={cardChartOpts1}
                  value='power'
                  data={this.state.data}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success">
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
                <div className="text-value">{this.state.data.cadence}</div>
                <div>Cadence</div>
              </CardBody>
              <div className="chart-wrapper" style={{height: "70px"}}>
                <CardChart
                  state={cardChartData2}
                  opts={cardChartOpts2}
                  value='cadence'
                  data={this.state.data}
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
                <div className="text-value">{this.state.data.speed}</div>
                <div>Speed</div>
              </CardBody>
              <div className="chart-wrapper" style={{height: "70px"}}>
                <CardChart
                  state={cardChartData3}
                  opts={cardChartOpts3}
                  value='speed'
                  data={this.state.data}
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
                <div className="text-value">{this.state.data.heartrate}</div>
                <div>Heartrate</div>
              </CardBody>
              <div className="chart-wrapper" style={{height: "70px"}}>
                <CardChart
                  state={cardChartData4}
                  opts={cardChartOpts4}
                  value='heartrate'
                  data={this.state.data}
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
                  <MainChart
                    state={mainChartData}
                    opts={mainChartOpts}
                    data={this.state.data}
                  />
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