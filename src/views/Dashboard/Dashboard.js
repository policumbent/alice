import React, {
  Component
} from "react";
import {
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Row
} from "reactstrap";
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
import SocketIoHelper from "../../helpers/socketHelper";

class Dashboard extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };

    SocketIoHelper.requestData();
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  updateData(data) {
    this.setState({
      data
    });

    if (this._isMounted) {
      setTimeout(function() {
        SocketIoHelper.requestData();
      }, 500);
    }
  }

  componentDidMount() {
    this._isMounted = true;

    SocketIoHelper.getData(data => {
      this.updateData(data);
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup id="card1" className="float-right">
                  <i className="icon-settings" />
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
                <ButtonGroup id="card2" className="float-right">
                  <i className="icon-location-pin" />
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
                <ButtonGroup id="card3" className="float-right">
                  <i className="icon-settings" />
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
                <ButtonGroup id="card4" className="float-right">
                  <i className="icon-settings" />
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