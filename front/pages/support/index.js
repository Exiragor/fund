import {useEffect, useState} from "react";
import {create} from "../../api/payment";

export default () => {
    const [paymentInfo, setPaymentInfo] = useState(null);

    useEffect(() => {
        create().then(res => {
            setPaymentInfo(res.data);
            console.log(res);
            const checkout = new window.YandexCheckout({
                confirmation_token: res.data.confirmation.confirmation_token, //Токен, который перед проведением оплаты нужно получить от Яндекс.Кассы
                return_url: 'http://localhost:4000/support', //Ссылка на страницу завершения оплаты
                error_callback(error) {
                    console.error(error);
                }
            });

            checkout.render('payment-form');
        });
    }, []);

    return (
            <div className="wrapper">
                <h3 className="entry-title">Поддержка</h3>
                <div className="entry-content with-sidebar">
                    Здесь будет возможность оплаты
                </div>
                <div id="payment-form"></div>
            </div>
    );
}
