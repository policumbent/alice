import React, {
  Component
} from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Alert,
} from "reactstrap";
import {
  AppSwitch
} from '@coreui/react'
import SocketIoHelper from "../../helpers/socketHelper";

class Impostazioni extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this._isMounted = true;

    this.state = {
      settings: "",
      gui_settings: "",
      visible: false,
    };

    this.getSettings();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onDismiss = () => {
    this.setState({
      visible: false
    });
  };

  showMessage = () => {
    this.setState({
      visible: true
    })
    setTimeout(this.onDismiss, 2500);
  };

  handleSwitch = name => {
    const settings = this.state.settings;
    const value = settings[name];

    settings[name] = !value;
    this.setState({
      settings
    });
  };

  handleText = (name, event) => {
    const settings = this.state.settings;
    if (event.target.validity.valid) {
      const value = event.target.value;

      settings[name] = value;
      this.setState({
        settings
      });
    }

  };

  saveSettings = () => {
    SocketIoHelper.saveSettings(this.state.settings);
    this.showMessage();
  };

  getSettings = () => {
    SocketIoHelper.getSettings(settings => {
      this.setState({
        settings
      })
    });
  };

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    console.log(this.state.settings);
    console.disableYellowBox = true;
    return (
      <div className="animated fadeIn" >
        <Row>
          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <strong>Raspberry pi</strong>
              </CardHeader>
              <CardBody>
                <Form action="" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="10">
                      <Label>Log</Label>
                    </Col>
                    <Col md="2">
                      <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} disabled={true} label checked={this.state.settings.log} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="10">
                      <Label>Video</Label>
                    </Col>
                    <Col md="2">
                      <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} disabled={true} label checked={this.state.settings.video} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="10">
                      <Label>Ant</Label>
                    </Col>
                    <Col md="2">
                      <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} disabled={true} label checked={this.state.settings.ant} />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="9">
                      <Label>Potenza media</Label>
                    </Col>
                    <Col md="3">
                      <Input className="text-center" type="number" pattern="[0-9]*"
                        value={this.state.settings.average_power_time}
                        onChange={this.handleText.bind(this,'average_power_time')}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="9">
                      <Label>Led Mode</Label>
                    </Col>
                    <Col md="3">
                      <Input className="text-center" type="number" pattern="[0-9]*"
                        value={this.state.settings.led_mode}
                        onChange={this.handleText.bind(this,'led_mode')}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="9">
                      <Label>Circonferenza</Label>
                    </Col>
                    <Col md="3">
                      <Input className="text-center" type="number" pattern="[0-9]*"
                        value={this.state.settings.circumference}
                        onChange={this.handleText.bind(this,'circumference')}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="10">
                      <Label>Csv</Label>
                    </Col>
                    <Col md="2">
                      <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label
                        onChange={this.handleSwitch.bind(this,'csv')}
                        checked={this.state.settings.csv} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="9">
                      <Label>Timer</Label>
                    </Col>
                    <Col md="3">
                      <Input className="text-center" type="number" pattern="[0-9]*"
                        value={this.state.settings.timer}
                        onInput={this.handleText.bind(this,'timer')}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="10">
                      <Label>Calibrazione</Label>
                    </Col>
                    <Col md="2">
                      <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label
                        onChange={this.handleSwitch.bind(this,'calibration')}
                        checked={this.state.settings.calibration} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="9">
                      <Label>Valore calibrazione</Label>
                    </Col>
                    <Col md="3">
                      <Input className="text-center" type="number" pattern="[0-9]*"
                        value={this.state.settings.calibration_value}
                        onInput={this.handleText.bind(this,'calibration_value')}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="10">
                      <Label>Record video</Label>
                    </Col>
                    <Col md="2">
                      <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label
                      onChange={this.handleSwitch.bind(this,'video_record')}
                      checked={this.state.settings.video_record}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>

              <CardFooter>
                <Row>
                  <Col md="9">
                    <Button type="submit" data-dismiss='alert' size="sl" color="success" onClick={this.saveSettings}><i className="fa fa-download"></i> Save</Button>
                    &ensp;
                    <Button type="submit" size="sl" color="danger" onClick={this.getSettings}><i className="fa fa-refresh"></i> Reload</Button>
                  </Col>
                  <Col md="3">
                    <div className="text-center">{this.state.settings.update}</div>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>

          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <strong>GUI</strong>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>

            <Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>
              Impostazioni salvate
            </Alert>

          </Col>
        </Row>
      </div>

    );
  }

}

export default Impostazioni;