import HttpStatusCodes from 'http-status-codes';


export abstract class CustomError extends Error {

  public readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(msg: string, httpStatus: number) {
    super(msg);
    this.HttpStatus = httpStatus;
  }
}

export class ParamMissingError extends CustomError {

  public static readonly Msg = 'One or more of the required parameters was missing.';
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor() {
    super(ParamMissingError.Msg, ParamMissingError.HttpStatus);
  }
}

export class ParamInvalidError extends CustomError {

  public static readonly Msg = 'One or more of the required was missing or invalid.';
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor() {
    super(ParamInvalidError.Msg, ParamMissingError.HttpStatus);
  }
}

export class ValidatorFnError extends CustomError {

  public static readonly Msg = 'Validator function failed. function name: ';
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(fnName: string) {
    super(ValidatorFnError.Msg + fnName, ParamMissingError.HttpStatus);
  }
}

export class FileNotFoundError extends CustomError {

  public static readonly Msg = 'A file with the given key does not exists in the database.';
  public static readonly HttpStatus = HttpStatusCodes.NOT_FOUND;

  constructor() {
    super(FileNotFoundError.Msg, FileNotFoundError.HttpStatus);
  }
}
