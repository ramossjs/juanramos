import { Component } from '@angular/core';
import { InterestsService } from '../../../services/interests-service/interests.service';
import { Interest } from '../models/interests/interest.model';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  interests: Interest[] = [];

  constructor(public interestsService: InterestsService) {
    this.interestsService.getInterests().snapshotChanges().subscribe(data => {
      this.interests = data.map(change => ({
        id: change.payload.doc.id,
        ...change.payload.doc.data()
      }));
    });
  }
}
