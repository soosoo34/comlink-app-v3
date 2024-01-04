import {ContactCivilityEnum, ContactInterface} from '@features/contacts/domain/entities/contacts.interface';

export class ContactsBuilder {
  private readonly _contact: ContactInterface;

  constructor() {
    this._contact = {
      id: 1,
      id_cabinet: 1,
      nom: 'nom',
      prenom: 'prenom',
      civilite: ContactCivilityEnum.mr,
      email: 'email',
      telephone: 'telephone',
      mobile: 'mobile',
      fax: 'fax',
      place_id: 'place_id',
      street_number: 1,
      indice: 1,
      formatted_address: 'formatted_address',
      lat: 1,
      lng: 1,
      url: 'url',
      adresse_de_recherche: 'adresse_de_recherche',
      type_voie: 'type_voie',
      route: 'route',
      comp_adresse: 'comp_adresse',
      administrative_area_level_1: 'administrative_area_level_1',
      administrative_area_level_2: 'administrative_area_level_2',
      isNew: true,
      postal_code: 'postal_code',
      locality: 'locality',
      contactConnu: true,
      created_at: {
        date: new Date(),
        timezone_type: 1,
        timezone: 'timezone',
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

  public withId(id: number): ContactsBuilder {
    this._contact.id = id;
    return this;
  }

  public withIdCabinet(id_cabinet: number): ContactsBuilder {
    this._contact.id_cabinet = id_cabinet;
    return this;
  }

  public withNom(nom: string): ContactsBuilder {
    this._contact.nom = nom;
    return this;
  }

  public withPrenom(prenom: string): ContactsBuilder {
    this._contact.prenom = prenom;
    return this;
  }

  public withCivilite(civilite: ContactCivilityEnum): ContactsBuilder {
    this._contact.civilite = civilite;
    return this;
  }

  public withEmail(email: string): ContactsBuilder {
    this._contact.email = email;
    return this;
  }

  public withTelephone(telephone: string): ContactsBuilder {
    this._contact.telephone = telephone;
    return this;
  }

  public withMobile(mobile: string): ContactsBuilder {
    this._contact.mobile = mobile;
    return this;
  }

  public withFax(fax: string): ContactsBuilder {
    this._contact.fax = fax;
    return this;
  }

  public withPlaceId(place_id: string): ContactsBuilder {
    this._contact.place_id = place_id;
    return this;
  }

  public withStreetNumber(street_number: number): ContactsBuilder {
    this._contact.street_number = street_number;
    return this;
  }

  public withIndice(indice: number): ContactsBuilder {
    this._contact.indice = indice;
    return this;
  }

  public withFormattedAddress(formatted_address: string): ContactsBuilder {
    this._contact.formatted_address = formatted_address;
    return this;
  }

  public withLat(lat: number): ContactsBuilder {
    this._contact.lat = lat;
    return this;
  }

  public withLng(lng: number): ContactsBuilder {
    this._contact.lng = lng;
    return this;
  }

  public withUrl(url: string): ContactsBuilder {
    this._contact.url = url;
    return this;
  }

  public withAdresseDeRecherche(adresse_de_recherche: string): ContactsBuilder {
    this._contact.adresse_de_recherche = adresse_de_recherche;
    return this;
  }

  public withTypeVoie(type_voie: string): ContactsBuilder {
    this._contact.type_voie = type_voie;
    return this;
  }

  public withRoute(route: string): ContactsBuilder {
    this._contact.route = route;
    return this;
  }

  public withCompAdresse(comp_adresse: string): ContactsBuilder {
    this._contact.comp_adresse = comp_adresse;
    return this;
  }

  public withAdministrativeAreaLevel1(administrative_area_level_1: string): ContactsBuilder {
    this._contact.administrative_area_level_1 = administrative_area_level_1;
    return this;
  }

  public withAdministrativeAreaLevel2(administrative_area_level_2: string): ContactsBuilder {
    this._contact.administrative_area_level_2 = administrative_area_level_2;
    return this;
  }

  public withIsNew(isNew: boolean): ContactsBuilder {
    this._contact.isNew = isNew;
    return this;
  }

  public withPostalCode(postal_code: string): ContactsBuilder {
    this._contact.postal_code = postal_code;
    return this;
  }

  public withLocality(locality: string): ContactsBuilder {
    this._contact.locality = locality;
    return this;
  }

  public withContactConnu(contactConnu: boolean): ContactsBuilder {
    this._contact.contactConnu = contactConnu;
    return this;
  }

  public withCreatedAt(created_at: { date: Date; timezone_type: number; timezone: string }): ContactsBuilder {
    this._contact.created_at = created_at;
    return this;
  }

  public withUpdatedAt(updated_at: { date: Date; timezone_type: number; timezone: string }): ContactsBuilder {
    this._contact.updated_at = updated_at;
    return this;
  }

  public withDeletedAt(deleted_at: { date: Date; timezone_type: number; timezone: string }): ContactsBuilder {
    this._contact.deleted_at = deleted_at;
    return this;
  }

  public build(): ContactInterface {
    return this._contact;
  }
}
