
import React from 'react';
import useFilterStore from '../zustand/zustandStore';

const SearchItem: React.FC = () => {
    const searchTerm = useFilterStore((state) => state.searchTerm);
    const setSearchTerm = useFilterStore((state) => state.setSearchTerm);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search items"
        />
        </form>
    );
};

export default SearchItem;
