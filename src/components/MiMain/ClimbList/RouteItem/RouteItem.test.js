import React from "react";
import { shallow } from "enzyme";
import RouteItem from "./RouteItem";

describe("RouteItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RouteItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
