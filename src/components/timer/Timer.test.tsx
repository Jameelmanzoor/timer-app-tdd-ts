import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Timer } from "./Timer";

describe("Timer Specs", () => {
  let container: ShallowWrapper<
    Readonly<{}> & Readonly<any>,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => (container = shallow(<Timer />)));

  it("Should render a <div/>", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
  it("should render instances of the TimerButton component", () => {
    expect(container.find("TimerButton").length).toEqual(3);
  });
  // eslint-disable-next-line
  it("It should render a <h1 />", () => {
    expect(container.find("h1").length).toEqual(1);
  });
});
