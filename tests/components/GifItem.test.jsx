import { render, screen } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem'; // Ensure this path is correct according to your project structure

describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render( <GifItem title={ title } url={ url } /> );  
        expect( container ).toMatchSnapshot();
    });

    render( <GifItem title={ title } url={ url } /> );

    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url ) ;
    expect( alt ).toBe( title );

    test('debe de mostrar el titulo del componenete', () => {

        render( <GifItem title={ title } url={ url } />);
        expect( screen.getByText( title ) ).toBeTruthy();

    })


});
