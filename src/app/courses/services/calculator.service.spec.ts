import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {

  let caclulator: CalculatorService,loggerSpy:any;
  beforeEach(() => {
    console.log("Calling beforeEach");
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]); // create a spy object

    caclulator = new CalculatorService(loggerSpy); // setup phase
  });

  it("should add two numbers", () => {
    console.log("Add test");
    const result = caclulator.add(2, 2); //execution phase

    expect(result).toBe(4); // test phase
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two numbers", () => {
    console.log("Subtract test");
    const result = caclulator.subtract(2, 2); //execution phase

    expect(result).toBe(0, "unexpected subtraction result"); // test phase
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
