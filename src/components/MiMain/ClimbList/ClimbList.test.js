import React from "react";
import { shallow } from "enzyme";
import ClimbList from "./ClimbList";

describe("ClimbList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClimbList />);
    expect(wrapper).toMatchSnapshot();
  });
});
