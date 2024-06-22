
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import LineItem from './LineItem';
import useFilterStore from '../zustand/zustandStore';

const ItemList: React.FC = () => {
    const items = useSelector((state: RootState) => state.todos.items);
    const searchTerm = useFilterStore((state) => state.searchTerm);

    const filteredItems = items.filter((item) =>
        item.item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ul>
            {filteredItems.map((item) => (
                <LineItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default ItemList;
