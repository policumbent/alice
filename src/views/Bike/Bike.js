import React, { useCallback, useState, useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import SocketIoHelper from 'socketio'
import { CardState, CardVideo, CardRasp, CardSettings } from './Cards'

const Bike = () => {
  const [state, setState] = useState()
  const [settings, setSettings] = useState()
  const loading = state === undefined || settings === undefined

  useEffect(() => {
    reloadStatus()
    // eslint-disable-next-line
  }, [])

  const reloadStatus = useCallback(() => {
    SocketIoHelper.getSettings(newSettings => {
      if (JSON.stringify(newSettings) !== JSON.stringify(settings)) {
        setSettings(newSettings)
      }
    })
    SocketIoHelper.getState(state => setState(state))
    // eslint-disable-next-line
  }, [])

  const updateView = useCallback(() => {
    reloadStatus()
  }, [reloadStatus])

  // NOTE: probabilmente da deprecare
  const Loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  )

  return loading ? (
    Loading
  ) : (
    <article>
      <Row>
        <Col xs="12" xl="4">
          <CardState
            settings={settings}
            state={state}
            reloadStatus={updateView}
          />
        </Col>

        <Col xs="12" xl="4">
          <CardVideo
            value={state.video_recording}
            dest={state.dest}
            reloadStatus={updateView}
          />
          <CardRasp dest={state.dest} reloadStatus={updateView} />
        </Col>

        <Col xs="12" xl="4">
          <CardSettings settings={settings} reloadStatus={updateView} />
        </Col>
      </Row>
    </article>
  )
}

export default Bike
