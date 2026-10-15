import { Component } from '@angular/core';
import { SkillsService } from '../../../services/skills-service/skills.service';
import { Skill } from '../models/skills/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [];

  constructor(public skillsService: SkillsService) {
    this.skillsService.getSkills().snapshotChanges().subscribe(data => {
      this.skills = data.map(change => ({
        id: change.payload.doc.id,
        ...change.payload.doc.data()
      }));
    });
  }
}
