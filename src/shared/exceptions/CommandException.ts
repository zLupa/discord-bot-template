import { BaseException } from "./BaseException";

export class CommandException extends BaseException {
  constructor(public message: string) {
    super(message);
  }
}
