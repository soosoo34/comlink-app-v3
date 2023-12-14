// action login

export class Login {
  static readonly type = '[Authentication] login';

  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}
}
