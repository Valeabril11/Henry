const { checkSeatStatus, getRowNumber} = require('../homework');

  it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
  });

//   it('esto espera un error si no es string', () => {
//     expect(()=> checkSeatStatus(1)).toThrow(new TypeError('First parameter is not a string'))
//   }
//   )
it('should throw a TypeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus(2)).toThrow(new TypeError('First parameter is not a string'));
  });
  it('should throw a TypeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus('2','b')).toThrow(new TypeError('Second parameter is not a number'));
  });

  it('espera la fila A asociada a la letra 0', ()=> {expect(getRowNumber('A')).toBe(0)});

  
  it('espera la fila C asociada a la letra 2', ()=> {expect(getRowNumber('C')).toBe(2)});