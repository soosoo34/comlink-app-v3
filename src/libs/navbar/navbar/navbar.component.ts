import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

interface NavLevel {
  id: number;
  isOpen: boolean;
  name: string;
  subLevels?: NavLevel[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          left: '0',
        })
      ),
      state(
        'closed',
        style({
          left: '-300px',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100),
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class NavbarComponent {
  menuState = 'closed';
  subLevelState = 'closed';
  levels: NavLevel[] = [
    {
      id: 1,
      isOpen: false,
      name: 'Mandats',
      subLevels: [
        { id: 3, isOpen: false, name: 'Mandats actifs' },
        { id: 4, isOpen: false, name: 'Fichier de prospection' },
        { id: 5, isOpen: false, name: 'Bailleur' },
        { id: 6, isOpen: false, name: 'Créer un pré-mandat' },
        { id: 7, isOpen: false, name: 'Créer une fiche de prospection' },
      ],
    },
    {
      id: 8,
      isOpen: false,
      name: 'Acquéreur',
      subLevels: [
        { id: 3, isOpen: false, name: 'Mes acquéreurs' },
        { id: 4, isOpen: false, name: 'Nos acquéreurs' },
        { id: 4, isOpen: false, name: 'Créer un acquéreur' },
      ],
    },
    {
      id: 3,
      isOpen: false,
      name: 'Affaires',
      subLevels: [
        { id: 3, isOpen: false, name: 'Mes affaires' },
        { id: 4, isOpen: false, name: 'Nos affaires' },
        { id: 4, isOpen: false, name: 'Créer une affaire' },
      ],
    },
  ];

  animationState = 'closed';
  animationSubLevelState = 'closed';
  currentLevel: NavLevel | undefined;

  toggleMenu() {
    this.animationState = this.animationState === 'open' ? 'closed' : 'open';
    console.log(this.animationState);
  }

  openLevel(level: NavLevel) {
    this.currentLevel = level;
    this.animationSubLevelState = 'open';
    console.log(this.animationSubLevelState);
  }

  closeSubLevel(level: NavLevel) {
    if (level.subLevels) {
      level.isOpen = false;
      for (const subLevel of level.subLevels) {
        subLevel.isOpen = false;
      }
      this.animationSubLevelState = 'closed'; // Ferme les sous-menus
      console.log(this.animationSubLevelState);
    }
  }
}
