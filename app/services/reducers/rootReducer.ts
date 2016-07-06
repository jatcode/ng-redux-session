import {combineReducers} from 'redux';
import {storiesReducer} from "./storiesReducer.ts";
import {sprintReducer} from "./sprintReducer.ts";
import {stepsReducer} from "./stepsReducer.ts";
import {addressReducer} from "./addressReducer.ts";
import {notificationReducer} from "./notificationReducer.ts";

rootReducerConfig.$inject = ['$ngReduxProvider'];

function rootReducerConfig($ngReduxProvider) {
    var reducer = combineReducers({
        stories: storiesReducer,
        sprint: sprintReducer,
        steps: stepsReducer,
        notification: notificationReducer,
        address:addressReducer
    });

    $ngReduxProvider.createStoreWith(reducer, [
        'thunkMiddleware',
        'promiseMiddleware',
        'loggerMiddleware'
    ]);
}

export {rootReducerConfig};
