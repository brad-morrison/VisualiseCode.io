import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import ProductService from '../service/ProductService';
import PhotoService from '../service/PhotoService';

export const MediaDemo = () => {

    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);
    const galleriaResponsiveOptions = [
        {
            breakpoint: "1024px",
            numVisible: 5,
        },
        {
            breakpoint: "960px",
            numVisible: 4,
        },
        {
            breakpoint: "768px",
            numVisible: 3,
        },
        {
            breakpoint: "560px",
            numVisible: 1,
        },
    ];
    const carouselResponsiveOptions = [
        {
            breakpoint: "1024px",
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: "768px",
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: "560px",
            numVisible: 1,
            numScroll: 1,
        },
    ];

    useEffect(() => {
        const productService = new ProductService();
        productService.getProductsSmall().then((products) => setProducts(products));

        const photoService = new PhotoService();
        photoService.getImages().then((images) => setImages(images));
    }, []);

    const carouselItemTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img src={`assets/demo/images/product/${product.image}`} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="p-mb-1">
                            {product.name}
                        </h4>
                        <h6 className="p-mt-0 p-mb-3">${product.price}</h6>
                        <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span>
                        <div className="car-buttons p-mt-5">
                            <Button type="button" className="p-button p-button-rounded p-mr-2" icon="pi pi-search"></Button>
                            <Button type="button" className="p-button-success p-button-rounded p-mr-2" icon="pi pi-star"></Button>
                            <Button type="button" className="p-button-help p-button-rounded" icon="pi pi-cog"></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const galleriaItemTemplate = (item) => <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    const galleriaThumbnailTemplate = (item) => <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />

    return (
        <div className="p-grid p-fluid media-demo">
            <div className="p-col-12">
                <div className="card">
                    <h5>Carousel</h5>
                    <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={carouselResponsiveOptions} itemTemplate={carouselItemTemplate}></Carousel>
                </div>
            </div>

            <div className="p-col-12">
                <div className="card">
                    <h5>Galleria</h5>
                    <Galleria value={images} responsiveOptions={galleriaResponsiveOptions} numVisible={7} circular style={{ maxWidth: '800px', margin: 'auto' }}
                        item={galleriaItemTemplate} thumbnail={galleriaThumbnailTemplate}></Galleria>
                </div>
            </div>
        </div>
    );
}
