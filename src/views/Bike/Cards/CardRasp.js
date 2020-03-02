import React, { useCallback, useState, useRef } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Collapse,
} from 'reactstrap'
import APIfetcher from 'api'
import { store } from 'react-notifications-component'
import base from 'notifications'

const CardRasp = ({ dest, reloadStatus }) => {
  const [collapse, setCollapse] = useState(false)
  const inputRasp = useRef({ dest: dest, type: '6', value: '' })

  const toggleCollapse = useCallback(() => {
    setCollapse(!collapse)
  }, [collapse])

  const sendRasp = useCallback(
    value => {
      inputRasp.current.value = value
      APIfetcher.sendRasp(inputRasp.current)

      store.addNotification({
        title: 'Raspberry',
        message: 'Invio del pacchetto raspberry alla bici',
        ...base,
      })

      reloadStatus()
    },
    // eslint-disable-next-line
    [inputRasp]
  )

  return (
    <Card>
      <CardHeader>
        <Button
          block
          color="link"
          className="text-left m-0 p-0"
          onClick={toggleCollapse}
          aria-expanded={collapse}
        >
          <strong>Raspberry</strong>
        </Button>
      </CardHeader>
      <Collapse isOpen={!collapse}>
        <CardBody>
          <Row>
            <Col xs="7" md="8" xl="9">
              <Button
                type="submit"
                data-dismiss="alert"
                size="sl"
                color="danger"
                onClick={() => sendRasp('0')}
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
                onClick={() => sendRasp('1')}
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

export default CardRasp
