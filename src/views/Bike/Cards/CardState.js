import React, { useEffect, useState, useCallback } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
} from 'reactstrap'
import { store } from 'react-notifications-component'
import base from 'notifications'

const CardState = ({ state, settings, reloadStatus }) => {
  const [collapse, setCollapse] = useState(false)
  const [status, setStatus] = useState()

  const toggleCollapse = useCallback(() => {
    setCollapse(!collapse)
  }, [collapse])

  useEffect(() => {
    updateStatus()
    // eslint-disable-next-line
  }, [state, settings])

  const toggleButton = useCallback(() => {
    store.addNotification({
      ...base,
      title: 'State',
      message: 'Aggiornato lo status',
      type: 'success',
    })
    reloadStatus()
    // eslint-disable-next-line
  }, [])

  const updateStatus = useCallback(() => {
    let jstate = { ...state }
    let jsettings = { ...settings }

    // rimuovo i campi superflui dall'output
    delete jstate['dest']
    delete jstate['type']
    delete jsettings['dest']
    delete jsettings['type']

    let bstate = JSON.stringify(jstate, null, 1)
      .replace(/\{|\}|"|,|/g, '')
      .replace('\n', '')
    let bsettings = JSON.stringify(jsettings, null, 1).replace(/\{|\}|"|,/g, '')

    setStatus(`${bstate}${bsettings}`)
  }, [state, settings])

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
          <strong>Status</strong>
        </Button>
      </CardHeader>
      <Collapse isOpen={!collapse}>
        <CardBody>
          <pre>
            <code>{status}</code>
          </pre>
        </CardBody>
        <CardFooter>
          <Button
            className="text-white bg-cyan"
            type="submit"
            size="sl"
            onClick={toggleButton}
          >
            <i className="fa fa-refresh"></i> Reload
          </Button>
        </CardFooter>
      </Collapse>
    </Card>
  )
}

export default CardState
