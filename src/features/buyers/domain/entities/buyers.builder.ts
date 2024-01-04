import {BuyerInterface} from '@features/buyers/domain/entities/buyers.interface';

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
      last_sent_mail: new Date(),
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

  withId(id: number): BuyersBuilder {
    this._buyer.id = id;
    return this;
  }

  withIdCabinet(idCabinet: number): BuyersBuilder {
    this._buyer.id_cabinet = idCabinet;
    return this;
  }

  withIdContact(idContact: number): BuyersBuilder {
    this._buyer.id_contact = idContact;
    return this;
  }

  withIdConsultant(idConsultant: number): BuyersBuilder {
    this._buyer.id_consultant = idConsultant;
    return this;
  }

  withIdActivite(idActivite: number): BuyersBuilder {
    this._buyer.id_activite = idActivite;
    return this;
  }

  withEnseigne(enseigne: string): BuyersBuilder {
    this._buyer.enseigne = enseigne;
    return this;
  }

  withEtat(etat: string): BuyersBuilder {
    this._buyer.etat = etat;
    return this;
  }

  withActionEnCours(actionEnCours: string): BuyersBuilder {
    this._buyer.action_en_cours = actionEnCours;
    return this;
  }

  withDateDerniereAction(dateDerniereAction: Date): BuyersBuilder {
    this._buyer.date_derniere_action = dateDerniereAction;
    return this;
  }

  withMailFrequency(mailFrequency: number): BuyersBuilder {
    this._buyer.mail_frequency = mailFrequency;
    return this;
  }

  withLastSentMail(lastSentMail: Date): BuyersBuilder {
    this._buyer.last_sent_mail = lastSentMail;
    return this;
  }

  withApport(apport: number): BuyersBuilder {
    this._buyer.apport = apport;
    return this;
  }

  withOrigin(origin: string): BuyersBuilder {
    this._buyer.origin = origin;
    return this;
  }

  withSurfaceMin(surfaceMin: number): BuyersBuilder {
    this._buyer.surface_min = surfaceMin;
    return this;
  }

  withSurfaceMax(surfaceMax: number): BuyersBuilder {
    this._buyer.surface_max = surfaceMax;
    return this;
  }

  withPremierContact(premierContact: string): BuyersBuilder {
    this._buyer.premier_contact = premierContact;
    return this;
  }

  withCommentairesConsultant(commentairesConsultant: string): BuyersBuilder {
    this._buyer.commentaires_consultant = commentairesConsultant;
    return this;
  }

  withSecteur(secteur: string): BuyersBuilder {
    this._buyer.secteur = secteur;
    return this;
  }

  withExperiencePro(experiencePro: string): BuyersBuilder {
    this._buyer.experience_pro = experiencePro;
    return this;
  }

  withAssocie(associe: string): BuyersBuilder {
    this._buyer.associe = associe;
    return this;
  }

  withCommentairesArchive(commentairesArchive: string): BuyersBuilder {
    this._buyer.commentaires_archive = commentairesArchive;
    return this;
  }

  withDateArchive(dateArchive: any): BuyersBuilder {
    this._buyer.date_archive = dateArchive;
    return this;
  }

  withCreatedAt(createdAt: any): BuyersBuilder {
    this._buyer.created_at = createdAt;
    return this;
  }

  withUpdatedAt(updatedAt: any): BuyersBuilder {
    this._buyer.updated_at = updatedAt;
    return this;
  }

  withDeletedAt(deletedAt: any): BuyersBuilder {
    this._buyer.deleted_at = deletedAt;
    return this;
  }

  public build(): BuyerInterface {
    return this._buyer;
  }

}

