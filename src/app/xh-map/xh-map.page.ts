import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-xh-map",
  templateUrl: "./xh-map.page.html",
  styleUrls: ["./xh-map.page.scss"]
})
export class XhMapPage implements OnInit {
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    let id = "";
    //第一种 .路由快照
    // id = this.route.snapshot.paramMap.get('id');
    //第二种 2.路由订阅
    this.route.params.subscribe((params: Params) => {
      console.log(params);
    });
    // 3.多个参数的时候
    // this.route.queryParams.subscribe(queryParams => {
    //   console.log(queryParams);
    // });
  }

  goBack(): void {
    this.location.back();
  }
}
