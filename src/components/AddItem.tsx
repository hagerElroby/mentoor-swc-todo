// src/components/AddItem.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/store';

const AddItem: React.FC = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addItem(input));
            setInput('');
        }
    };

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new item"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddItem;
