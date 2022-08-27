export type Products = {
    img: string;
    asin: string;
    price: string;
    bsr_category: string;
    link: string;
    name: string;
};

export type productsSliceState = {
    productsItems: Products[];
    searchQuery: string;
};
