import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import ItemList from './components/ItemList';
import Footer from './components/Footer';


const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className='App'>
                <Header />
                <AddItem />
                <SearchItem />
                <main>
                  <ItemList />
                </main>
                <Footer />
            </div>
        </Provider>
    );
};

export default App
