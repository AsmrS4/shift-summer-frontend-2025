import Header from '@components/Header';
import DeliveryPage from '@pages/Delivery/DeliveryMethod';
import HomePage from '@pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path='/delivery-registration'>
                        <Route path='/delivery-registration/method' element={<DeliveryPage />} />
                        <Route path='/delivery-registration/receiver' element={<DeliveryPage />} />
                        <Route path='/delivery-registration/sender' element={<DeliveryPage />} />
                        <Route path='/delivery-registration/send-from' element={<DeliveryPage />} />
                        <Route
                            path='/delivery-registration/receive-to'
                            element={<DeliveryPage />}
                        />
                        <Route path='/delivery-registration/payment' element={<DeliveryPage />} />
                        <Route path='/delivery-registration/details' element={<DeliveryPage />} />
                        <Route path='/delivery-registration/success' element={<DeliveryPage />} />
                        <Route path='/delivery-registration/error' element={<DeliveryPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
