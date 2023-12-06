import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ProfilePage} from './pages/ProfilePage';
import {QuizPage} from './pages/QuizPage';
import {store} from './store/store'
import {Provider} from 'react-redux'
import {MainPage} from './pages/ui/MainPage/MainPage';
import {Header} from './components/Header';
import {Regeneration} from './pages/ui/Regeneration';
import {Footer} from './components/Footer';
import {Test} from './pages/ui/Test/Test';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="profile" element={<ProfilePage />} />
                        <Route path="quiz" element={<QuizPage />} />
                        <Route path="regeneration" element={<Regeneration />} />
                        <Route path="test" element={<Test />} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
