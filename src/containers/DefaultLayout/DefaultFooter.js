import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Marquee from "react-smooth-marquee"

const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {}

// @TODO: aggiungere frasi motivazionali
const raccolta = [
  'I record esistono per essere battuti - M. Schumacher',
  'La bici non va avanti a watt e ignoranza? - Sid',
  'frase 3',
  'cose a caso',
  'frase 4',
]

class DefaultFooter extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  getFrase = () => {
    let precFrase = this.state.frase
    let frase = precFrase

    while (frase === precFrase) {
      let pos = Math.floor(Math.random() * raccolta.length)
      frase = raccolta[pos]
    }

    this.setState({
      frase: frase,
    })
  }

  componentDidMount() {
    this.getFrase()
  }

  render() {
    return (
      <React.Fragment>
        {/* <span
          style={{ cursor: 'pointer', MozUserSelect: 'none' }}
          onClick={this.getFrase}
          className="ml-auto mr-auto noselect"
        >
          {this.state.frase}
        </span> */}
        <Marquee velocity={0.08}>Content goes here </Marquee>
      </React.Fragment>
    )
  }
}

DefaultFooter.propTypes = propTypes
DefaultFooter.defaultProps = defaultProps

export default DefaultFooter
