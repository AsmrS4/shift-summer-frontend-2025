import Header from '@components/Header';
import DeliveryCreateDetailsPage from '@pages/Delivery/DeliveryDetails';
import DeliveryPage from '@pages/Delivery/DeliveryMethod';
import DeliveryPaymentPage from '@pages/Delivery/DeliveryPaymentPage';
import DeliveryReceiverPage from '@pages/Delivery/DeliveryReceiver';
import DeliveryReceiveToPage from '@pages/Delivery/DeliveryReceiveTo';
import DeliverySenderPage from '@pages/Delivery/DeliverySender';
import DeliverySendFromPage from '@pages/Delivery/DeliverySendFrom';
import { ErrorPage, ServerErrorPage } from '@pages/ErrorPage';
import HomePage from '@pages/Home';
import LoginPage from '@pages/Login';
import ProfilePage from '@pages/Profile';
import { ErrorCreatedOrderPage, SuccessCreatedOrderPage } from '@pages/StatusPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/delivery-registration'>
                        <Route path='/delivery-registration/method' element={<DeliveryPage />} />

                        <Route
                            path='/delivery-registration/receiver'
                            element={<DeliveryReceiverPage />}
                        />
                        <Route
                            path='/delivery-registration/sender'
                            element={<DeliverySenderPage />}
                        />
                        <Route
                            path='/delivery-registration/send-from'
                            element={<DeliverySendFromPage />}
                        />
                        <Route
                            path='/delivery-registration/receive-to'
                            element={<DeliveryReceiveToPage />}
                        />
                        <Route
                            path='/delivery-registration/payment'
                            element={<DeliveryPaymentPage />}
                        />
                        <Route
                            path='/delivery-registration/details'
                            element={<DeliveryCreateDetailsPage />}
                        />
                        <Route
                            path='/delivery-registration/success'
                            element={<SuccessCreatedOrderPage />}
                        />
                        <Route
                            path='/delivery-registration/error'
                            element={<ErrorCreatedOrderPage />}
                        />
                    </Route>
                    <Route path='/sign-in' element={<LoginPage />} />
                    <Route path='/server-error' element={<ServerErrorPage />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
