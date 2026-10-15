import { Component } from '@angular/core';
import { LanguagesService } from '../../../services/languages-service/languages.service';
import { Language } from '../models/languages/language.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  languages: Language[] = [];

  constructor(public languagesService: LanguagesService) {
    this.languagesService.getLanguages().snapshotChanges().subscribe(data => {
      this.languages = data.map(change => ({
        id: change.payload.doc.id,
        ...change.payload.doc.data()
      }));
    });
  }
}
