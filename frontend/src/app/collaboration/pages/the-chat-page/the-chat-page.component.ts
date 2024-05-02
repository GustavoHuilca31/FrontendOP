import { Component } from '@angular/core';
import {NavbarContentComponent} from "../../../public/components/navbar-content/navbar-content.component";
import {FooterContentComponent} from "../../../public/components/footer-content/footer-content.component";
import {TheChatSectionComponent} from "../../components/the-chat-section/the-chat-section.component";

@Component({
  selector: 'the-chat-page',
  standalone: true,
  imports: [
    NavbarContentComponent,
    FooterContentComponent,
    TheChatSectionComponent
  ],
  templateUrl: './the-chat-page.component.html',
  styleUrl: './the-chat-page.component.css'
})
export class TheChatPageComponent {

}
