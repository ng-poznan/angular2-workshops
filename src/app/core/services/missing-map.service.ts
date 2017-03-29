import { Injectable } from '@angular/core';

import { UsersService } from './users.service';

@Injectable()
export class MissingMapService {

  constructor(
    private usersServ: UsersService,
    private isVaderPresent: boolean
  ) { }

  askForMissingPiece(): string {
    return this.usersServ.currentUser.name === 'Princess Leia' && !this.isVaderPresent ?
      'R2-D2 has a copy of the map!'
      :
      'I\'m sure that it\'s in another galaxy :-)';
  }
}

export function MissingMapFactory(usersServ) {
  return new MissingMapService(usersServ, false);
}
