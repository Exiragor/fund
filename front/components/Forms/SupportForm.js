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
              type="text"
              value={value.number || number}
              onChange={onNumberChange}
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
                        return_url: 'http://localhost:4000/', //Ссылка на страницу завершения оплаты
                        error_callback(error) {
                            console.error(error);
                        }
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
                <div>
                    <p>Дорогие друзья!</p>
                    <p>Ваши пожертвования будут направлены на создание и продвижение профессиональных песен для детей и взрослых о любви к Родине, о верности долгу и Отечеству, о главных человеческих ценностях, о православии, о здоровом образе жизни...</p>

                    <p>
                        Нам нужны средства на производство аранжировок, студийную работу, на тиражирование компакт-дисков, караоке, нотных сборников для распространения в учебных и образовательных учреждениях всех типов.
                        Будем благодарны за пожертвования на съемку и создание музыкальных клипов духовно-патриотического содержания, на проведение Международных фестивалей, конкурсов, флэшмобов.
                    </p>

                    <p>Необходимы финансы для рекламы, промо акций и создания наградных сувениров.</p>

                    <p>
                        Наша Цель – творческое единение поколений, оздоровление общества и спасение «Нашей песни» от уничтожения…
                        Спасибо за участие.
                        Да хранит Вас Господь!
                    </p>
                </div>
            }
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
                    <Form.Item
                        name="price"
                        label="Размер пожертвования, руб"
                        rules={[
                            {
                                validator: checkPrice,
                            },
                        ]}
                    >
                        <PriceInput/>
                    </Form.Item>
                    <Form.Item className="support-button-continue">
                        <Button type="danger" htmlType="submit" loading={isLoading} style={{width: '200px'}}>
                            Далее
                        </Button>
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
