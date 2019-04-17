import React, {
  Component
} from "react";
import {
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Dropdown,
  //  DropdownItem,
  //  DropdownMenu,
  //  DropdownToggle,
  Row
} from "reactstrap";
import SocketIoHelper from "../../helpers/socketHelper";
import {
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
} from "./costant"
import {
  CardChart,
  MainChart
} from "./Graph"

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
    }, 500);
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
                  <Dropdown
                    id="card1"
                    isOpen={this.state.card1}
                    toggle={() => {
                      this.setState({card1: !this.state.card1});}}>
                    <Dropdown className="p-0" color="transparent">
                      <i className="icon-settings" />
                    </Dropdown>
                  </Dropdown>
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
                      this.setState({card2: !this.state.card2});}}>
                    <Dropdown className="p-0" color="transparent">
                      <i className="icon-location-pin" />
                    </Dropdown>
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
                    <Dropdown className="p-0" color="transparent">
                      <i className="icon-settings" />
                    </Dropdown>
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
                    <Dropdown className="p-0" color="transparent">
                      <i className="icon-settings" />
                    </Dropdown>
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