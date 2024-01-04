import { ContactInterface } from '@features/contacts/domain/entities/contacts.interface';
import { Observable } from 'rxjs';

export abstract class ContactsApiPort {
  abstract getContacts(): Observable<ContactInterface>;
}
