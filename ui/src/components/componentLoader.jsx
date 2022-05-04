import React from "react";
import Products from "../pages/products";
import GalleryPage from "../pages/gallery";
import Vendors from "../pages/vendors";
import Test from "../pages/test";

const ComponentLoader = ({sectionId}) => {
    switch (sectionId) {
        case 1:
            return <Products />
        case 2:
            return <GalleryPage />
        case 3:
            return <Test />
        default :
            return <Products />
    }
}

export  default ComponentLoader;