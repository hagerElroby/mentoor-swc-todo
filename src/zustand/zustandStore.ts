// src/zustandStore.ts
import create from 'zustand';

interface FilterState {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const useFilterStore = create<FilterState>((set) => ({
    searchTerm: '',
    setSearchTerm: (term: string) => set({ searchTerm: term }),
}));

export default useFilterStore;
