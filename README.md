# ABN TV
This project was implemented using the [TVMAZE](https://www.tvmaze.com/api) open API. The user interface is combination of my ideas & the [Citonema](https://dribbble.com/shots/18107699-Citonema-Movie-Dashboard-Design) design images in dribbble. It is fully responsive and optimized for mobile and tablet devices.  Here is tried to avoid using third parties packages as much as possible in this project and implemented everything by the developer.
## Technologies:

**Framework:** Vuejs `version 3.2.25` - [docs](https://vuejs.org)

**Build Tool:** Vite `version 2.9.9` - [docs](https://vitejs.dev/)

**Test Framework:** Vitest `version: 0.16.0` - [docs](https://vitest.dev/)

## Commands:

**Install node packages:**
```
npm install
```

**Run project:**
```
npm run dev
```

**Run unit tests:**
```
npm run test
```

**Build project:**
```
npm run build
```

## Files Structure:

```
├── public                    Public folder for place public files (favicon.ico & ...)  
├── src                       Contain source codes  
│  ├── main.js                vue main file
│  ├── app.vue                Vue.js app root file
│  ├── assets                 Contain all assets that uses in the entire project
│  │  └── fonts               Contain font files (ttf, woff, ...)
│  │    └── font-icon         ABN-TV customized font icon
│  │  └── styles              Contain all style sheets
│  │  └── logo.png            Project logo
│  ├── components             Contain all UI components
│  ├── core                   Contain constants, APIs, & genral methods
│  ├── layout                 Contain project layouts & its partials
│  ├── router                 Contain all vue routes
│  └── views                  Contain all pages (Home, About, TvShows, ...)
├── tests                     Contain all automation-test related files  
│  └── mock-test-data         Contain mock data for using in test files
│  └── unit-test              Contain all unit-test files (Vitest)
├── index.html                Main index file
├── package.json              npm packages list
├── README.md                 This Document that you are reading
├── vite.config.js            Vite build tool configs
├── vitest.config.js          Vitest config file
```
