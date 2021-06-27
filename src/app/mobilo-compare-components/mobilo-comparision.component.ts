import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import * as mobileData from '../../assets/handy.json';
import { MobiloComparisionService } from "./mobilo-comparision.service";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mobilo-comparision',
  templateUrl: './mobilo-comparision.component.html',
  styleUrls: ['mobilo-comparision.component.scss']
})

export class MobiloComparisionComponent implements OnInit, OnDestroy {

  constructor(private mobiloComparisionService: MobiloComparisionService) {}

  mobileComparisionData: any[] = (mobileData as any).default;
  actualMobileData: any[] = [];
  favourites = [];
  showFavourites = false;
  private $destroy = new Subject();


  ngOnInit() {
    this.actualMobileData = [...this.mobileComparisionData];
    this.mobiloComparisionService.showFavourites$
      .pipe(takeUntil(this.$destroy))
      .subscribe((showFavourites: boolean) => this.showFavourites = showFavourites);
  }

  comparision(compareParams: string) {
    switch (compareParams) {
      case 'topseller':
      case 'new':
        this.mobileComparisionData = this.actualMobileData.filter((data) => data[compareParams]);
        break;
      case 'discount':
        // To do
        break;
      case 'popular':
        this.mobileComparisionData = this.actualMobileData.filter((data) => data.rating >= 4);
        break;
    }
  }

  getDevice(image: string) {
    return '../../assets/images/phones/'+image;
  }

  addToFavourites(mobileData: any) {
    // needs improvements
    this.updateMobileData(true, mobileData.id);
    this.favourites.push(mobileData);
  }

  removeFromFavourites(mobileDataId: number) {
    this.favourites = this.favourites.filter((data) => data.id !== mobileDataId);
    this.updateMobileData(false, mobileDataId);
  }

  updateMobileData(addToFavourites: boolean, id: number) {
    this.mobileComparisionData.forEach((data) => {
      if (data.id === id) {
        data.favourite = addToFavourites;
      }
    });
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
