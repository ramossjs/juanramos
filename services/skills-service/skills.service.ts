import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Skill } from '../../src/app/models/skills/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsRef: AngularFirestoreCollection<Skill>;

  constructor(private db: AngularFirestore) {
    this.skillsRef = db.collection('skills');
  }

  getSkills(): AngularFirestoreCollection<Skill> {
    return this.skillsRef;
  }
}
