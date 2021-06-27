import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class MobiloComparisionService {

  showFavourites$: Observable<boolean>;
  private _showFavourites$ = new BehaviorSubject(false);

  constructor() {
    this.showFavourites$ = this._showFavourites$.asObservable();
  }

  setFavouritesState(setData: boolean) {
    this._showFavourites$.next(setData);
  }


}
