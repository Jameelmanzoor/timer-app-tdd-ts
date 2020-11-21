import React from "react";
import { shallow, mount } from "enzyme";
import { Timer } from "./Timer";

describe("Timer Specs", () => {
  let container: any;
  beforeEach(() => (container = shallow(<Timer />)));

  it("Should render a <div/>", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("should render instances of the TimerButton component", () => {
    expect(container.find("TimerButton").length).toEqual(3);
  });

  it("It should render a <h1 />", () => {
    expect(container.find("h1").length).toEqual(1);
  });
});
