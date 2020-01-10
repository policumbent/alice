import React, { Component } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Collapse,
} from 'reactstrap'
import SocketIoHelper from 'socketio'
import { store } from 'react-notifications-component'
import base from 'notifications'

class CardRasp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: false,
    }

    this.inputRasp = {
      dest: this.props.dest,
      type: '6',
      value: '',
    }
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse })
  }

  sendRasp = value => {
    store.addNotification({
      title: 'Raspberry',
      message: 'Invio del pacchetto raspberry alla bici',
      ...base,
    })
    this.inputRasp.value = value
    SocketIoHelper.sendRasp(this.inputRasp)
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
            <strong>Raspberry</strong>
          </Button>
        </CardHeader>
        <Collapse isOpen={!this.state.collapse}>
          <CardBody>
            <Row>
              <Col xs="7" md="8" xl="9">
                <Button
                  type="submit"
                  data-dismiss="alert"
                  size="sl"
                  color="danger"
                  onClick={this.sendRasp.bind(this, '0')}
                >
                  <i className="fa fa-power-off"></i> Spegni
                </Button>
              </Col>
              <Col xs="5" md="4" xl="3">
                <Button
                  className="text-white"
                  type="submit"
                  data-dismiss="alert"
                  size="sl"
                  color="warning"
                  onClick={this.sendRasp.bind(this, '1')}
                >
                  <i className="fa fa-refresh"></i> Riavvia
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}

export default CardRasp
