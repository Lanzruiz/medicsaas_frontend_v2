import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
//import logo from '../../images/logo-full.png'
import {
    loadingToggleAction,
    signupAction,
} from '../../store/actions/AuthActions';
function Register(props) {

    const [formData, setFormData] = useState({
            email: '',
            password: '',
            password2: '',
        });

    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const dispatch = useDispatch();
    const nav = useNavigate();

    	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (formData.email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }

        if (formData.password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }

        if(formData.password !== formData.password2) {
            errorObj.password = 'Password is not equal in Confirm Password';
            error = true;
        }

        setErrors(errorObj);
        if (error) return;
        dispatch(loadingToggleAction(true));
        dispatch(signupAction(formData.name, formData.email, formData.password, nav));
    }
  return (
    <div className='authincation h-100 p-meddle'>
        <div className='container h-100'>
            <div className='row justify-content-center h-100 align-items-center'>
                <div className='col-md-6'>
                    <div className='authincation-content'>
                        <div className='row no-gutters'>
                            <div className='col-xl-12'>
                                <div className='auth-form'>
                                    

                                    <h4 className='text-center mb-4 '>Sign up your account</h4>
                                    {props.errorMessage && (
                                        <div className='bg-red-300 text-danger border border-red-900 p-1 my-2'>
                                            {props.errorMessage}
                                        </div>
                                    )}
                                    {props.successMessage && (
                                        <div className='bg-green-300 text-danger text-green-900  p-1 my-2'>
                                            {props.successMessage}
                                        </div>
                                    )}
                                    <form onSubmit={onSignUp}>
                                        <div className='form-group'>
                                            <label className='mb-1 '>
                                              <strong>Full Name</strong>
                                            </label>
                                            <input type='text' className='form-control' placeholder='username' name='name' value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className='form-group'>
                                            <label className='mb-1 '>
                                              <strong>Email</strong>
                                            </label>
                                            <input type="email" className="form-control" name="email"
                                                value={formData.email} onChange={handleChange}
                                            />
                                            {errors.email && <div className="text-danger fs-12">{errors.email}</div>}
                                        </div>
                                        <div className='form-group'>
                                            <label className='mb-1 '>
                                              <strong>Password</strong>
                                            </label>
                                            <input type="password" className="form-control"
                                                 value={formData.password} onChange={handleChange} name="password"
                                            />
                                        </div>
                                        {errors.password && <div className="text-danger fs-12">{errors.password}</div>}
                                        <div className='form-group'>
                                            <label className='mb-1 '>
                                              <strong>Confirm Password</strong>
                                            </label>
                                            <input type="password" className="form-control"
                                                value={formData.password2} onChange={handleChange} name="password2"
                                            />
                                        </div>
                                       <div className='text-center mt-4'>
                                            <input type='submit' className='btn btn-primary btn-block'/>
                                        </div>
                                    </form>
                                    <div className='new-account mt-3 '>
                                        <p>
                                            Already have an account?{' '}
                                            <Link className='text-primary' to='/login'>
                                                Sign in
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};

export default connect(mapStateToProps)(Register);
