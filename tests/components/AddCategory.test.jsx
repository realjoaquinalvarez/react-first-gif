import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('<AddCategory />', () => { 
    test('Debe cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe(''); // Verifica que el input se haya limpiado

        expect(onNewCategory).toHaveBeenCalled(); // Verifica que se haya llamado a la función
        expect(onNewCategory).toHaveBeenCalledTimes(1); // Asegúrate de que se haya llamado exactamente una vez
    });


    

});
