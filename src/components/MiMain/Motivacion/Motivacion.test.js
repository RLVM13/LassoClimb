import React from "react";
import { shallow } from "enzyme";
import Motivacion from "./Motivacion";

describe("Motivacion", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Motivacion />);
    expect(wrapper).toMatchSnapshot();
  });
});
