import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {ROUTES_ENUM} from "./constants/routing.constants";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {ChitChatOverviewComponent} from "./components/chit-chat-overview/chit-chat-overview.component";
import {ChitChatFormComponent} from "./components/chit-chat-form/chit-chat-form.component";

const routes: Routes = [
  // main
  {path: ROUTES_ENUM.Dashboard, component: DashboardComponent},
  {path: ROUTES_ENUM.Info, component: InfoComponent},
  {path: ROUTES_ENUM.Login, component: LoginComponent},
  {path: ROUTES_ENUM.Profile, component: ProfileComponent},
  {path: ROUTES_ENUM.Admin, component: AdminComponent},
  // projects
  {path: ROUTES_ENUM.ChitChatOverview, component: ChitChatOverviewComponent},
  {path: ROUTES_ENUM.ChitChatForm, component: ChitChatFormComponent},
  {path: ROUTES_ENUM.ChitChatForm + "/:id", component: ChitChatFormComponent},
  // default
  {path: "**", redirectTo: "dashboard"},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
