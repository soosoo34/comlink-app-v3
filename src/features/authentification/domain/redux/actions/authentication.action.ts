// action login

export class Login {
  static readonly type = '[Authentication] login';

  constructor(
    public readonly log: string,
    public readonly password: string
  ) {}
}
