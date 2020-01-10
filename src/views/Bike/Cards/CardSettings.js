import React, { Component } from 'react'
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
  Collapse,
} from 'reactstrap'
import { AppSwitch } from '@coreui/react'

import SocketIoHelper from 'socketio'
import { store } from 'react-notifications-component'
import base from 'notifications'

const currentTime = () => {
  const d = new Date()
  return (
    d.toLocaleTimeString() +
    '_' +
    d.toLocaleDateString('it-IT', {
      month: '2-digit',
      day: '2-digit',
    })
  ).replace('/', '-')
}

class CardSettings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: false,
    }

    this.inputSettings = JSON.parse(JSON.stringify(this.props.settings))
  }

  handleSwitch = name => {
    const settings = this.inputSettings
    const value = !settings[name]
    settings[name] = value
  }

  handleText = (name, event) => {
    const settings = this.inputSettings
    const value = event.target.value

    if (event.target.validity.valid) {
      settings[name] = value
    }
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse })
  }

  saveSettings = () => {
    store.addNotification({
      title: 'Settings',
      message: 'Invio del pacchetto settings alla bici',
      ...base,
    })
    this.inputSettings.update = currentTime()
    SocketIoHelper.saveSettings(this.inputSettings)
    this.props.reloadStatus()
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <Button
            block
            color="link"
            className="text-left m-0 p-0"
            onClick={this.toggle}
            aria-expanded={this.state.collapse}
          >
            <strong>Impostazioni</strong>
          </Button>
        </CardHeader>
        <Collapse isOpen={!this.state.collapse}>
          <CardBody>
            <Form
              action=""
              encType="multipart/form-data"
              className="form-horizontal"
            >
              <FormGroup row>
                <Col md="9">
                  <Label>Log</Label>
                </Col>
                <Col md="3">
                  <AppSwitch
                    className={'mx-1'}
                    variant={'pill'}
                    color={'primary'}
                    outline={'alt'}
                    label
                    onChange={this.handleSwitch.bind(this, 'log')}
                    checked={this.props.settings.log}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="9">
                  <Label>Csv</Label>
                </Col>
                <Col md="3">
                  <AppSwitch
                    className={'mx-1'}
                    variant={'pill'}
                    color={'primary'}
                    outline={'alt'}
                    label
                    onChange={this.handleSwitch.bind(this, 'csv')}
                    checked={this.props.settings.csv}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="9">
                  <Label>Ant</Label>
                </Col>
                <Col md="3">
                  <AppSwitch
                    className={'mx-1'}
                    variant={'pill'}
                    color={'primary'}
                    outline={'alt'}
                    label
                    onChange={this.handleSwitch.bind(this, 'ant')}
                    checked={this.props.settings.ant}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="9">
                  <Label>Potenza media</Label>
                </Col>
                <Col md="3">
                  <Input
                    className="text-center"
                    type="number"
                    min="0"
                    pattern=""
                    defaultValue={this.props.settings.potenza}
                    onChange={this.handleText.bind(this, 'potenza')}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="9">
                  <Label>Led Mode</Label>
                </Col>
                <Col md="3">
                  <Input
                    className="text-center"
                    type="number"
                    min="0"
                    pattern="[0-9]*"
                    defaultValue={this.props.settings.led}
                    onChange={this.handleText.bind(this, 'led')}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="9">
                  <Label>Circonferenza</Label>
                </Col>
                <Col md="3">
                  <Input
                    className="text-center"
                    type="number"
                    min="0"
                    pattern="[0-9]*"
                    defaultValue={this.props.settings.circonferenza}
                    onChange={this.handleText.bind(this, 'circonferenza')}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="9">
                  <Label>Valore calibrazione</Label>
                </Col>
                <Col md="3">
                  <Input
                    className="text-center"
                    type="number"
                    min="0"
                    pattern="[0-9]*"
                    defaultValue={this.props.settings.calibration_value}
                    onInput={this.handleText.bind(this, 'calibration_value')}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="9">
                  <Label>Run</Label>
                </Col>
                <Col md="3">
                  <Input
                    className="text-center"
                    type="number"
                    min="0"
                    pattern="[0-9]*"
                    defaultValue={this.props.settings.run}
                    onInput={this.handleText.bind(this, 'run')}
                  />
                </Col>
              </FormGroup>
            </Form>
          </CardBody>

          <CardFooter>
            <Row>
              <Col xs="6" md="9">
                <Button
                  type="submit"
                  data-dismiss="alert"
                  size="sl"
                  color="success"
                  onClick={this.saveSettings}
                >
                  <i className="fa fa-download"></i> Save
                </Button>
                &ensp;
              </Col>
              <Col xs="6" md="3">
                <div className="text-center">
                  {this.props.settings.update.replace('_', '\n')}
                </div>
              </Col>
            </Row>
          </CardFooter>
        </Collapse>
      </Card>
    )
  }
}

export default CardSettings
