import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import App from './app/App.tsx';

createRoot(document.getElementById('root')!).render(
    <Provider store={setupStore()}>
        <App />
    </Provider>,
);
