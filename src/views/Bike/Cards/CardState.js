import React, { Component } from 'react'
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

class CardState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: '',
      collapse: false,
    }
  }

  // TODO: issue #22
  UNSAFE_componentWillReceiveProps() {
    this.updateStatus()
  }

  componentDidMount() {
    this.updateStatus()
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse })
  }

  toggleButton = () => {
    store.addNotification({
      ...base,
      title: 'State',
      message: 'Aggiornato lo status',
      type: 'success',
    })
    this.props.reloadStatus()
  }

  updateStatus() {
    let jstate = JSON.parse(JSON.stringify(this.props.state))
    let jsettings = JSON.parse(JSON.stringify(this.props.settings))

    // rimuovo i campi superflui dall'output
    delete jstate['dest']
    delete jstate['type']
    delete jsettings['dest']
    delete jsettings['type']

    let state = JSON.stringify(jstate, null, 1)
      .replace(/\{|\}|"|,|/g, '')
      .replace('\n', '')
    let settings = JSON.stringify(jsettings, null, 1).replace(/\{|\}|"|,/g, '')

    this.setState({
      status: state + settings,
    })
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
            <strong>Status</strong>
          </Button>
        </CardHeader>
        <Collapse isOpen={!this.state.collapse}>
          <CardBody>
            <pre>
              <code>{this.state.status}</code>
            </pre>
          </CardBody>
          <CardFooter>
            <Button
              className="text-white bg-cyan"
              type="submit"
              size="sl"
              onClick={this.toggleButton}
            >
              <i className="fa fa-refresh"></i> Reload
            </Button>
          </CardFooter>
        </Collapse>
      </Card>
    )
  }
}

export default CardState
