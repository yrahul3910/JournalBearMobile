# JournalBear Mobile

**Note: this is still in development.**  

This project was ejected from a CRNA app. The project uses the `yarn` package manager. To run on a physical device (Android), connect your phone to the computer via the MTP protocol, enable USB debugging, and make sure the RSA keys are exchanged. Then, 

```
yarn
react-native link
./node_modules/.bin/rn-nodeify --hack --install
react-native run-android
```

If the app reports a 500 error, the server needs to be run manually. To do this, run  

```
fuser 8081/tcp
```

and kill the process you get. If you get errors with `rn-nodeify`, you might need to upgrade your `npm` version, because the 5.6 LTS version seems to have a bug where the program deletes itself. Use the latest version instead.