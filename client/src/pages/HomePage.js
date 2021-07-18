import React from "react";

import {HomeInfo, FeaturedProducts, SalePromotion,HomeCategories } from "../components/";

const HomePage = () => {
  return (
    <main>
      <FeaturedProducts />
      {/* ShopHeader Section */}
      <SalePromotion />
      <HomeCategories/>
      <HomeInfo/>
    </main>
  );
};

export default HomePage;
