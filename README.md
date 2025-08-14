This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on the first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

### Technologies
# @react-navigation 
to facilitate navigation between screens and send data in route

# @react-native-async-storage
handling the persistence of cart data and application theme in different application lifecycle stages

# useContext (Context)
lightweight statemanagement for a small-scale project, simpler in use with AsyncStorage to handle application state.
In a production-scale e-commerce app, I would consider Redux Toolkit or Zustand for scalability and better middleware support.


### Notes
# Home Screen
- Simulate application first-time enter screen API call using setTimeout callback.
- Simulate pull-to-refresh using FlatList refreshController property.
- Getting data from `STORAGE` in Map form with a constant (set, get, delete) time, and storing it at the Context state in the application run first time
# Details Screen
- Adding an Auto-scroll Carousel for displaying more product Images.
- Add to Cart button, and represent the product quantity in the cart.
- increment and decrement the products' cart quantity using `product_id`, updating data in the  Map.
- Item added to Cart storage in `[id, quantity]` array form to reduce the memory usage, then get the remaining data by product ID.
# Cart Screen
- Display stored cart data by product_id, with the SUM of product quantity and cost
- Ability to change the product quantity or even delete
- Simulate `Success buy process` by processing the Cart data
