import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import TimerButton from "./TimerButton";

describe("TimerButton Test", () => {
  let container: ShallowWrapper<
    Readonly<{}> & Readonly<any>,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  const mockFn = jest.fn();

  beforeEach(() => {
    container = shallow(<TimerButton buttonValue={""} buttonAction={mockFn} id={""} />);
  });

  it("Should render a <div />", () => {
    expect(container.find("button").length).toBeGreaterThanOrEqual(1);
  });

  it("It should call mock function when clicked", () => {
    container.simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
