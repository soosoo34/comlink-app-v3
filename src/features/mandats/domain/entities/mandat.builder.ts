import {
  ExclusiviteEnum,
  MandatInterface,
  MandatProcedureEnum,
  MandatStateEnum,
  MandatTransactionEnum,
  MandatWallEnum,
  MoraleOrPhysiqueEnum,
  TvaAssujetiEnum,
  TvaExprimeEnum,
} from '@features/mandats/domain/entities/mandat.interface';
import { DateTimeInterface } from '@src/shared/interaces/date-time.interface.ts/date-time.interface';

export class MandatBuilder {
  private readonly _mandat: MandatInterface;

  constructor() {
    this._mandat = {
      id: 1,
      id_cabinet: 1,
      id_consultant: 1,
      id_point_vente: 1,
      id_personne_morale_mandant: 1,
      id_personne_morale_bailleur: 1,
      id_contact_mandant: 1,
      id_siren_mandant: 1,
      id_siren_bailleur: 1,
      id_contact_bailleur: 1,
      id_forme_juridique: 1,
      id_activite: 1,
      id_rubrique_cession_pme: 1,
      etat: MandatStateEnum.preMandat,
      etat_murs: MandatWallEnum.free,
      numero_registre_mandats: '1',
      exclusivite: ExclusiviteEnum.exclusif,
      date_debut: null,
      date_fin: null,
      date_archive: null,
      titre: 'Titre',
      description: 'Description',
      transaction: MandatTransactionEnum.rent,
      prix_de_presentation: 1,
      honoraires_vendeur: 1,
      honoraires_acquereur: 1,
      droits_mutation: 1,
      tva: TvaAssujetiEnum.assujetti,
      option_tva: TvaExprimeEnum.exprimes_ht,
      energie: 1,
      climat: 1,
      procedure_type: MandatProcedureEnum.liquidation,
      procedure_date_limite: null,
      procedure_mandataire: 'Mandataire',
      procedure_tel: '0123456789',
      procedure_email: 'brms.dev@gmail.com',
      commentaires: 'Commentaires',
      vilcespme: 'Vilcespme',
      CPdiffusion: '34000',
      image: 'Image',
      sel_leboncoin: 1,
      enseigne: 'Enseigne',
      morale_or_physique_mandant: MoraleOrPhysiqueEnum.morale,
      morale_or_physique_bailleur: MoraleOrPhysiqueEnum.morale,
      created_at: null,
      updated_at: null,
      deleted_at: null,
    };
  }

  public withId(id: number): MandatBuilder {
    this._mandat.id = id;
    return this;
  }

  public withIdCabinet(id_cabinet: number): MandatBuilder {
    this._mandat.id_cabinet = id_cabinet;
    return this;
  }

  public withIdConsultant(id_consultant: number): MandatBuilder {
    this._mandat.id_consultant = id_consultant;
    return this;
  }

  public withIdPointVente(id_point_vente: number): MandatBuilder {
    this._mandat.id_point_vente = id_point_vente;
    return this;
  }

  public withIdPersonneMoraleMandant(
    id_personne_morale_mandant: number
  ): MandatBuilder {
    this._mandat.id_personne_morale_mandant = id_personne_morale_mandant;
    return this;
  }

  public withIdPersonneMoraleBailleur(
    id_personne_morale_bailleur: number
  ): MandatBuilder {
    this._mandat.id_personne_morale_bailleur = id_personne_morale_bailleur;
    return this;
  }

  public withIdContactMandant(id_contact_mandant: number): MandatBuilder {
    this._mandat.id_contact_mandant = id_contact_mandant;
    return this;
  }

  public withIdSirenMandant(id_siren_mandant: number): MandatBuilder {
    this._mandat.id_siren_mandant = id_siren_mandant;
    return this;
  }

  public withIdSirenBailleur(id_siren_bailleur: number): MandatBuilder {
    this._mandat.id_siren_bailleur = id_siren_bailleur;
    return this;
  }

  public withIdContactBailleur(id_contact_bailleur: number): MandatBuilder {
    this._mandat.id_contact_bailleur = id_contact_bailleur;
    return this;
  }

  public withIdFormeJuridique(id_forme_juridique: number): MandatBuilder {
    this._mandat.id_forme_juridique = id_forme_juridique;
    return this;
  }

  public withIdActivite(id_activite: number): MandatBuilder {
    this._mandat.id_activite = id_activite;
    return this;
  }

  public withIdRubriqueCessionPme(
    id_rubrique_cession_pme: number
  ): MandatBuilder {
    this._mandat.id_rubrique_cession_pme = id_rubrique_cession_pme;
    return this;
  }

  public withEtat(etat: MandatStateEnum): MandatBuilder {
    this._mandat.etat = etat;
    return this;
  }

  public withEtatMurs(etat_murs: MandatWallEnum): MandatBuilder {
    this._mandat.etat_murs = etat_murs;
    return this;
  }

  public withNumeroRegistreMandats(
    numero_registre_mandats: string
  ): MandatBuilder {
    this._mandat.numero_registre_mandats = numero_registre_mandats;
    return this;
  }

  public withExclusivite(exclusivite: ExclusiviteEnum): MandatBuilder {
    this._mandat.exclusivite = exclusivite;
    return this;
  }

  public withDateDebut(date_debut: DateTimeInterface | null): MandatBuilder {
    this._mandat.date_debut = date_debut;
    return this;
  }

  public withDateFin(date_fin: DateTimeInterface | null): MandatBuilder {
    this._mandat.date_fin = date_fin;
    return this;
  }

  public withDateArchive(
    date_archive: DateTimeInterface | null
  ): MandatBuilder {
    this._mandat.date_archive = date_archive;
    return this;
  }

  public withTitre(titre: string): MandatBuilder {
    this._mandat.titre = titre;
    return this;
  }

  public withDescription(description: string): MandatBuilder {
    this._mandat.description = description;
    return this;
  }

  public withTransaction(transaction: MandatTransactionEnum): MandatBuilder {
    this._mandat.transaction = transaction;
    return this;
  }

  public withPrixDePresentation(prix_de_presentation: number): MandatBuilder {
    this._mandat.prix_de_presentation = prix_de_presentation;
    return this;
  }

  public withHonorairesVendeur(honoraires_vendeur: number): MandatBuilder {
    this._mandat.honoraires_vendeur = honoraires_vendeur;
    return this;
  }

  public withHonorairesAcquereur(honoraires_acquereur: number): MandatBuilder {
    this._mandat.honoraires_acquereur = honoraires_acquereur;
    return this;
  }

  public withDroitsMutation(droits_mutation: number): MandatBuilder {
    this._mandat.droits_mutation = droits_mutation;
    return this;
  }

  public withTva(tva: TvaAssujetiEnum): MandatBuilder {
    this._mandat.tva = tva;
    return this;
  }

  public withOptionTva(option_tva: TvaExprimeEnum): MandatBuilder {
    this._mandat.option_tva = option_tva;
    return this;
  }

  public withEnergie(energie: number): MandatBuilder {
    this._mandat.energie = energie;
    return this;
  }

  public withClimat(climat: number): MandatBuilder {
    this._mandat.climat = climat;
    return this;
  }

  public withProcedureType(procedure_type: MandatProcedureEnum): MandatBuilder {
    this._mandat.procedure_type = procedure_type;
    return this;
  }

  public withProcedureDateLimite(
    procedure_date_limite: DateTimeInterface | null
  ): MandatBuilder {
    this._mandat.procedure_date_limite = procedure_date_limite;
    return this;
  }

  public withProcedureMandataire(procedure_mandataire: string): MandatBuilder {
    this._mandat.procedure_mandataire = procedure_mandataire;
    return this;
  }

  public withProcedureTel(procedure_tel: string): MandatBuilder {
    this._mandat.procedure_tel = procedure_tel;
    return this;
  }

  public withProcedureEmail(procedure_email: string): MandatBuilder {
    this._mandat.procedure_email = procedure_email;
    return this;
  }

  public withCommentaires(commentaires: string): MandatBuilder {
    this._mandat.commentaires = commentaires;
    return this;
  }

  public withVilcespme(vilcespme: string): MandatBuilder {
    this._mandat.vilcespme = vilcespme;
    return this;
  }

  public withCPdiffusion(CPdiffusion: string): MandatBuilder {
    this._mandat.CPdiffusion = CPdiffusion;
    return this;
  }

  public withImage(image: string): MandatBuilder {
    this._mandat.image = image;
    return this;
  }

  public withSelLeboncoin(sel_leboncoin: number): MandatBuilder {
    this._mandat.sel_leboncoin = sel_leboncoin;
    return this;
  }

  public withEnseigne(enseigne: string): MandatBuilder {
    this._mandat.enseigne = enseigne;
    return this;
  }

  public withMoraleOrPhysiqueMandant(
    morale_or_physique_mandant: MoraleOrPhysiqueEnum
  ): MandatBuilder {
    this._mandat.morale_or_physique_mandant = morale_or_physique_mandant;
    return this;
  }

  public withMoraleOrPhysiqueBailleur(
    morale_or_physique_bailleur: MoraleOrPhysiqueEnum
  ): MandatBuilder {
    this._mandat.morale_or_physique_bailleur = morale_or_physique_bailleur;
    return this;
  }

  public withCreatedAt(created_at: DateTimeInterface | null): MandatBuilder {
    this._mandat.created_at = created_at;
    return this;
  }

  public withUpdatedAt(updated_at: DateTimeInterface | null): MandatBuilder {
    this._mandat.updated_at = updated_at;
    return this;
  }

  public withDeletedAt(deleted_at: DateTimeInterface | null): MandatBuilder {
    this._mandat.deleted_at = deleted_at;
    return this;
  }

  public build(): MandatInterface {
    return { ...this._mandat };
  }
}
