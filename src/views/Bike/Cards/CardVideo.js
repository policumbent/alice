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

class CardVideo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: false,
    }

    this.inputVideo = {
      dest: this.props.dest,
      type: '7',
      value: this.props.value,
      name: '',
    }
  }

  handleSwitch = () => {
    this.inputVideo.value = !this.inputVideo.value
  }

  handleText = event => {
    const name = event.target.value
    if (event.target.validity.valid) {
      this.inputVideo.name = name
    }
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse })
  }

  sendVideo = () => {
    store.addNotification({
      title: 'Video',
      message: 'Invio del pacchetto video alla bici',
      ...base,
    })
    SocketIoHelper.sendVideo(this.inputVideo)
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
            <strong>Video</strong>
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
                  <Label>Registrazione</Label>
                </Col>
                <Col md="3">
                  <AppSwitch
                    className={'mx-1'}
                    variant={'pill'}
                    color={'primary'}
                    outline={'alt'}
                    label
                    checked={this.props.value}
                    onChange={this.handleSwitch}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5">
                  <Label>File</Label>
                </Col>
                <Col md="7">
                  <Input
                    className="text-center"
                    type="text"
                    pattern="*"
                    placeholder="Inserire nome del file video"
                    onChange={this.handleText}
                  />
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <Row>
              <Col md="9">
                <Button
                  type="submit"
                  data-dismiss="alert"
                  size="sl"
                  color="primary"
                  onClick={this.sendVideo}
                >
                  <i className="fa fa-sign-out"></i> Send
                </Button>
                &ensp;
              </Col>
            </Row>
          </CardFooter>
        </Collapse>
      </Card>
    )
  }
}

export default CardVideo
