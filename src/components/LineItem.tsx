// src/components/LineItem.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleItem, deleteItem } from '../redux/store';

interface LineItemProps {
    id: number;
    checked: boolean;
    item: string;
}

const LineItem: React.FC<LineItemProps> = ({ id, checked, item }) => {
    const dispatch = useDispatch();

    return (
        <li className='item'>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => dispatch(toggleItem(id))}
            />
            <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
                {item}
            </span>
            <button onClick={() => dispatch(deleteItem(id))}>Delete</button>
        </li>
    );
};

export default LineItem;
