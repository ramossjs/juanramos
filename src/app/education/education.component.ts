import { Component } from '@angular/core';
import { EducationService } from '../../../services/education-service/education.service';
import { Education } from '../models/education/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Education[] = [];

  constructor(public educationService: EducationService) {
    this.educationService.getEducation().snapshotChanges().subscribe(data => {
      this.education = data.map(change => ({
        id: change.payload.doc.id,
        ...change.payload.doc.data()
      }));
    });
  }
}
