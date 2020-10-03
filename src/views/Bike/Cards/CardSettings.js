import React, { useRef, useState, useCallback, useEffect } from 'react'
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

import dataService from 'api'
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

const CardSettings = ({ settings, reloadStatus }) => {
  const [collapse, setCollapse] = useState(false)
  const inputSettings = useRef(settings)

  useEffect(() => {
    inputSettings.current = settings
  }, [settings])

  const toggleCollapse = useCallback(() => {
    setCollapse(!collapse)
  }, [collapse])

  const handleSwitch = useCallback(
    name => {
      let settings = inputSettings.current
      let value = !settings[name]
      settings[name] = value
    },
    [inputSettings]
  )

  const handleText = useCallback(
    (name, event) => {
      let settings = inputSettings.current
      let value = event.target.value

      if (event.target.validity.valid) {
        settings[name] = value
      }
    },
    [inputSettings]
  )

  const saveSettings = useCallback(() => {
    let settings = inputSettings.current

    settings.update = currentTime()
    dataService.saveSettings(settings)

    store.addNotification({
      title: 'Settings',
      message: 'Invio del pacchetto settings alla bici',
      ...base,
    })

    reloadStatus()
    // eslint-disable-next-line
  }, [inputSettings])

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
          <strong>Impostazioni</strong>
        </Button>
      </CardHeader>
      <Collapse isOpen={!collapse}>
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
                  onChange={handleSwitch.bind(this, 'log')}
                  checked={inputSettings.current.log}
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
                  onChange={handleSwitch.bind(this, 'csv')}
                  checked={inputSettings.current.csv}
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
                  onChange={handleSwitch.bind(this, 'ant')}
                  checked={inputSettings.current.ant}
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
                  defaultValue={settings.potenza}
                  onChange={handleText.bind(this, 'potenza')}
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
                  defaultValue={inputSettings.current.led}
                  onChange={handleText.bind(this, 'led')}
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
                  defaultValue={inputSettings.current.circonferenza}
                  onChange={handleText.bind(this, 'circonferenza')}
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
                  defaultValue={inputSettings.current.calibration_value}
                  onInput={handleText.bind(this, 'calibration_value')}
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
                  defaultValue={inputSettings.current.run}
                  onInput={handleText.bind(this, 'run')}
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
                onClick={saveSettings}
              >
                <i className="fa fa-download"></i> Save
              </Button>
              &ensp;
            </Col>
            <Col xs="6" md="3">
              <div className="text-center">
                {settings.update.replace('_', '\n')}
              </div>
            </Col>
          </Row>
        </CardFooter>
      </Collapse>
    </Card>
  )
}

export default CardSettings
