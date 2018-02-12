import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TitleComponent} from './title/title.component';
import {KingdomComponent} from './kingdom/kingdom.component';
import {KingdomCreatorComponent} from './kingdom-creator/kingdom-creator.component';
import {GameScreenComponent} from './game-screen/game-screen.component';

const routes: Routes = [
	{path: '', redirectTo: '/title', pathMatch:'full'},
	{path: 'title', component: TitleComponent},
	{path: 'game', component: GameScreenComponent},
	{path: 'kingdom-creator', component:KingdomCreatorComponent}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
