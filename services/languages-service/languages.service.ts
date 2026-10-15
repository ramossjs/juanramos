import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Language } from '../../src/app/models/languages/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private languagesRef: AngularFirestoreCollection<Language>;

  constructor(private db: AngularFirestore) {
    this.languagesRef = db.collection('languages');
  }

  getLanguages(): AngularFirestoreCollection<Language> {
    return this.languagesRef;
  }
}
