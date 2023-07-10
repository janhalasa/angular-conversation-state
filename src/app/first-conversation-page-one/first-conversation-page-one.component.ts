import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FirstConversationStateService } from "../first-conversation/first-conversation-state.service";
import { RandomWordsService } from "../services/random-words.service";
import { take } from "rxjs";

@Component({
  selector: 'app-first-conversation-page-one',
  templateUrl: './first-conversation-page-one.component.html',
  styleUrls: ['./first-conversation-page-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstConversationPageOneComponent {
  topicName?: string;

  constructor(
    public stateService: FirstConversationStateService,
    private randomWordsService: RandomWordsService) {
  }

  addTopic() {
    if (this.topicName) {
      console.log('Adding topic: ' + this.topicName);
      this.stateService.addTopic(this.topicName);
      this.topicName = undefined;
    }
  }

  loadRandomTopics() {
    this.randomWordsService.loadRandomWords(7)
      .pipe(take(1))
      .subscribe(words => this.stateService.setTopics(words));
  }

  addRandomTopic() {
    this.randomWordsService.loadRandomWords(1)
      .pipe(take(1))
      .subscribe(words => this.stateService.addTopic(words[0]));
  }
}
