/*
import { DateTimeInterface } from '@src/shared/interaces/date-time.interface.ts/date-time.interface';

export enum SalePointCharge {
  lessor = 'lessor',
  tenant = 'tenant',
}

export interface SalePoint {
  id: number;
  id_cabinet: number;
  enseigne: string;
  url: string;
  place_id: string;
  street_number: number;
  formatted_address: string;
  type_voie: string;
  route: string;
  comp_adresse: string;
  administrative_area_level_1: string; // Département
  administrative_area_level_2: string; // Région
  postal_code: number;
  locality: string;
  latitude: number;
  longitude: number;
  surface_totale: number;
  surface_commerciale: number;
  surface_annexe: number;
  surface_bureaux: number;
  surface_terrain: number;
  surface_terrasse: number;
  lineaire: number;
  hauteur_sous_plafond: number;
  nombre_bureaux: number;
  echeance_bail: string | Date;
  depot_garantie: string;
  accessibilite_pmr: boolean;
  acces_pl: boolean;
  quai_dechargement: boolean;
  copropriete: boolean;
  foncier_a_charge: SalePointCharge;
  montant_foncier: number;
  total_produits_exploit: number;
  ca: number;
  montant_ebe: number;
  achats: number;
  variation_stock: number;
  charges_externes: number;
  loyer_annuel: number;
  charges_locatives: number;
  impots: number;
  salaires_total: number;
  salaires_exploitant: number;
  charges_sociales_total: number;
  charges_sociales_exploitant: number;
  amortissements: number;
  autres_charges: number;
  prix_negocie: number;
  hono_juridique: number;
  hono_agence: number;
  frais_agencement: number;
  stocks: number;
  bfr: number;
  apport_client: number;
  taux_interet_emprunt: number;
  retraite_ca: number;
  retraite_ca_n1: number;
  retraite_ca_n2: number;
  retraite_achats: number;
  retraite_achats_n1: number;
  retraite_achats_n2: number;
  retraite_charges_externes: number;
  retraite_charges_externes_n1: number;
  retraite_charges_externes_n2: number;
  retraite_impots: number;
  retraite_impots_n1: number;
  retraite_impots_n2: number;
  retraite_salaires: number;
  retraite_salaires_n1: number;
  retraite_salaires_n2: number;
  retraite_charges_sociales: number;
  retraite_charges_sociales_n1: number;
  retraite_charges_sociales_n2: number;
  retraite_autre_charges: number;
  retraite_autre_charges_n1: number;
  retraite_autre_charges_n2: number;
  presence_extraction: boolean;
  created_at: DateTimeInterface;
  updated_at: DateTimeInterface;
  deleted_at: DateTimeInterface;
  provision_mensuel: boolean;
  provision_tva: boolean;
  revision_annuelle: boolean;
}
*/
import {
  SalePointCharge,
  SalePointInterface,
} from '@features/sale-points/domain/entities/sale-point.interface';

export class SalePointBuilder {
  private readonly _salePoint: SalePointInterface;

  constructor() {
    this._salePoint = {
      id: 1,
      id_cabinet: 1,
      enseigne: 'Enseigne',
      url: 'Url',
      place_id: 'PlaceId',
      street_number: 1,
      formatted_address: 'FormattedAddress',
      type_voie: 'TypeVoie',
      route: 'Route',
      comp_adresse: 'CompAdresse',
      administrative_area_level_1: 'AdministrativeAreaLevel1',
      administrative_area_level_2: 'AdministrativeAreaLevel2',
      postal_code: 1,
      locality: 'Locality',
      latitude: 1,
      longitude: 1,
      surface_totale: 1,
      surface_commerciale: 1,
      surface_annexe: 1,
      surface_bureaux: 1,
      surface_terrain: 1,
      surface_terrasse: 1,
      lineaire: 1,
      hauteur_sous_plafond: 1,
      nombre_bureaux: 1,
      echeance_bail: 'EcheanceBail',
      depot_garantie: 'DepotGarantie',
      accessibilite_pmr: true,
      acces_pl: true,
      quai_dechargement: true,
      copropriete: true,
      foncier_a_charge: SalePointCharge.lessor,
      montant_foncier: 1,
      total_produits_exploit: 1,
      ca: 1,
      montant_ebe: 1,
      achats: 1,
      variation_stock: 1,
      charges_externes: 1,
      loyer_annuel: 1,
      charges_locatives: 1,
      impots: 1,
      salaires_total: 1,
      salaires_exploitant: 1,
      charges_sociales_total: 1,
      charges_sociales_exploitant: 1,
      amortissements: 1,
      autres_charges: 1,
      prix_negocie: 1,
      hono_juridique: 1,
      hono_agence: 1,
      frais_agencement: 1,
      stocks: 1,
      bfr: 1,
      apport_client: 1,
      taux_interet_emprunt: 1,
      retraite_ca: 1,
      retraite_ca_n1: 1,
      retraite_ca_n2: 1,
      retraite_achats: 1,
      retraite_achats_n1: 1,
      retraite_achats_n2: 1,
      retraite_charges_externes: 1,
      retraite_charges_externes_n1: 1,
      retraite_charges_externes_n2: 1,
      retraite_impots: 1,
      retraite_impots_n1: 1,
      retraite_impots_n2: 1,
      retraite_salaires: 1,
      retraite_salaires_n1: 1,
      retraite_salaires_n2: 1,
      retraite_charges_sociales: 1,
      retraite_charges_sociales_n1: 1,
      retraite_charges_sociales_n2: 1,
      retraite_autre_charges: 1,
      retraite_autre_charges_n1: 1,
      retraite_autre_charges_n2: 1,
      presence_extraction: true,
      created_at: null,
      updated_at: null,
      deleted_at: null,
      provision_mensuel: true,
      provision_tva: true,
      revision_annuelle: true,
    };
  }

  public withId(id: number): SalePointBuilder {
    this._salePoint.id = id;
    return this;
  }

  public withIdCabinet(id_cabinet: number): SalePointBuilder {
    this._salePoint.id_cabinet = id_cabinet;
    return this;
  }

  public withEnseigne(enseigne: string): SalePointBuilder {
    this._salePoint.enseigne = enseigne;
    return this;
  }

  public withUrl(url: string): SalePointBuilder {
    this._salePoint.url = url;
    return this;
  }

  public withPlaceId(place_id: string): SalePointBuilder {
    this._salePoint.place_id = place_id;
    return this;
  }

  public withStreetNumber(street_number: number): SalePointBuilder {
    this._salePoint.street_number = street_number;
    return this;
  }

  public withFormattedAddress(formatted_address: string): SalePointBuilder {
    this._salePoint.formatted_address = formatted_address;
    return this;
  }

  public withTypeVoie(type_voie: string): SalePointBuilder {
    this._salePoint.type_voie = type_voie;
    return this;
  }

  public withRoute(route: string): SalePointBuilder {
    this._salePoint.route = route;
    return this;
  }

  public withCompAdresse(comp_adresse: string): SalePointBuilder {
    this._salePoint.comp_adresse = comp_adresse;
    return this;
  }

  public withAdministrativeAreaLevel1(
    administrative_area_level_1: string
  ): SalePointBuilder {
    this._salePoint.administrative_area_level_1 = administrative_area_level_1;
    return this;
  }

  public withAdministrativeAreaLevel2(
    administrative_area_level_2: string
  ): SalePointBuilder {
    this._salePoint.administrative_area_level_2 = administrative_area_level_2;
    return this;
  }

  public withPostalCode(postal_code: number): SalePointBuilder {
    this._salePoint.postal_code = postal_code;
    return this;
  }

  public withLocality(locality: string): SalePointBuilder {
    this._salePoint.locality = locality;
    return this;
  }

  public withLatitude(latitude: number): SalePointBuilder {
    this._salePoint.latitude = latitude;
    return this;
  }

  public withLongitude(longitude: number): SalePointBuilder {
    this._salePoint.longitude = longitude;
    return this;
  }

  public withSurfaceTotale(surface_totale: number): SalePointBuilder {
    this._salePoint.surface_totale = surface_totale;
    return this;
  }

  public withSurfaceCommerciale(surface_commerciale: number): SalePointBuilder {
    this._salePoint.surface_commerciale = surface_commerciale;
    return this;
  }

  public withSurfaceAnnexe(surface_annexe: number): SalePointBuilder {
    this._salePoint.surface_annexe = surface_annexe;
    return this;
  }

  public withSurfaceBureaux(surface_bureaux: number): SalePointBuilder {
    this._salePoint.surface_bureaux = surface_bureaux;
    return this;
  }

  public withSurfaceTerrain(surface_terrain: number): SalePointBuilder {
    this._salePoint.surface_terrain = surface_terrain;
    return this;
  }

  public withSurfaceTerrasse(surface_terrasse: number): SalePointBuilder {
    this._salePoint.surface_terrasse = surface_terrasse;
    return this;
  }

  public withLineaire(lineaire: number): SalePointBuilder {
    this._salePoint.lineaire = lineaire;
    return this;
  }

  public withHauteurSousPlafond(
    hauteur_sous_plafond: number
  ): SalePointBuilder {
    this._salePoint.hauteur_sous_plafond = hauteur_sous_plafond;
    return this;
  }

  public withNombreBureaux(nombre_bureaux: number): SalePointBuilder {
    this._salePoint.nombre_bureaux = nombre_bureaux;
    return this;
  }

  public withEcheanceBail(echeance_bail: string | Date): SalePointBuilder {
    this._salePoint.echeance_bail = echeance_bail;
    return this;
  }

  public withDepotGarantie(depot_garantie: string): SalePointBuilder {
    this._salePoint.depot_garantie = depot_garantie;
    return this;
  }

  public withAccessibilitePmr(accessibilite_pmr: boolean): SalePointBuilder {
    this._salePoint.accessibilite_pmr = accessibilite_pmr;
    return this;
  }

  public withAccesPl(acces_pl: boolean): SalePointBuilder {
    this._salePoint.acces_pl = acces_pl;
    return this;
  }

  public withQuaiDechargement(quai_dechargement: boolean): SalePointBuilder {
    this._salePoint.quai_dechargement = quai_dechargement;
    return this;
  }

  public withCopropriete(copropriete: boolean): SalePointBuilder {
    this._salePoint.copropriete = copropriete;
    return this;
  }

  public withFoncierACharge(
    foncier_a_charge: SalePointCharge
  ): SalePointBuilder {
    this._salePoint.foncier_a_charge = foncier_a_charge;
    return this;
  }

  public withMontantFoncier(montant_foncier: number): SalePointBuilder {
    this._salePoint.montant_foncier = montant_foncier;
    return this;
  }

  public withTotalProduitsExploit(
    total_produits_exploit: number
  ): SalePointBuilder {
    this._salePoint.total_produits_exploit = total_produits_exploit;
    return this;
  }

  public withCa(ca: number): SalePointBuilder {
    this._salePoint.ca = ca;
    return this;
  }

  public withMontantEbe(montant_ebe: number): SalePointBuilder {
    this._salePoint.montant_ebe = montant_ebe;
    return this;
  }

  public withAchats(achats: number): SalePointBuilder {
    this._salePoint.achats = achats;
    return this;
  }

  public withVariationStock(variation_stock: number): SalePointBuilder {
    this._salePoint.variation_stock = variation_stock;
    return this;
  }

  public withChargesExternes(charges_externes: number): SalePointBuilder {
    this._salePoint.charges_externes = charges_externes;
    return this;
  }

  public withLoyerAnnuel(loyer_annuel: number): SalePointBuilder {
    this._salePoint.loyer_annuel = loyer_annuel;
    return this;
  }

  public withChargesLocatives(charges_locatives: number): SalePointBuilder {
    this._salePoint.charges_locatives = charges_locatives;
    return this;
  }

  public withImpots(impots: number): SalePointBuilder {
    this._salePoint.impots = impots;
    return this;
  }

  public withSalairesTotal(salaires_total: number): SalePointBuilder {
    this._salePoint.salaires_total = salaires_total;
    return this;
  }

  public withSalairesExploitant(salaires_exploitant: number): SalePointBuilder {
    this._salePoint.salaires_exploitant = salaires_exploitant;
    return this;
  }

  public withChargesSocialesTotal(
    charges_sociales_total: number
  ): SalePointBuilder {
    this._salePoint.charges_sociales_total = charges_sociales_total;
    return this;
  }

  public withChargesSocialesExploitant(
    charges_sociales_exploitant: number
  ): SalePointBuilder {
    this._salePoint.charges_sociales_exploitant = charges_sociales_exploitant;
    return this;
  }

  public withAmortissements(amortissements: number): SalePointBuilder {
    this._salePoint.amortissements = amortissements;
    return this;
  }

  public withAutresCharges(autres_charges: number): SalePointBuilder {
    this._salePoint.autres_charges = autres_charges;
    return this;
  }

  public withPrixNegocie(prix_negocie: number): SalePointBuilder {
    this._salePoint.prix_negocie = prix_negocie;
    return this;
  }

  public withHonoJuridique(hono_juridique: number): SalePointBuilder {
    this._salePoint.hono_juridique = hono_juridique;
    return this;
  }

  public withHonoAgence(hono_agence: number): SalePointBuilder {
    this._salePoint.hono_agence = hono_agence;
    return this;
  }

  public withFraisAgencement(frais_agencement: number): SalePointBuilder {
    this._salePoint.frais_agencement = frais_agencement;
    return this;
  }

  public withStocks(stocks: number): SalePointBuilder {
    this._salePoint.stocks = stocks;
    return this;
  }

  public withBfr(bfr: number): SalePointBuilder {
    this._salePoint.bfr = bfr;
    return this;
  }

  public withApportClient(apport_client: number): SalePointBuilder {
    this._salePoint.apport_client = apport_client;
    return this;
  }

  public withTauxInteretEmprunt(
    taux_interet_emprunt: number
  ): SalePointBuilder {
    this._salePoint.taux_interet_emprunt = taux_interet_emprunt;
    return this;
  }

  public withRetraiteCa(retraite_ca: number): SalePointBuilder {
    this._salePoint.retraite_ca = retraite_ca;
    return this;
  }

  public withRetraiteCaN1(retraite_ca_n1: number): SalePointBuilder {
    this._salePoint.retraite_ca_n1 = retraite_ca_n1;
    return this;
  }

  public withRetraiteCaN2(retraite_ca_n2: number): SalePointBuilder {
    this._salePoint.retraite_ca_n2 = retraite_ca_n2;
    return this;
  }

  public withRetraiteAchats(retraite_achats: number): SalePointBuilder {
    this._salePoint.retraite_achats = retraite_achats;
    return this;
  }

  public withRetraiteAchatsN1(retraite_achats_n1: number): SalePointBuilder {
    this._salePoint.retraite_achats_n1 = retraite_achats_n1;
    return this;
  }

  public withRetraiteAchatsN2(retraite_achats_n2: number): SalePointBuilder {
    this._salePoint.retraite_achats_n2 = retraite_achats_n2;
    return this;
  }

  public withRetraiteChargesExternes(
    retraite_charges_externes: number
  ): SalePointBuilder {
    this._salePoint.retraite_charges_externes = retraite_charges_externes;
    return this;
  }

  public withRetraiteChargesExternesN1(
    retraite_charges_externes_n1: number
  ): SalePointBuilder {
    this._salePoint.retraite_charges_externes_n1 = retraite_charges_externes_n1;
    return this;
  }

  public withRetraiteChargesExternesN2(
    retraite_charges_externes_n2: number
  ): SalePointBuilder {
    this._salePoint.retraite_charges_externes_n2 = retraite_charges_externes_n2;
    return this;
  }

  public withRetraiteImpots(retraite_impots: number): SalePointBuilder {
    this._salePoint.retraite_impots = retraite_impots;
    return this;
  }

  public withRetraiteImpotsN1(retraite_impots_n1: number): SalePointBuilder {
    this._salePoint.retraite_impots_n1 = retraite_impots_n1;
    return this;
  }

  public withRetraiteImpotsN2(retraite_impots_n2: number): SalePointBuilder {
    this._salePoint.retraite_impots_n2 = retraite_impots_n2;
    return this;
  }

  public withRetraiteSalaires(retraite_salaires: number): SalePointBuilder {
    this._salePoint.retraite_salaires = retraite_salaires;
    return this;
  }

  public withRetraiteSalairesN1(
    retraite_salaires_n1: number
  ): SalePointBuilder {
    this._salePoint.retraite_salaires_n1 = retraite_salaires_n1;
    return this;
  }

  public withRetraiteSalairesN2(
    retraite_salaires_n2: number
  ): SalePointBuilder {
    this._salePoint.retraite_salaires_n2 = retraite_salaires_n2;
    return this;
  }

  public withRetraiteChargesSociales(
    retraite_charges_sociales: number
  ): SalePointBuilder {
    this._salePoint.retraite_charges_sociales = retraite_charges_sociales;
    return this;
  }

  public withRetraiteChargesSocialesN1(
    retraite_charges_sociales_n1: number
  ): SalePointBuilder {
    this._salePoint.retraite_charges_sociales_n1 = retraite_charges_sociales_n1;
    return this;
  }

  public withRetraiteChargesSocialesN2(
    retraite_charges_sociales_n2: number
  ): SalePointBuilder {
    this._salePoint.retraite_charges_sociales_n2 = retraite_charges_sociales_n2;
    return this;
  }

  public withRetraiteAutreCharges(
    retraite_autre_charges: number
  ): SalePointBuilder {
    this._salePoint.retraite_autre_charges = retraite_autre_charges;
    return this;
  }

  public withRetraiteAutreChargesN1(
    retraite_autre_charges_n1: number
  ): SalePointBuilder {
    this._salePoint.retraite_autre_charges_n1 = retraite_autre_charges_n1;
    return this;
  }

  public withRetraiteAutreChargesN2(
    retraite_autre_charges_n2: number
  ): SalePointBuilder {
    this._salePoint.retraite_autre_charges_n2 = retraite_autre_charges_n2;
    return this;
  }

  public withPresenceExtraction(
    presence_extraction: boolean
  ): SalePointBuilder {
    this._salePoint.presence_extraction = presence_extraction;
    return this;
  }

  public withCreatedAt(created_at: Date): SalePointBuilder {
    this._salePoint.created_at = created_at;
    return this;
  }

  public withUpdatedAt(updated_at: Date): SalePointBuilder {
    this._salePoint.updated_at = updated_at;
    return this;
  }

  public withDeletedAt(deleted_at: Date): SalePointBuilder {
    this._salePoint.deleted_at = deleted_at;
    return this;
  }

  public withProvisionMensuel(provision_mensuel: boolean): SalePointBuilder {
    this._salePoint.provision_mensuel = provision_mensuel;
    return this;
  }

  public withProvisionTva(provision_tva: boolean): SalePointBuilder {
    this._salePoint.provision_tva = provision_tva;
    return this;
  }

  public withRevisionAnnuelle(revision_annuelle: boolean): SalePointBuilder {
    this._salePoint.revision_annuelle = revision_annuelle;
    return this;
  }

  public build(): SalePointInterface {
    return this._salePoint;
  }
}
