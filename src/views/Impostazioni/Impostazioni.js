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
  }

  showMessage = () => {
    this.setState({
      visible: true
    })
    setTimeout(this.onDismiss, 2500);
  }

  handleChange = (name, value) => {
    const settings = this.state.settings;
    settings[name] = !value;

    this.setState({
      settings
    });

    console.log(!value);
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
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    console.log(this.state.settings);
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
                      <Input className="text-center" type="text" id="text-input" name="text-input" placeholder={this.state.settings.average_power_time} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="9">
                      <Label>Led Mode</Label>
                    </Col>
                    <Col md="3">
                      <Input className="text-center" type="text" id="text-input" name="text-input" placeholder={this.state.settings.led_mode} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="9">
                      <Label>Circonferenza</Label>
                    </Col>
                    <Col md="3">
                      <Input className="text-center" type="text" id="text-input" name="text-input" placeholder={this.state.settings.circumference} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="10">
                      <Label>Csv</Label>
                    </Col>
                    <Col md="2">
                      <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label
                        onChange={this.handleChange.bind(this,'csv',this.state.settings.csv)}
                        checked={this.state.settings.csv} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="9">
                      <Label>Timer</Label>
                    </Col>
                    <Col md="3">
                      <Input className="text-center" type="text" id="text-input" name="text-input" placeholder={this.state.settings.timer} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="10">
                      <Label>Calibrazione</Label>
                    </Col>
                    <Col md="2">
                      <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label
                        onChange={this.handleChange.bind(this,'calibration',this.state.settings.calibration)}
                        checked={this.state.settings.calibration} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="9">
                      <Label>Valore calibrazione</Label>
                    </Col>
                    <Col md="3">
                      <Input className="text-center" type="text" id="text-input" name="text-input" placeholder={this.state.settings.calibration_value} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="10">
                      <Label>Record video</Label>
                    </Col>
                    <Col md="2">
                      <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label
                      onChange={this.handleChange.bind(this,'video_record',this.state.settings.video_record)}
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