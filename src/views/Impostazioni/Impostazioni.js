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
      gui_settings: ""
    };


    SocketIoHelper.getSettings(settings => {
      this.setState({
        settings
      })
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleChange = (name, value) => {
    console.log(!value);
    const settings = this.state.settings;
    settings[name] = !value;
    this.setState({
      settings
    });
  };

  saveSettings = () => {
    SocketIoHelper.saveSettings(this.state.settings);
  };

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
                      <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} disabled={true} label defaultChecked={this.state.settings.log} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="10">
                      <Label>Video</Label>
                    </Col>
                    <Col md="2">
                      <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} disabled={true} label defaultChecked={this.state.settings.video} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="10">
                      <Label>Ant</Label>
                    </Col>
                    <Col md="2">
                      <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} disabled={true} label defaultChecked={this.state.settings.ant} />
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
                        defaultChecked={this.state.settings.csv} />
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
                        defaultChecked={this.state.settings.calibration} />
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
                      defaultChecked={this.state.settings.video_record}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>

              <CardFooter>
                <Row>
                  <Col md="9">
                    <Button type="submit" size="sl" color="success" onClick={this.saveSettings}><i className="fa fa-dot-circle-o"></i> Save</Button>
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
          </Col>
        </Row>
      </div>

    );
  }

}

export default Impostazioni;