import React from "react";

import {HomeInfo, FeaturedProducts, SalePromotion,HomeCategories } from "../components/";

const HomePage = () => {
  return (
    <main>
      <SalePromotion />
      <HomeCategories/>
      <FeaturedProducts />
      {/* ShopHeader Section */}
      <HomeInfo/>
    </main>
  );
};

export default HomePage;
