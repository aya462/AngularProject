import { Component } from '@angular/core';

export interface UniteCours {
  nom: string;
  coef: number;
}

@Component({
  selector: 'app-mes-cours',
  templateUrl: './mes-cours.html',
  styleUrls: ['./mes-cours.css'],
})
export class MesCours {
  titre: string = 'angular';
  UE: UniteCours[] = [
    { nom: 'js', coef: 1 },
    { nom: 'ionic', coef: 2 },
  ];
}
