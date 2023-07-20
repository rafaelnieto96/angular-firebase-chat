// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'firebasechatproject',
    appId: '1:1034596339224:web:87a079e14480c1e5e23d6d',
    storageBucket: 'firebasechatproject.appspot.com',
    apiKey: 'AIzaSyBKobXvRKP03lgXPvVZUtoKFYf4Uh6HS-k',
    authDomain: 'fir-chatproject-3b98a.firebaseapp.com',
    messagingSenderId: '1034596339224',
  },
  production: false,
  apiUrl: 'https://us-central1-get-stream-io-decoded.cloudfunctions.net',
  stream: {
    key: 'wxgsgqrws5v8'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
