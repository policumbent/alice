import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

// @TODO: aggiungere frasi motivazionali
const raccolta = [
  "I record esistono per essere battuti - M. Schumacher",
  "La bici non va avanti a watt e ignoranza? - Sid",
  "frase 3",
  "cose a caso",
  "frase 4"
];

class DefaultFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getFrase = () => {
    let pos = Math.floor(Math.random() * raccolta.length);
    this.setState({
      frase: raccolta[pos]
    });
  }
  componentDidMount() {
    this.getFrase();
  }

  render() {
    return (
      <React.Fragment>
        <span style={{cursor: "pointer", "MozUserSelect": "none"}} onClick={this.getFrase} className="ml-auto mr-auto noselect">{this.state.frase}</span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;