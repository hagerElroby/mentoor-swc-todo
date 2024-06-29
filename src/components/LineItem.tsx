import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toggleItem, deleteItem } from '../redux/store';

interface LineItemProps {
    id: number;
    checked: boolean;
    item: string;
}

const LineItem: React.FC<LineItemProps> = ({ id, checked, item }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

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
            <button onClick={() => dispatch(deleteItem(id))}>{t('deleteButton')}</button>
        </li>
    );
};

export default LineItem;