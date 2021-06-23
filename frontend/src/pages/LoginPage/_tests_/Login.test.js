import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import Login from "../login"

describe("<Login/>", () => {
    it("renders correctly", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper).toMatchSnapshot();
    });
});