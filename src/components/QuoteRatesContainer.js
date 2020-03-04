import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import fetchQuotes from "./../actions/QuoteActions";

class QuoteRatesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const params = {
      loanSize: 200000,
      creditScore: 600,
      propertyType: "SingleFamily",
      occupancy: "Primary"
    };
    dispatch(fetchQuotes(params));
  }

  render() {
    return (
      <>
        <h2>Quote Rates Finder</h2>
      </>
    );
  }
}

QuoteRatesContainer.propTypes = {
  quotes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { quotes } = state;
  return { quotes };
}

export default connect(mapStateToProps)(QuoteRatesContainer);
