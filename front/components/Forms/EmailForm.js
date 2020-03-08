import {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {create} from "../../api/email";

const emailSchema = Yup.object().shape({
    email: Yup.string()
        .email('Неправильный формат адреса почты')
        .required('Обязательное поле')
});

const emailInput = {
    type: 'text',
    name: 'email',
    placeholder: 'Ваш email',
    className: '',
    errorClass: 'email-err'
};

const EmailForm = () => {
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    return (
        <div>
            {feedbackSubmitted && <div className="contact_message">Вы успешно подписаны на наши новости!</div>}
            {!feedbackSubmitted && <Formik
                initialValues={{email: ''}}
                validationSchema={emailSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    let res = await create({ value: values.email });
                    if (res.data) {
                        setFeedbackSubmitted(true);
                    }
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div style={{position: 'relative'}}>
                            <Field
                                as={emailInput.field}
                                type={emailInput.type}
                                name={emailInput.name}
                                placeholder={emailInput.placeholder}
                                className={emailInput.className} />
                            <ErrorMessage
                                name={emailInput.name}
                                component="div"
                                className={emailInput.errorClass} />
                        </div>

                        <button type="submit" disabled={isSubmitting} className="submit_send submit_send--email button--red">
                            Подписаться
                        </button>
                    </Form>
                )}
            </Formik>}
        </div>
    );
};

export default EmailForm;
