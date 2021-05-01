import {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {create} from "../../api/email";

const emailSchema = Yup.object().shape({
    email: Yup.string()
        .email('Неправильный формат адреса почты')
        .required('Обязательное поле')
});

const EmailForm = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const inputs = [{
        type: 'text',
        name: 'email',
        placeholder: 'Ваш email',
        className: 'test',
        errorClass: 'email-err text-white'
    }];

    return (
        <div>
            {emailSubmitted && <div className="contact_message">Вы успешно подписаны на наши новости!</div>}
            {!emailSubmitted && <Formik
                initialValues={{email: ''}}
                validationSchema={emailSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    let res = await create({ ...values });
                    if (res.data) {
                        setEmailSubmitted(true);
                    }
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {inputs.map(input =>
                            <div style={{position: 'relative'}} key={input.name}>
                                <Field
                                    type={input.type}
                                    name={input.name}
                                    placeholder={input.placeholder}
                                    className={input.className} />
                                <ErrorMessage
                                    name={input.name}
                                    component="div"
                                    className={input.errorClass} />
                            </div>
                        )}

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
