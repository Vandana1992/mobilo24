import { Component } from "@angular/core";
import { MobiloComparisionService } from "../mobilo-comparision.service";

@Component({
  selector: 'mobilo-compare-header',
  templateUrl: './mobilo-compare-header.component.html',
  styleUrls: ['mobilo-compare-header.component.scss']
})

export class MobiloCompareHeaderComponent {

  constructor(private mobiloComparisionService: MobiloComparisionService) {}

  showFavourites() {
    this.mobiloComparisionService.setFavouritesState(true);
  }

  goToHome() {
    this.mobiloComparisionService.setFavouritesState(false);
  }
}
