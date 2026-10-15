import { Component } from '@angular/core';
import { CertificatesService } from '../../../services/certificates-service/certificates.service';
import { Certificate } from '../models/certificates/certificate.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certificates: Certificate[] = [];

  constructor(public certificatesService: CertificatesService) {
    this.certificatesService.getCertificates().snapshotChanges().subscribe(data => {
      this.certificates = data.map(change => ({
        id: change.payload.doc.id,
        ...change.payload.doc.data()
      }));
    });
  }
}
