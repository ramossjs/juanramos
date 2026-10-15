import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Interest } from '../../src/app/models/interests/interest.model';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  private interestsRef: AngularFirestoreCollection<Interest>;

  constructor(private db: AngularFirestore) {
    this.interestsRef = db.collection('interests');
  }

  getInterests(): AngularFirestoreCollection<Interest> {
    return this.interestsRef;
  }
}
