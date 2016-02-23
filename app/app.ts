import 'angular';
import 'ng-redux';

import {MainComponent} from "./components/main/main.component.ts";
import {HeaderComponent} from "./components/header/header.component.ts";
import {SprintComponent} from "./components/sprint/sprint.component.ts";
import {StoryComponent} from "./components/story/story.component.ts";
import {NotificationComponent} from "./components/notification/notification.component.ts";
import {MainConstant} from "./components/main/main.constant.ts";
import {MainService} from "./components/main/main.service.ts";
import {rootReducerConfig} from "./services/reducers/rootReducer.ts";
import {StoriesActions} from "./services/actions/storiesActions.ts";
import {PromiseMiddleware} from "./services/middleware/promiseMiddleware.ts";
import {LoggerMiddleware} from "./services/middleware/loggerMiddleware.ts";
import {ThunkMiddleware} from "./services/middleware/thunkMiddleware.ts";

var app = angular.module('app', ['ngRedux']);

// Components
app.component('headerComponent', HeaderComponent);
app.component('notificationComponent', NotificationComponent);
app.component('mainComponent', MainComponent);
app.component('sprint', SprintComponent);
app.component('story', StoryComponent);

// Services
app.factory('mainService', MainService);

// Actions
app.factory('storiesActions', StoriesActions);

// Middleware
app.factory('promiseMiddleware', PromiseMiddleware);
app.factory('loggerMiddleware', LoggerMiddleware);
app.factory('thunkMiddleware', ThunkMiddleware);

// Constants
app.constant('mainConstant', MainConstant);

// Config
app.config(rootReducerConfig);
