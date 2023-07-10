import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FirstConversationStateService } from "../first-conversation/first-conversation-state.service";

@Component({
  selector: 'app-first-conversation-page-two',
  templateUrl: './first-conversation-page-two.component.html',
  styleUrls: ['./first-conversation-page-two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstConversationPageTwoComponent {

  constructor(public stateService: FirstConversationStateService) {
  }
}
