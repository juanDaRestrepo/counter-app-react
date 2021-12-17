import { getSaludo } from "../base/02-template-string";
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar hola y el nombre de quien se le mande ', () => {
        const nombre ='Daniel';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+nombre);
    })
    //getSaludo debe retornar Hola Carlos! si no hay argumneto de nombre
    test('getSaludo debe retornar Hola Carlos! si no hay argumneto de nombre', () => {
       
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Felipe');
    })
})