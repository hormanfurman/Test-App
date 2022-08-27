import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../redux/products/selectors';
import { setSearchQuery } from '../../redux/products/slice';

import './filter.scss';

export const FilterButton = () => {
    const { searchQuery } = useSelector(selectProducts);
    const dispatch = useDispatch();

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return (
        <div className="search">
            <input
                onChange={onChangeInput}
                value={searchQuery}
                className="search__input"
                placeholder="Search for product by name"
            />
        </div>
    );
};
