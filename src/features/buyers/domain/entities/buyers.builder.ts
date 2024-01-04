import { BuyerInterface } from '@features/buyers/domain/entities/buyers.interface';
import { DateTimeInterface } from '@src/shared/interaces/date-time.interface.ts/date-time.interface';

export class BuyersBuilder {
  private readonly _buyer: BuyerInterface;

  constructor() {
    this._buyer = {
      id: 1,
      id_cabinet: 1,
      id_contact: 1,
      id_consultant: 1,
      id_activite: 1,
      enseigne: 'enseigne',
      etat: 'etat',
      action_en_cours: 'action_en_cours',
      date_derniere_action: new Date(),
      mail_frequency: 1,
      last_sent_mail: {
        date: new Date(),
        timezone_type: 1,
        timezone: 'timezone',
      },
      apport: 1,
      origin: 'origin',
      surface_min: 1,
      surface_max: 1,
      premier_contact: 'premier_contact',
      commentaires_consultant: 'commentaires_consultant',
      secteur: 'secteur',
      experience_pro: 'experience_pro',
      associe: 'associe',
      commentaires_archive: 'commentaires_archive',

      date_archive: {
        date: new Date(),
        timezone_type: 1,
        timezone: 'timezone',
      },
      created_at: {
        date: new Date(),
        timezone: 'timezone',
        timezone_type: 1,
      },

      updated_at: {
        date: new Date(),
        timezone_type: 1,
        timezone: 'timezone',
      },
      deleted_at: {
        date: new Date(),
        timezone_type: 1,
        timezone: 'timezone',
      },
    };
  }

  withId(id: number): this {
    this._buyer.id = id;
    return this;
  }

  withIdCabinet(idCabinet: number): this {
    this._buyer.id_cabinet = idCabinet;
    return this;
  }

  withIdContact(idContact: number): this {
    this._buyer.id_contact = idContact;
    return this;
  }

  withIdConsultant(idConsultant: number): this {
    this._buyer.id_consultant = idConsultant;
    return this;
  }

  withIdActivite(idActivite: number): this {
    this._buyer.id_activite = idActivite;
    return this;
  }

  withEnseigne(enseigne: string): this {
    this._buyer.enseigne = enseigne;
    return this;
  }

  withEtat(etat: string): this {
    this._buyer.etat = etat;
    return this;
  }

  withActionEnCours(actionEnCours: string): this {
    this._buyer.action_en_cours = actionEnCours;
    return this;
  }

  withDateDerniereAction(dateDerniereAction: Date): this {
    this._buyer.date_derniere_action = dateDerniereAction;
    return this;
  }

  withMailFrequency(mailFrequency: number): this {
    this._buyer.mail_frequency = mailFrequency;
    return this;
  }

  withLastSentMail(lastSentMail: DateTimeInterface): this {
    this._buyer.last_sent_mail = lastSentMail;
    return this;
  }

  withApport(apport: number): this {
    this._buyer.apport = apport;
    return this;
  }

  withOrigin(origin: string): this {
    this._buyer.origin = origin;
    return this;
  }

  withSurfaceMin(surfaceMin: number): this {
    this._buyer.surface_min = surfaceMin;
    return this;
  }

  withSurfaceMax(surfaceMax: number): this {
    this._buyer.surface_max = surfaceMax;
    return this;
  }

  withPremierContact(premierContact: string): this {
    this._buyer.premier_contact = premierContact;
    return this;
  }

  withCommentairesConsultant(commentairesConsultant: string): this {
    this._buyer.commentaires_consultant = commentairesConsultant;
    return this;
  }

  withSecteur(secteur: string): this {
    this._buyer.secteur = secteur;
    return this;
  }

  withExperiencePro(experiencePro: string): this {
    this._buyer.experience_pro = experiencePro;
    return this;
  }

  withAssocie(associe: string): this {
    this._buyer.associe = associe;
    return this;
  }

  withCommentairesArchive(commentairesArchive: string): this {
    this._buyer.commentaires_archive = commentairesArchive;
    return this;
  }

  withDateArchive(dateArchive: DateTimeInterface): this {
    this._buyer.date_archive = dateArchive;
    return this;
  }

  withCreatedAt(createdAt: DateTimeInterface): this {
    this._buyer.created_at = createdAt;
    return this;
  }

  withUpdatedAt(updatedAt: DateTimeInterface): this {
    this._buyer.updated_at = updatedAt;
    return this;
  }

  withDeletedAt(deletedAt: DateTimeInterface): this {
    this._buyer.deleted_at = deletedAt;
    return this;
  }

  public build(): BuyerInterface {
    return this._buyer;
  }
}
