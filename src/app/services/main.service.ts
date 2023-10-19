import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  getData() {
    return [1, 2, 3, 4];
  }
}
