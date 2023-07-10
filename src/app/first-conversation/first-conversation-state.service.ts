import { computed, effect, Injectable, OnDestroy, signal } from "@angular/core";

/**
 * This interface makes sense only if there is more than one field that needs to be read/processed at the same time.
 * If it's just a set of independent values, it's probably easier to keep them as separate signals.
 */
export interface FirstConversationState {
  topics: string[]
}

@Injectable()
export class FirstConversationStateService implements OnDestroy {

  private state = signal<FirstConversationState>({
    topics: []
  });
  
  longTopics = computed(() => this.state().topics.filter(topic => topic.length > 20));

  constructor() {
    console.log('Creating FirstConversationStateService');
    effect(() => {
      if (this.topics().length) {
        console.log('Saving ' + this.topics().length + ' topics ...');
      }
    })
  }

  ngOnDestroy(): void {
    console.log('Destroying FirstConversationStateService');
  }

  // These methods that modify signals, could be implemented as RxJS Subjects, so other parts of the system can easily
  // react to changes, but it's usually not necessary.
  addTopic(topic: string) {
    this.state.mutate(state => {
      state.topics = [...state.topics, topic];
    });

    // Alternative approach (update instead of mutate):
    //
    // this.state.update(state => {
    //   return {
    //     ...state,
    //     topics: [...state.topics, topic]
    //   }
    // });
  }

  setTopics(topics: string[]) {
    this.state.update(state => {
      return {
        ...state,
        topics: topics
      }
    });
  }
}
