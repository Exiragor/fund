import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import {create} from '../../api/payment';

const PriceInput = ({ value = {}, onChange }) => {
    const [number, setNumber] = useState(0);

    const triggerChange = changedValue => {
        if (onChange) {
            onChange({
                number,
                ...value,
                ...changedValue,
            });
        }
    };

    const onNumberChange = e => {
        const newNumber = parseInt(e.target.value || 0, 10);

        if (Number.isNaN(number)) {
            return;
        }

        if (!('number' in value)) {
            setNumber(newNumber);
        }

        triggerChange({
            number: newNumber,
        });
    };

    return (
          <Input
              className="custom-price-input"
              type="text"
              value={value.number || number}
              onChange={onNumberChange}
              suffix="РУБ"
          />
    );
};

const SupportForm = () => {
    const [isLoading, setLoading] = useState(false);
    const [paymentInfo, setPaymentInfo] = useState(null);

    const onFinish = values => {
        setLoading(true);
        create(values.price.number)
            .then(res => {
                if (res.data && res.data.confirmation) {
                    setPaymentInfo(res.data);

                    const checkout = new window.YandexCheckout({
                        confirmation_token: res.data.confirmation.confirmation_token, //Токен, который перед проведением оплаты нужно получить от Яндекс.Кассы
                        return_url: 'https://xn--80aap3adkp6cxd.xn--p1ai/', //Ссылка на страницу завершения оплаты
                        error_callback(error) {
                            console.error(error);
                        },
                        customization: {
                            colors: {
                                controlPrimary: '#e31d23',
                                controlPrimaryContent: '#FFFFFF'
                            }
                        },
                    });

                    checkout.render('payment-form');
                }
            });
    };

    const checkPrice = (rule, value) => {
        if (value.number > 99) {
            return Promise.resolve();
        }

        return Promise.reject('Минимальная сумма: 100 руб.');
    };

    return (
        <div>
            {!paymentInfo &&
                <Form
                    name="customized_form_controls"
                    onFinish={onFinish}
                    size="large"
                    initialValues={{
                        price: {
                            number: 300,
                        },
                    }}
                >
                    <Form.Item>
                        <div className="text-black">
                            <p className="text-bold">Дорогие друзья!</p>
                            <p>Ваши пожертвования пойдут на выпуск музыкальных пособий для детских садов, школ, детских домов; на  организацию Благотворительных концертов, духовно-патриотических фестивалей, флешмобов, мастер-классов; на реализацию социально-значимых программ.</p>
                            <p>
                                Наша Цель – творческое единение поколений, оздоровление общества и спасение «Нашей песни» от уничтожения… <br/>
                                Спасибо за участие.<br/>
                                Да хранит Вас Господь!
                            </p>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="price"
                        className="custom-price-input"
                        label="Размер пожертвования"
                        rules={[
                            {
                                validator: checkPrice,
                            },
                        ]}
                    >
                        <PriceInput/>
                    </Form.Item>
                    <Form.Item className="support-button-continue">
                        <Button type="danger" htmlType="submit" shape="round"  loading={isLoading} style={{width: '200px'}}>
                            Пожертвовать
                        </Button>
                    </Form.Item>
                    <Form.Item className="text-cursive">Нажимая на кнопку «Пожертвовать», вы принимаете условия публичной оферты и даете <a className="text-blue" href="/docs/download.docx" target="_blank">согласие на обработку своих персональных данных </a>
                    </Form.Item>
                </Form>
            }
            {paymentInfo && <div id="payment-form" />}
        </div>
    );
};

// const SupportForm = () => {
//     const [emailSubmitted, setEmailSubmitted] = useState(false);
//     const [paymentInfo, setPaymentInfo] = useState(null);
//
//     const inputs = [{
//         type: 'text',
//         name: 'amount',
//         placeholder: 'Введите сумму, руб',
//         className: 'ask_input',
//         errorClass: 'errors'
//     }];
//
//     return (
//         <div className="ask-form">
//             {emailSubmitted && <div className="contact_message">Вы успешно подписаны на наши новости!</div>}
//             {!emailSubmitted && <Formik
//                 initialValues={{amount: ''}}
//                 validationSchema={supportSchema}
//                 onSubmit={async (values, { setSubmitting }) => {
//                     create()
//                         .then(res => {
//
//                         })
//                         .catch(err => console.error(err));
//                     let res = await create(values.amount);
//                     if (res.data && res.data.confirmation) {
//                         setPaymentInfo(res.data);
//
//                         const checkout = new window.YandexCheckout({
//                             confirmation_token: res.data.confirmation.confirmation_token, //Токен, который перед проведением оплаты нужно получить от Яндекс.Кассы
//                             return_url: 'http://localhost:4000/support', //Ссылка на страницу завершения оплаты
//                             error_callback(error) {
//                                 console.error(error);
//                             }
//                         });
//
//                         checkout.render('payment-form');
//                     }
//                     setSubmitting(false);
//                 }}
//             >
//                 {({ isSubmitting }) => (
//                     <Form>
//                         <div className="ask-div-input">
//                             {inputs.map((input, index) => (
//                                 <div className="contact" key={index}>
//                                     <Field
//                                         as={input.field}
//                                         type={input.type}
//                                         name={input.name}
//                                         placeholder={input.placeholder}
//                                         className={input.className} />
//                                     <ErrorMessage
//                                         name={input.name}
//                                         component="div"
//                                         className={input.errorClass} />
//                                 </div>
//                             ))}
//                             <button type="submit" disabled={isSubmitting} className="submit_send submit_send--email button--red">
//                                 Далее
//                             </button>
//                         </div>
//                     </Form>
//                 )}
//             </Formik>}
//             <div id="payment-form"></div>
//         </div>
//     );
// };

export default SupportForm;
