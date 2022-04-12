import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import AddNote from './AddNote';

function App() {
    return (
        <div>
            <Header />
            <div className='main-body'>
                <Note />
                <AddNote />
            </div>
            <Footer />
        </div>
    );
}

export default App;