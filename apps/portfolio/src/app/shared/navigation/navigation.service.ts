import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {

  private _stateNav = new BehaviorSubject<boolean>(true);
  readonly stateNav$ = this._stateNav.asObservable();

  public toggleNavigation() {
    this._stateNav.next(!this._stateNav.value);
  }
  public closeNavigation() {
    this._stateNav.next(false);
  }
  public openNavigation() {
    this._stateNav.next(true);
  }

}
