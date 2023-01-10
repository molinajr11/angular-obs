import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class DataService {
  nombre$ = new EventEmitter<string>();
  constructor() {}
}
