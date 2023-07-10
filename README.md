# Angular Signals

Demo application for trying Angular Signals introduced in Angular 16.

To learn about Signals, see
* https://angular.io/guide/signals
* https://github.com/angular/angular/discussions/49682

## Service based store for conversations

### Conversation

Conversation is a sequence of related application pages that share a common state. For example:
1. search form
2. search result list
3. single result detail

When you enter a conversation, you usually want a clean state and to preserve it while navigating the conversation. 
For example, when you return from a detail page to the result list, you want to see the same list as was displayed before.

In this demo application, there is one conversation implemented by `FirstConversationComponent` with two subpages. 
The conversation component contains a `router-outlet` and is a navigation parent for its subpages. 
When we leave the conversation route space, the conversation component gets destroyed along with its state service (provided by it).

A conversation can probably be implemented by an Angular module too.

### Store

Based on the video of Joshua Morony [My NEW default for state management in Angular](https://www.youtube.com/watch?v=R4Ff2bPiWh4).

This demo has one state service - `FirstConversationStateService`. This state service is based on Signals. 
It's not as sophisticated as [NGRX Component Store](https://v9.ngrx.io/guide/component-store) but it's much simpler and easier 
to implement and understand.

## How to run it

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
