import { shallow } from "enzyme";
import Pesquisa from "../pesquisa"

describe("<Pesquisa/>", () => {
    it("renders correctly", () => {
      const wrapper = shallow(<Pesquisa />);
      expect(wrapper).toMatchSnapshot();
    });
});