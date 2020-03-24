import {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {create} from "../../api/feedback";

const feedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Слишком короткое имя')
        .max(81, 'Слишком длинное имя')
        .required('Обязательное поле'),
    phone: Yup.string()
        .min(7, 'Слишком короткий номер телефона')
        .max(81, 'Слишком длинный номер телефона')
        .required('Обязательное поле'),
    email: Yup.string()
        .email('Неправильный формат адреса почты')
        .required('Обязательное поле'),
    text: Yup.string()
        .max(65535, 'Слишком длинное сообщение')
        .required('Обязательное поле')
});

const inputs = [
    {
        type: 'text',
        name: 'name',
        placeholder: 'Ваше имя *',
        className: 'ask_input',
        errorClass: 'errors'
    },
    {
        type: 'text',
        name: 'phone',
        placeholder: 'Телефон для связи *',
        className: 'ask_input',
        errorClass: 'errors'
    },
    {
        type: 'text',
        name: 'email',
        placeholder: 'E-mail *',
        className: 'ask_input',
        errorClass: 'errors'
    }
];

const areaInputs = [
    {
        field: 'textarea',
        name: 'text',
        placeholder: 'Ваше сообщение *',
        className: 'ask_textarea',
        errorClass: 'errors errors_area'
    }
];

const ContactForm = () => {
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    return (
        <div className="ask-form">
            {feedbackSubmitted && <div className="contact_message">Ваше сообщение успешно отправлено!</div>}
            {!feedbackSubmitted && <Formik
                initialValues={{name: '', email: '', phone: '', text: ''}}
                validationSchema={feedbackSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    let res = await create({feedback: { ...values }});
                    if (res.data) {
                        setFeedbackSubmitted(true);
                    }
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="ask-div-input">
                            {inputs.map((input, index) => (
                                <div className="contact" key={index}>
                                    <Field
                                        as={input.field}
                                        type={input.type}
                                        name={input.name}
                                        placeholder={input.placeholder}
                                        className={input.className} />
                                    <ErrorMessage
                                        name={input.name}
                                        component="div"
                                        className={input.errorClass} />
                                </div>
                            ))}
                        </div>
                        <div className="ask-area">
                            {areaInputs.map((input, index) => (
                                <div className="contact" key={index}>
                                    <Field
                                        as={input.field}
                                        type={input.type}
                                        name={input.name}
                                        placeholder={input.placeholder}
                                        className={input.className} />
                                    <ErrorMessage
                                        name={input.name}
                                        component="div"
                                        className={input.errorClass} />
                                </div>
                            ))}
                            <div className="ask-bottom">
                                <div className="text_left">Нажимая на кнопку «Отправить», вы даете <a
                                    href="/docs/download.docx"
                                    target="_blank">согласие на обработку своих персональных данных</a>.
                                </div>

                                <button type="submit" disabled={isSubmitting} className="submit_send button--red">
                                    Отправить
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>}
        </div>
    );
};

export default ContactForm;
