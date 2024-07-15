import { ValidationError } from 'express-validator'; 

export class RequestValidationError extends Error { 
    public errors: ValidationError[];

    constructor(errors: ValidationError[]) {
        super();
        this.errors = errors;

        //internal configuration of javascript that is used most of the times when you are extending a built-in function
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}

