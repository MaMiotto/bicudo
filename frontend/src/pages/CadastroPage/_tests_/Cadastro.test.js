import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import Cadastro from "../cadastro"

describe("<Cadastro/>", () => {
    it("renders correctly", () => {
      const wrapper = shallow(<Cadastro />);
      expect(wrapper).toMatchSnapshot();
    });
});