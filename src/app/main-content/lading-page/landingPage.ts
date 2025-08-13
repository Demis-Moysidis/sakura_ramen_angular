import { Component } from "@angular/core";
import { Navbar } from "./navbar/navbar";

@Component({
    selector: 'app-landing-page',
    imports: [Navbar],
    templateUrl: './landingPage.html',
    styleUrls: ['./landingPage.scss'],
})
export class LandingPage {

}