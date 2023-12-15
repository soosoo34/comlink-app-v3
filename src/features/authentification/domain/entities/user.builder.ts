import { User } from '@features/authentification/domain/entities/user';
import { DateTimeInterface } from '@src/shared/interaces/date-time.interface.ts/date-time.interface';

export class UserBuilder {
  private readonly _user: User;

  constructor() {
    this._user = {
      id: 1,
      id_cabinet: 1,
      email: 'brms.dev@gmail.com',
      password: 'test123',
      challenge: 1,
      role: 'admin',
      intitule: 'test',
      couleur: 'test',
      civilite: 'test',
      prenom: 'test',
      nom: 'test',
      tel: 'test',
      niveau: 1,
      created_at: {
        date: null,
        timezone_type: 3,
        timezone: 'Europe/Paris',
      },
      updated_at: {
        date: null,
        timezone_type: 3,
        timezone: 'Europe/Paris',
      },
      deleted_at: {
        date: null,
        timezone_type: 3,
        timezone: 'Europe/Paris',
      },
    };
  }

  withId(id: number): this {
    this._user.id = id;
    return this;
  }

  withIdCabinet(idCabinet: number): this {
    this._user.id_cabinet = idCabinet;
    return this;
  }

  withEmail(email: string): this {
    this._user.email = email;
    return this;
  }

  withPassword(password: string): this {
    this._user.password = password;
    return this;
  }

  withChallenge(challenge: number): this {
    this._user.challenge = challenge;
    return this;
  }

  withRole(role: string): this {
    this._user.role = role;
    return this;
  }

  withIntitule(intitule: string): this {
    this._user.intitule = intitule;
    return this;
  }

  withCouleur(couleur: string): this {
    this._user.couleur = couleur;
    return this;
  }

  withCivilite(civilite: string): this {
    this._user.civilite = civilite;
    return this;
  }

  withPrenom(prenom: string): this {
    this._user.prenom = prenom;
    return this;
  }

  withNom(nom: string): this {
    this._user.nom = nom;
    return this;
  }

  withTel(tel: string): this {
    this._user.tel = tel;
    return this;
  }

  withNiveau(niveau: number): this {
    this._user.niveau = niveau;
    return this;
  }

  withCreatedAt(createdAt: DateTimeInterface): this {
    this._user.created_at = createdAt;
    return this;
  }

  withUpdatedAt(updatedAt: DateTimeInterface): this {
    this._user.updated_at = updatedAt;
    return this;
  }

  withDeletedAt(deletedAt: DateTimeInterface): this {
    this._user.deleted_at = deletedAt;
    return this;
  }

  build(): User {
    return this._user;
  }
}
