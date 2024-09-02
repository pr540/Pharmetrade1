import { configureStore, createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: { loading: false,TopMargin : 122 },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setTopMargin(state,action)
    {
      state.TopMargin=action.payload;
    },
  },
});
const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(
        (item) => item.cartId !== action.payload.id
      );
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { wishlist: [] },
  reducers: {
    addToWishList(state, action) {
      state.wishlist.push(action.payload);
    },
    removeFromWishList(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.wishListId !== action.payload.wishListId
      );
    },
    setWishList(state, action) {
      state.wishlist = action.payload;
    },
    clearWishList(state) {
      state.wishlist = [];
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, businessInfo: null ,menuItems:null},
  reducers: {
    setUser(state, action) {
      state.user = action.payload.customerDetails;
      state.businessInfo = action.payload.businessInfo;
    },
    setMenuItems(state,action)
    {
      state.menuItems = action.payload;
    },
    clearUser(state) {
      state.user = null;
      state.businessInfo=null;
    },
  },
});
const initialProductsState = {
  Products: [],
  rxProducts: [],
  otcProducts: [],
  recentSoldProducts: [],
  productsBySeller: [],
  productById: null,
};

const productsSlice = createSlice({
  name: "product",
  initialState: initialProductsState,
  reducers: {
    setProducts(state, action) {
      state.Products = action.payload;
    },
    setRxProducts(state, action) {
      state.rxProducts = action.payload;
    },
    setOtcProducts(state, action) {
      state.otcProducts = action.payload;
    },
    setRecentSoldProducts(state, action) {
      state.recentSoldProducts = action.payload;
    },
    setProductsBySeller(state, action) {
      const { sellerId, products } = action.payload;
      state.productsBySeller[sellerId] = products;
    },
    setProductById(state, action) {
      state.productById = action.payload;
    },
    addProduct(state, action) {
      state.Products.push(action.payload);
    },
    editProduct(state, action) {
      const { productId, updatedProduct } = action.payload;
      state.Products = state.Products.map((product) =>
        product.id === productId ? updatedProduct : product
      );
    },
  },
});

const bannerSlice = createSlice({
  name: "banner",
  initialState: { banner: [] },
  reducers: {
    addBanner(state, action) {
      state.banner.push(action.payload);
    },
    removeBanner(state, action) {
      state.cart = state.cart.filter(
        (item) => item.bannerId !== action.payload.id
      );
    },
    setBanner(state, action) {
      state.banner = action.payload;
    },
    clearCart(state) {
      state.banner = [];
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    product: productsSlice.reducer,
    banner: bannerSlice.reducer,
    wishlist: wishlistSlice.reducer,
    home:homeSlice.reducer,
  },
});

export default store;
