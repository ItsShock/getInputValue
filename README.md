# Moduł JavaScript
## Lekcja 4
### Zadanie 3 - poziom podstawowy 
Stwórz funkcję `getInputValue`, która będzie zwracała zawartość atrybutu `value` gdy ten nie jest pusty, lub `null` gdy jest pusty. Funkcja w parametrze otrzyma dowolny element `<input>` i nie powinna go modyfikować, powinna jedynie zwrócić zawartość atrybutu (lub null).

Przykładowy input:
`<input id="test-input" value="test" />`
`getInputValue(document.querySelector('#test-input'));`

Przykładowy output:
`'test'`
