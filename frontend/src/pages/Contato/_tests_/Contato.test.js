import { shallow } from "enzyme";
import Contato from "../contato"

describe("<Contato/>", () => {
    it("renders correctly", () => {
      const wrapper = shallow(<Contato />);
      expect(wrapper).toMatchSnapshot();
    });
});