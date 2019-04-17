import React, {
  Component
} from "react";
import {
  Line
} from "react-chartjs-2";

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
      newData2.push(_this.data.cadence);
      newData3.push(_this.data.speed);
      newData4.push(_this.data.heartrate);


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

export {
  CardChart,
  MainChart
};