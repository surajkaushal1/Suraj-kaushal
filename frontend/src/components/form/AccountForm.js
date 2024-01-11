import React, { useContext, useRef, useState } from 'react';
//import { Link } from 'react-router-dom';
import commonContext from '../../contexts/common/commonContext';
//import useForm from '../../hooks/useForm';
import useOutsideClose from '../../hooks/useOutsideClose';
import useScrollDisable from '../../hooks/useScrollDisable';
import http from '../../routes/https';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';

const AccountForm = () => {
    const navigate = useNavigate();

    const { isFormOpen, toggleForm } = useContext(commonContext);
    //const { inputValues, handleInputValues, handleFormSubmit } = useForm();

    const formRef = useRef();

    useOutsideClose(formRef, () => {
        toggleForm(false);
    });

    useScrollDisable(isFormOpen);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errorData, setmessage] = useState('');

    const [spinner, setSpinner] = useState(false);

    const setLoginEmail = (event) => {
        setFormData({ ...formData, email: event.target.value });
    };

    const setLoginPassword = (event) => {
        setFormData({ ...formData, password: event.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (formData.email === '' && formData.password === '') {
            setmessage('All fields are requried');
        } else if (formData.password.length < 7) {
            setmessage('Password length must be 7');
        } else {
            setSpinner(true);
            try {
                const response = await http.post('login', formData);
                if (response.data === 'Success') {
                    sessionStorage.setItem('userEmail', formData.email);
                    setmessage('Login successfull');
                    document.getElementsByClassName('backdrop')[0].style.display="none";
                    navigate('/admin');
                    
                } else if (response.data === 'error') {
                    setmessage("In-valid credentials");
                }
            } catch (error) {
                setmessage("API catch error");
            }
            setSpinner(false);
        }
        const timer = setTimeout(() => {
            setmessage('');
            // if (userEmail) {
            //     if (userRole == 'admin') {
            //         window.location.replace("/admin");
            //     } else if (userRole == 'user') {
            //         window.location.replace("/dashboard");
            //     }
            // }
        }, 3000);

        return () => clearTimeout(timer);

    };



    // const [isSignupVisible, setIsSignupVisible] = useState(false);


    // // Signup-form visibility toggling
    // const handleIsSignupVisible = () => {
    //     setIsSignupVisible(prevState => !prevState);
    // };


    return (
        <>
            {
                isFormOpen && (
                    <div className="backdrop">
                        <div className="modal_centered">
                            <form id="account_form" ref={formRef} onSubmit={handleFormSubmit}>
                                <div className="form_head">
                                    <h2>Login</h2>
                                    <p>
                                        " Welcome back! Please enter your credentials to access admin pannel. "
                                    </p>
                                </div>
                                {errorData && (
                                    <div className="error text-white login_btn btn">{errorData}</div>
                                )}
                                <div className="form_body">

                                    <div className="input_box">
                                        <input
                                            type="email"
                                            name="mail"
                                            className="input_field"
                                            required
                                            onChange={setLoginEmail}
                                        />
                                        <label className="input_label">Email</label>
                                    </div>

                                    <div className="input_box">
                                        <input
                                            type="password"
                                            name="password"
                                            className="input_field"
                                            required
                                            onChange={setLoginPassword}
                                        />
                                        <label className="input_label">Password</label>
                                    </div>
                                    <button type="submit" className="btn login_btn">
                                        {spinner && 
                                            <Spinner animation="border" role="status">
                                                <span className="visually-hidden">Please wait...</span>
                                            </Spinner>
                                        }
                                        {!spinner && (
                                            <span>Login</span>
                                        )}
                                    </button>

                                </div>
                                <div
                                    className="close_btn"
                                    title="Close"
                                    onClick={() => toggleForm(false)}
                                >
                                    &times;
                                </div>

                            </form>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default AccountForm;