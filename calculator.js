class Calculator {
  constructor(firstNum, secondNum) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
  }

  add() {
    return this.firstNum + this.secondNum;
  }
  substract() {
    return this.firstNum - this.secondNum;
  }
  multipl() {
    return this.firstNum * this.secondNum;
  }
  divide() {
    return this.firstNum / this.secondNum;
  }
}

// const operation = new Calculator();

module.exports = Calculator;
