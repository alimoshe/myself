import React from "react";
import Products from "../pages/products";
import GalleryPage from "../pages/gallery";

const ComponentLoader = ({sectionId}) => {
    switch (sectionId) {
        case 1:
            return <Products />
        case 2:
            return <GalleryPage />
        default :
            return <Products />
    }
}

export  default ComponentLoader;