import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FirstConversationStateService } from "./first-conversation-state.service";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-first-conversation',
  templateUrl: './first-conversation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FirstConversationStateService]
})
export class FirstConversationComponent implements OnDestroy {

  private readonly DEFAULT_CHILD_URL = '/first/page-one';

  constructor(route: ActivatedRoute, router: Router) {
    console.log('Creating FirstConversationComponent');
    router.events
      .pipe(takeUntilDestroyed())
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if ((event as NavigationEnd).url === '/first') {
            console.log('Navigated to the conversation parent');
            router.navigate([this.DEFAULT_CHILD_URL]);
          }
        }
      })
    router.navigate([this.DEFAULT_CHILD_URL]);
  }

  ngOnDestroy(): void {
    console.log('Destroying FirstConversationComponent');
  }
}
