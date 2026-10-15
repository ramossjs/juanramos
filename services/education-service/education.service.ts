import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Education } from '../../src/app/models/education/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationRef: AngularFirestoreCollection<Education>;

  constructor(private db: AngularFirestore) {
    this.educationRef = db.collection('education');
  }

  getEducation(): AngularFirestoreCollection<Education> {
    return this.educationRef;
  }
}
