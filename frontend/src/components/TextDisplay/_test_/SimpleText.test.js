import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleText from '../SimpleText';
import Settings from '../../../images/settings.png';


test('it should render a simple image', () => {
   render(<SimpleText image={Settings}/>);
   const image = screen.getByRole('img');
   expect(image).toHaveAttribute("src", Settings);
});

test('should render a simple text', () => {
   render(<SimpleText text={'SERVIÇO REALIZADO'}/>);
   const input = screen.getByText(/SERVIÇO REALIZADO/);
   expect(input).toBeInTheDocument();
})

