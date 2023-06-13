function stringLength(string){
    let charactersCount = 0;
    for(let char of string){
        charactersCount++;
    }

    return charactersCount;
}

test('counts the number of characters in a string', ()=>{
    //arrange
    const string = 'lawrence';

    //act
    const result = stringLength(string);

    //asset
    expect(result).toBe(8);
});

function reverseString(string){
    let word = string.split("").reverse().join('');
    return word;
}

test('reverses a string', ()=>{
    //arrange
    let string = 'lawrence';

    //act 
    const result =reverseString(string);

    //assert
    expect(result).toBe('ecnerwal');
});

class Calculate{
    add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}
   describe("Calculator - add method", () => {
  const calculator = new Calculate();

  test("Adding two positive numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("Adding two negative numbers", () => {
    expect(calculator.add(-2, -3)).toBe(-5);
  });

  test("Adding zero to a number", () => {
    expect(calculator.add(5, 0)).toBe(5);
  });
});

describe("Calculator - subtract method", () => {
  const calculator = new Calculate();

  test("Subtracting two positive numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("Subtracting two negative numbers", () => {
    expect(calculator.subtract(-5, -3)).toBe(-2);
  });

  test("Subtracting zero from a number", () => {
    expect(calculator.subtract(5, 0)).toBe(5);
  });
});

describe("Calculator - divide method", () => {
  const calculator = new Calculate();

  test("Dividing two positive numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test("Dividing a positive number by a negative number", () => {
    expect(calculator.divide(6, -3)).toBe(-2);
  });

  test("Dividing by zero throws error", () => {
    expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
  });
});

describe("Calculator - multiply method", () => {
  const calculator = new Calculate();

  test("Multiplying two positive numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("Multiplying two negative numbers", () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });

  test("Multiplying zero with a number", () => {
    expect(calculator.multiply(5, 0)).toBe(0);
  });
});

function capitalize(string){
  let allLowerCase = string.toLowerCase();
  let string1 = allLowerCase.slice(0, 1);
  string1 = string1.toUpperCase();
  
  let string2 = allLowerCase.slice(1, string.length);

  return string1.concat(string2);
}

test('captalizes the first letter in a string', () =>{
  //arrange
  let string = 'eunice';

  //act
  let result = capitalize(string);

  //assert
  expect(result).toBe('Eunice')
})
