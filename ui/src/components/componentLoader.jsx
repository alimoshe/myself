import React from "react";
import Products from "../pages/products";
import GalleryPage from "../pages/gallery";
import Vendors from "../pages/vendors";

const ComponentLoader = ({sectionId}) => {
    switch (sectionId) {
        case 1:
            return <Products />
        case 2:
            return <GalleryPage />
        case 3:
            return <Vendors />
        default :
            return <Products />
    }
}

export  default ComponentLoader;