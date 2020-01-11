import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import SocketIoHelper from 'socketio'
import { CardState, CardVideo, CardRasp, CardSettings } from './Cards'

class Bike extends Component {
  _isMounted = false

  constructor(props) {
    super(props)

    this.state = {
      settings: '',
      state: '',
      visible: false,
      visible_video: false,
      visible_rasp: false,
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.reloadStatus()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  reloadStatus() {
    SocketIoHelper.getSettings(settings => {
      if (JSON.stringify(this.state.settings) !== JSON.stringify(settings)) {
        this.setState({ settings })
      }
    })
    SocketIoHelper.getState(state => {
      this.setState({ state })
    })
  }

  updateView = () => {
    this.reloadStatus()
  }

  // NOTE: probabilmente da deprecare
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  )

  render() {
    if (this.state.state === '' || this.state.settings === '') {
      return null
    }
    return (
      <article>
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
              value={this.state.state.video_recording}
              dest={this.state.state.dest}
              reloadStatus={this.updateView}
            />
            <CardRasp
              dest={this.state.state.dest}
              reloadStatus={this.updateView}
            />
          </Col>

          <Col xs="12" xl="4">
            <CardSettings
              settings={this.state.settings}
              reloadStatus={this.updateView}
            />
          </Col>
        </Row>
      </article>
    )
  }
}

export default Bike
