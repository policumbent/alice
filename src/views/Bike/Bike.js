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
  Collapse,
} from "reactstrap";
import {
  AppSwitch
} from '@coreui/react'
import SocketIoHelper from "../../helpers/socketHelper";
import { store } from 'react-notifications-component';
import base from '../../notifications/notification';

function currentTime() {
  var today = new Date();

  var date = today.getDate() + '/' + (today.getMonth() + 1);
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = time + '-' + date;

  return dateTime
}

class Bike extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      settings: "",
      state: "",
      visible: false,
      visible_video: false,
      visible_rasp: false,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.reloadStatus();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  reloadStatus() {
    SocketIoHelper.getSettings(settings => {
      if (this.state.settings !== settings) {
        this.setState({ settings });
      }
    });
    SocketIoHelper.getState(state => {
      if (this.state.state !== state) {
        this.setState({ state })
      }
    });
  }

  updateView = () => {
    this.reloadStatus();
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    if (this.state.state === "") {
      return null
    }
    return (
      <div className="animated fadeIn" >
        <Row>
          <Col xs="12" xl="4">
            <CardState
              settings={this.state.settings}
              state={this.state.state}
              reloadStatus={this.updateView}
            />
          </Col>

          <Col xs="12" xl="4">
            <CardVideo
              video={this.state.state.video_recording}
              dest={this.state.state.dest}
              reloadStatus={this.updateView}
            />
            <CardRasp
              dest={this.state.state.dest}
              reloadStatus={this.updateView}
            />
          </Col>

          <Col xs="12" xl="4">
            <CardSetting
              settings={this.state.settings}
              reloadStatus={this.updateView}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

class CardVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.video,
      collapse: false
    }

    this.inputVideo = {
      "dest": this.props.dest,
      "type": "7",
      "value": "",
      "name": ""
    }
  }

  UNSAFE_componentWillReceiveProps() {
    this.setState(props => ({
      value: props.video
    }));
  }

  handleSwitch = () => {
    this.inputVideo.value = !this.inputVideo.value;
  };

  handleText = (event) => {
    const name = event.target.value;
    if (event.target.validity.valid) {
      this.inputVideo.name = name;
    }
  };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  sendVideo = () => {
    store.addNotification({
      title: "Video",
      message: "Invio del pacchetto video alla bici",
      ...base,
    });
    SocketIoHelper.sendVideo(this.inputVideo);
    this.props.reloadStatus();
  };

  render() {
    if (this.inputVideo.value === "") {
      this.inputVideo.value = this.state.value;
    }
    return (
      <Card>
        <CardHeader>
          <Button block color="link" className="text-left m-0 p-0" onClick={this.toggle} aria-expanded={this.state.collapse} >
            <strong>Video</strong>
          </Button>
        </CardHeader>
        <Collapse isOpen={!this.state.collapse}>
          <CardBody>
            <Form action="" encType="multipart/form-data" className="form-horizontal">
              <FormGroup row>
                <Col md="10">
                  <Label>Registrazione</Label>
                </Col>
                <Col md="2">
                  <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label
                    defaultValue={this.state.value}
                    onChange={this.handleSwitch}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5">
                  <Label>Name</Label>
                </Col>
                <Col md="7">
                  <Input className="text-center" type="text" pattern="*"
                    placeholder="Inserire nome del file video"
                    onChange={this.handleText} />
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <Row>
              <Col md="9">
                <Button type="submit" data-dismiss='alert' size="sl" color="primary" onClick={this.sendVideo}><i className="fa fa-sign-out"></i> Send</Button>
                &ensp;
            </Col>
            </Row>
          </CardFooter>
        </Collapse>
      </Card>
    );
  }
}

class CardSetting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: this.props.settings,
      collapse: false
    }

    this.inputSettings = undefined;
  }

  handleSwitch = name => {
    const settings = this.inputSettings;
    const value = !settings[name];
    settings[name] = value;
  };

  handleText = (name, event) => {
    const settings = this.inputSettings;
    const value = event.target.value;

    if (event.target.validity.valid) {
      settings[name] = value;
    }
  };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  saveSettings = () => {
    store.addNotification({
      title: "Settings",
      message: "Invio del pacchetto settings alla bici",
      ...base,
    });
    this.inputSettings.update = currentTime()
    SocketIoHelper.saveSettings(this.inputSettings);
    this.props.reloadStatus();
  }

  render() {
    if (this.inputSettings === undefined) {
      this.inputSettings = JSON.parse(JSON.stringify(this.state.settings));
    }
    return (
      <Card>
        <CardHeader>
          <Button block color="link" className="text-left m-0 p-0" onClick={this.toggle} aria-expanded={this.state.collapse} >
            <strong>Impostazioni</strong>
          </Button>
        </CardHeader>
        <Collapse isOpen={!this.state.collapse}>
          <CardBody>
            <Form action="" encType="multipart/form-data" className="form-horizontal">
              <FormGroup row>
                <Col md="10">
                  <Label>Log</Label>
                </Col>
                <Col md="2">
                  <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label
                    onChange={this.handleSwitch.bind(this, 'log')}
                    defaultChecked={this.state.settings.log} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="10">
                  <Label>Csv</Label>
                </Col>
                <Col md="2">
                  <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label
                    onChange={this.handleSwitch.bind(this, 'csv')}
                    checked={this.state.settings.csv} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="10">
                  <Label>Ant</Label>
                </Col>
                <Col md="2">
                  <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label
                    onChange={this.handleSwitch.bind(this, 'ant')}
                    defaultChecked={this.state.settings.ant} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="9">
                  <Label>Potenza media</Label>
                </Col>
                <Col md="3">
                  <Input className="text-center" type="number" min="0" pattern=""
                    defaultValue={this.state.settings.potenza}
                    onChange={this.handleText.bind(this, 'potenza')} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="9">
                  <Label>Led Mode</Label>
                </Col>
                <Col md="3">
                  <Input className="text-center" type="number" min="0" pattern="[0-9]*"
                    defaultValue={this.state.settings.led}
                    onChange={this.handleText.bind(this, 'led')} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="9">
                  <Label>Circonferenza</Label>
                </Col>
                <Col md="3">
                  <Input className="text-center" type="number" min="0" pattern="[0-9]*"
                    defaultValue={this.state.settings.circonferenza}
                    onChange={this.handleText.bind(this, 'circonferenza')} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="9">
                  <Label>Valore calibrazione</Label>
                </Col>
                <Col md="3">
                  <Input className="text-center" type="number" min="0" pattern="[0-9]*"
                    defaultValue={this.state.settings.calibration_value}
                    onInput={this.handleText.bind(this, 'calibration_value')} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="9">
                  <Label>Run</Label>
                </Col>
                <Col md="3">
                  <Input className="text-center" type="number" min="0" pattern="[0-9]*"
                    defaultValue={this.state.settings.run}
                    onInput={this.handleText.bind(this, 'run')} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="10">
                  <Label>Record video</Label>
                </Col>
                <Col md="2">
                  <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label
                    onChange={this.handleSwitch.bind(this, 'video_record')}
                    defaultChecked={this.state.settings.video_record}
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
                  </Col>
              <Col md="3">
                <div className="text-center">{this.state.settings.update}</div>
              </Col>
            </Row>
          </CardFooter>
        </Collapse>
      </Card>
    );
  }
}

class CardState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "",
      collapse: false,
    };
  }

  UNSAFE_componentWillReceiveProps() {
    this.updateStatus();
  }

  componentDidMount() {
    this.updateStatus();
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  toggleButton = () => {
    store.addNotification({
      ...base,
      title: "State",
      message: "Aggiornato lo status",
      type: "success"
    });
    this.props.reloadStatus()
  };

  updateStatus() {
    let jstate = JSON.parse(JSON.stringify(this.props.state));
    let jsettings = JSON.parse(JSON.stringify(this.props.settings));

    // rimuovo i campi superflui dall'output
    delete jstate["dest"];
    delete jstate["type"];
    delete jsettings["dest"];
    delete jsettings["type"];

    let state = JSON.stringify(jstate, null, 1).replace(/\{|\}|"|,|/g, "").replace("\n", "");
    let settings = JSON.stringify(jsettings, null, 1).replace(/\{|\}|"|,/g, "");

    this.setState({
      status: state + settings
    });
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <Button block color="link" className="text-left m-0 p-0" onClick={this.toggle} aria-expanded={this.state.collapse} >
            <strong>Status</strong>
          </Button>
        </CardHeader>
        <Collapse isOpen={!this.state.collapse}>
          <CardBody >
            <pre>
              <code>
                {this.state.status}
              </code>
            </pre>
          </CardBody>
          <CardFooter>
            <Button className="text-white bg-cyan" type="submit" size="sl" onClick={this.toggleButton}><i className="fa fa-refresh"></i> Reload</Button>
          </CardFooter>
        </Collapse>
      </Card>
    );
  }
}

class CardRasp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false
    };

    this.inputRasp = {
      dest: this.props.dest,
      type: "6",
      value: ""
    }
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  sendRasp = value => {
    store.addNotification({
      title: "Raspberry",
      message: "Invio del pacchetto raspberry alla bici",
      ...base,
    });
    this.inputRasp.value = value;
    SocketIoHelper.sendRasp(this.inputRasp);
    this.props.reloadStatus();
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <Button block color="link" className="text-left m-0 p-0" onClick={this.toggle} aria-expanded={this.state.collapse} >
            <strong>Raspberry</strong>
          </Button>
        </CardHeader>
        <Collapse isOpen={!this.state.collapse}>
          <CardBody>
            <Row>
              <Col md="8" >
                <Button type="submit" data-dismiss='alert' size="sl" color="danger" onClick={this.sendRasp.bind(this, '0')}>
                  <i className="fa fa-power-off"></i> Spegni
              </Button>
              </Col>
              <Col md="4">
                &ensp;&ensp;&ensp;
                <Button className="text-white" type="submit" data-dismiss='alert' size="sl" color="warning" onClick={this.sendRasp.bind(this, '1')}>
                  <i className="fa fa-refresh"></i> Riavvia
              </Button>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    );
  }
}

export default Bike;



// NOTE: Il cambio va bene con l'app bluetooth android
// class CardGear extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       calibration: "",
//       collapse: false
//     }

//     this.inputCalibration = undefined;
//   }

//   toggle = () => {
//     this.setState({ collapse: !this.state.collapse });
//   };

//   sendCalibration = () => {
//     SocketIoHelper.sendCalibration(this.inputCalibration);
//     this.props.sendCalibration();
//   };

//   render() {
//     return (
//       <Card>
//         <CardHeader>
//           <Button block color="link" className="text-left m-0 p-0" onClick={this.toggle} aria-expanded={this.state.collapse} >
//             <strong>Cambio</strong>
//           </Button>
//         </CardHeader>
//         <Collapse isOpen={!this.state.collapse}>
//           <CardBody>
//             robe
//           </CardBody>
//           <CardFooter>
//             <Row>
//               <Col md="9">
//                 <Button type="submit" data-dismiss='alert' size="sl" color="primary" onClick={this.sendCalibration}><i className="fa fa-sign-out"></i> Send</Button>
//                 &ensp;
//               </Col>
//             </Row>
//           </CardFooter>
//         </Collapse>
//       </Card>
//     );
//   }
// }
