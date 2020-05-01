const getInputValue = require('..');

describe('Funkcja createList', () => {
  it('powinna zwrócić wartość typu string gdy przekazany input ma wypełnione pole value', async () => {
    const input = document.createElement('input');
    input.value = 'test';
    const result = getInputValue(input);

    expect(typeof result).toBe('string');
    expect(result).toBe('test');
  });

  it('powinna zwrócić null gdy przekazany input nie ma wypełnionego pola value', async () => {
    const input = document.createElement('input');
    const result = getInputValue(input);

    expect(result).toBe(null);
  });
});
