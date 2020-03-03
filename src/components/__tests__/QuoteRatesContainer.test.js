import React from "react";
import { render } from "@testing-library/react";
import QuoteRatesContainer from "./../QuoteRatesContainer";

describe("QuoteRatesContainer", () => {
  it("Renders QuoteRatesContainer without crashing", () => {
    const { getByText } = render(<QuoteRatesContainer />);
    const title = "Quote Rates Finder";
    expect(getByText(title)).toBeInTheDocument();
  });
});
