import React from "react";
import Products from "../pages/products";
import GalleryPage from "../pages/gallery";
import Vendors from "../pages/vendors";
import Test from "../pages/test";
import MainPage from "../pages/main.page";

const ComponentLoader = ({sectionId}) => {
    switch (sectionId) {
        case 1:
            return <MainPage />
        case 2:
            return <Products />
        case 3:
            return <GalleryPage />
        case 4:
            return <Vendors />
        default :
            return <MainPage />
    }
}

export  default ComponentLoader;