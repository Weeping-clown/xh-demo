import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

// @IonicPage()
@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(public navCtrl: NavController, public router: Router) {}

  pageJump(page) {
    //ionic跳转
    // this.navCtrl.navigateForward(page);
    // this.navCtrl.g()
    //angular跳转 通过路由参数
    // this.router.navigate(["/xh-map"], {
    //   queryParams: {
    //     id: 111,
    //     name: "xh"
    //   }
    // });
    //navigateByUrl   /page2/参数1/参数2
    this.router.navigateByUrl("/xh-map/1/2");
  }

  id: any = { a: 1, b: 2 };
  doRefresh(event) {
    this.id = JSON.stringify(this.id);
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
