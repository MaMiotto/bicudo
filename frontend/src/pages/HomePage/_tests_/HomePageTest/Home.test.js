import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import Home from "../..";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Home/>", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});

test("Test Title", () => {
  render(<Home />);
  const TextElement = screen.getByText(
    /Uma Nova Forma De Contratar ProfissionaisSem Sair de Casa/i
  );
  expect(TextElement).toMatchInlineSnapshot(`
    <h1
      class="sc-dlnjwi jxwrRg"
    >
      Uma Nova Forma De Contratar Profissionais
      <br />
      Sem Sair de Casa
    </h1>
  `);
});

test("Test text on front page", () => {
  render(<Home />);
  const TestElement = screen.getByText(
    /Conectando quem precisa com quem sabe fazer./
  );
  expect(TestElement).toBeInTheDocument();
});
