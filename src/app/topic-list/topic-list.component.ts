import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicListComponent {

  @Input({ required: true })
  topics?: string[]
}
