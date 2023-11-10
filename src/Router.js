import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Todo from './Todo';
import Error from './Error';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} errorElement={<Error />}/>
                <Route path="/todo" element={<Todo />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

const RouterV2 = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />
    },
    {
        path: '/todo',
        element: <Todo />
    }
]);

export default Router;