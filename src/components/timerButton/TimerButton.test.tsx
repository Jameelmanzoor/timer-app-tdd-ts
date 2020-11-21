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
  // eslint-disable-next-line
  it("It Should render a <div /> from TimerButton", () => {
    expect(container.find("button").length).toBeGreaterThanOrEqual(1);
  });

  // eslint-disable-next-line
  it("It should call mock function when clicked", () => {
    container.simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
