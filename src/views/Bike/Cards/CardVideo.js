import React, { useRef, useState, useCallback } from 'react'
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

const CardVideo = ({ dest, value, reloadStatus }) => {
  const [collapse, setCollapse] = useState(false)
  const inputVideo = useRef({ dest: dest, type: '7', value: value, name: '' })

  // TODO: risolvere bug grafico dello switch
  // useEffect(() => {
  //   inputVideo.current.value = value
  // }, [value])

  const toggleCollapse = useCallback(() => {
    setCollapse(!collapse)
  }, [collapse])

  const handleSwitch = useCallback(() => {
    inputVideo.current.value = !inputVideo.current.value
  }, [inputVideo])

  const handleText = useCallback(
    event => {
      let name = event.target.value
      if (event.target.validity.valid) {
        inputVideo.current.name = name
      }
    },
    [inputVideo]
  )

  const sendVideo = useCallback(() => {
    dataService.sendVideo(inputVideo.current)
    store.addNotification({
      title: 'Video',
      message: 'Invio del pacchetto video alla bici',
      ...base,
    })

    reloadStatus()
    // eslint-disable-next-line
  }, [inputVideo])

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
          <strong>Video</strong>
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
                <Label>Registrazione</Label>
              </Col>
              <Col md="3">
                <AppSwitch
                  className={'mx-1'}
                  variant={'pill'}
                  color={'primary'}
                  outline={'alt'}
                  label
                  checked={value}
                  onChange={handleSwitch.bind(this)}
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
                  onChange={handleText}
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
                onClick={sendVideo}
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

export default CardVideo
