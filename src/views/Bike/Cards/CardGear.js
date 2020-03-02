/*
 * THIS COMPONENT IS DEPRECATED
 */

import React, { Component } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
  Collapse,
} from 'reactstrap'
import APIfetcher from 'api'

class CardGear extends Component {
  constructor(props) {
    super(props)

    this.state = {
      calibration: '',
      collapse: false,
    }

    this.inputCalibration = undefined
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse })
  }

  sendCalibration = () => {
    APIfetcher.sendCalibration(this.inputCalibration)
    this.props.sendCalibration()
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
            <strong>Cambio</strong>
          </Button>
        </CardHeader>
        <Collapse isOpen={!this.state.collapse}>
          <CardBody>robe</CardBody>
          <CardFooter>
            <Row>
              <Col md="9">
                <Button
                  type="submit"
                  data-dismiss="alert"
                  size="sl"
                  color="primary"
                  onClick={this.sendCalibration}
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

export default CardGear
