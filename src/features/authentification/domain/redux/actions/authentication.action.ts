export class Login {
  static readonly type = '[Authentication] login';

  constructor(
    public readonly log: string,
    public readonly password: string
  ) {}
}

export class setToken {
  static readonly type = '[Authentication] setToken';

  constructor(public readonly token: string) {}
}

export class CheckUserInLocalStorage {
  static readonly type = '[AUTH] Check User in Local Storage';
}
