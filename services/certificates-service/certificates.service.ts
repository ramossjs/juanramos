import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Certificate } from '../../src/app/models/certificates/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private certificatesRef: AngularFirestoreCollection<Certificate>;

  constructor(private db: AngularFirestore) {
    this.certificatesRef = db.collection('certificates');
  }

  getCertificates(): AngularFirestoreCollection<Certificate> {
    return this.certificatesRef;
  }
}
