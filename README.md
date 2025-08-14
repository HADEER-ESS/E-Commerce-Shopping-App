# React Native Developer Task: E-Commerce Shopping App
A client-side e-commerce shopping application built with **React Native**.  
Users can browse a catalog of products, view details, add items to the cart, and simulate a checkout — all without a backend API by using mock data and local storage.

# Features
**Product Catalog**
- Displays products with images, names, prices, and small descriptions.
- Pull-to-refresh support with simulated API delay.

**Product Details**
- Carousel auto-scroll for multiple images.
- Specifications and detailed descriptions.
- Add Cart button with quantity control.

**Shopping Cart**
- Add, remove, and update product quantities.
- Cart total quantity and price calculation.
- Persistent cart using `AsyncStorage`.

**Performance Optimization**
- `Map` structure for O(1) add/remove operations.
- `FlastList` for products renders at the Home and Cart screens.
- Efficient re-renders using `useCallback` and memoized components.

**Dark Mode**
- User can toggle between light and dark themes.
- Theme preference persisted in `AsyncStorage`.



# Technologies
**React Native CLI** 
- for full native access and customization.
  
**React Navigation**
- smooth navigation between screens with data passing.

**AsyncStorage**
- persistent storage for cart and theme state.

**React Context**
- lightweight state management for small-scale projects.
- **Note** Avoided Redux/Zustand due to project scale. In production, Redux Toolkit or Zustand could be introduced for scalability.


# Folder Structure
assets  -> | - root /     -> App main images
           | - products   -> application local data images
src     -> | - componant  -> Reusable UI components
           | - constant   -> Color Scheme and Main style
           | - controller -> screen bussiness handling
           | - data       -> application local data and type
           | - provider   -> state management context methods
           | - screens    -> App screens (Home, Details, Cart)
           | - stack      -> App Stack Navigation

# Notes
## Home Screen
- Simulate application first-time enter screen API call using setTimeout callback.
- Simulate pull-to-refresh using FlatList refreshController property.
- Getting data from `STORAGE` in Map form with a constant (set, get, delete) time, and storing it at the Context state in the application run first time
## Details Screen
- Adding an Auto-scroll Carousel for displaying more product Images.
- Add to Cart button, and represent the product quantity in the cart.
- increment and decrement the products' cart quantity using `product_id`, updating data in the  Map.
- Item added to Cart storage in `[id, quantity]` array form to reduce the memory usage, then get the remaining data by product ID.
## Cart Screen
- Display stored cart data by product_id, with the SUM of product quantity and cost
- Ability to change the product quantity or even delete
- Simulate `Success buy process` by processing the Cart data
