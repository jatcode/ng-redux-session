import 'angular';
import 'angular-resource';
import 'ng-redux';

import {HeaderComponent} from "./components/header/header.component.ts";
import {MainComponent} from "./components/main/main.component.ts";
import {MainService} from "./components/main/main.service.ts";
import {MainConstant} from "./components/main/main.constant.ts";
import {StoryComponent} from "./components/story/story.component.ts";
import {StoryPointsComponent} from "./components/story/storyPoints.component.ts";
import {rootReducerConfig} from "./config/rootReducer.ts";
import {NotificationComponent} from "./components/notification/notification.component.ts";
import {SprintComponent} from "./components/sprint/sprint.component.ts";

var app = angular.module('app', ['ngRedux']);

// Components
app.component('headerComponent', HeaderComponent);
app.component('notificationComponent', NotificationComponent);
app.component('mainComponent', MainComponent);
app.component('sprint', SprintComponent);
app.component('story', StoryComponent);
app.component('storyPoints', StoryPointsComponent);

// Services
app.factory('mainService', MainService);

// Constants
app.constant('mainConstant', MainConstant);

// Config
app.config(rootReducerConfig);
