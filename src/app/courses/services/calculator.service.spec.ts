import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

    it('should add two numbers', () => {
        
        const logger = jasmine.createSpyObj('LoggerService', ['log']); // create a spy object

        const caclulator= new CalculatorService(logger);// setup phase

        const result = caclulator.add(2,2);//execution phase

        expect(result).toBe(4); // test phase
        expect(logger.log).toHaveBeenCalledTimes(1);
    })

    it('should subtract two numbers', () => {

        const caclulator= new CalculatorService(new LoggerService());// setup phase

        const result = caclulator.subtract(2,2); //execution phase

        expect(result).toBe(0, "unexpected subtraction result"); // test phase
        
    })

});