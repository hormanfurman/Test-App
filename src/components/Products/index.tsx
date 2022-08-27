import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/products/selectors';
import { fetchProducts } from '../../redux/products/slice';
import { useAppDispatch } from '../../redux/store';

import './products.scss';

export const Products = () => {
    const dispatch = useAppDispatch();
    const { productsItems, searchQuery } = useSelector(selectProducts);

    const filteredProductsItems = productsItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className="products">
            {filteredProductsItems.map((item) => {
                return (
                    <div className="products__item" key={item.asin}>
                        <img
                            className="products__item_img"
                            src={item.img}
                            alt={item.bsr_category}
                        />
                        <div className="products__item_name">{item.name}</div>
                        <div className="products__item_price">Price: {item.price}</div>
                        <a href={item.link} className="products__item_link">
                            go to product page
                        </a>
                    </div>
                );
            })}
        </div>
    );
};
