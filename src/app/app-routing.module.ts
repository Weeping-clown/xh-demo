import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { XhMapPage } from "./xh-map/xh-map.page";
import { TabsPage } from "./tabs/tabs.page";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./tabs/tabs.module#TabsPageModule",
    // component: TabsPage,
    // children: [
    //   {
    //     path: "xh-map",
    //     redirectTo: "xh-mapx"
    //     //  loadChildren: "./xh-map/xh-map.module#XhMapPageModule",
    //     //  component: XhMapPage,
    //   }
    // ]
  },
  { path: "xh-map/:id/:name", loadChildren: "./xh-map/xh-map.module#XhMapPageModule" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
