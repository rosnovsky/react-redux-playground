# React Redux Playground

This project is an exercise and a refresher in `React`, `Redux` and everything in between. 

`Weather` is a fully functional app (will be deployed to `Heroku` eventually) for searching and viewing 5-day weather forecast for any number of cities. It uses all the goodness from Redux to React to 3rd party APIs.

## Here's what's going on under the hood
First, we have a React view with 3 components: `App`, `SearchBar`, `WeatherList` and `Chart`. `SearchBar` and `WeatherList` are containers, meaning that they communicate with Redux, fetching data from its back end. Redux operates on a `WeatherReducer`, which passes an action throughout the app. There's also an `action` involved, which goes to OpenWeatherMap API and retrieves the forecast object for a city passed from the `SearchBar` to `action`. `Action` passes the data to `WeatherReducer` which passes it as an app state further to `WeatherList`, where it gets rendered and where `Chart` component is called and the charts are built with the weather data. 

### Known issues

- Each city can only be added to the list once; if users adds the same city again (intentionally or not), there will be a React error in console, and the newly added city duplicate will be impossible to remove from the list
- If a query makes no sense (too long, gibberish, etc), the app will throw an error in the console and stop working