import React from 'react';
import { render, screen } from "@testing-library/react";
import { shallow } from 'enzyme';
import ImageContent from '../';
import Worker from '../../../images/worker.jpg';

test('it should render an image', () => {
    const logo = shallow(<ImageContent src={Worker}/>);
    expect(logo.find({prop:'src'})).toBeTruthy();
});

test('it should match snapshot', () => {
    const { container } = render(<ImageContent />);
    expect(container.firstChild).toMatchSnapshot();
});

test('should have src attribute', () => {
    render(<ImageContent image={Worker}/>);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src',Worker);
})


