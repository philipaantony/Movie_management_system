import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../footer/footer';
import UserNavBar from '../usernavbar/usernavbar';
import { useLocation } from 'react-router-dom';
import { baseUrl } from "../../config/config";
import axios from 'axios'

function UserEditProfile() {
  const location = useLocation();
  const { id, name, email, dob, phone } = location.state || {};
  console.log(id);
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  useEffect(() => {

    setValue('username', name || '');
    setValue('dob', dob || '');
    if(phone !=='googleauth')
    {
      setValue('phone', phone || '');
    }
    
  }, [setValue, name, dob, phone]);

  const validationRules = {
    username: {
      required: '**Name is required',
      minLength: {
        value: 3,
        message: '**Name must have at least 3 characters',
      },
      pattern: {
        value: /^[A-Za-z\s]+$/, // Allow only alphabetic characters and spaces
        message: '**Name should not contain numbers or special characters',
      },
    },
    phone: {
      required: '**Phone number is required',
      pattern: {
        value: /^[6-9]{1}[0-9]{9}$/, // Allow only valid 10-digit phone numbers starting with digits 6-9
        message: '**Invalid phone number',
      },
    },
    dob: {
      required: '**Date of birth is required',
      validate: (value) => {
        const birthDate = new Date(value);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthDate.getFullYear();

        if (age < 15) {
          return '**You must be at least 15 years old.';
        }
        if (age < 15 || age >= 90) {
          return '**Age is not Valid';
        }

        return true;
      },
    },
  };

  const onSubmit = (data) => {
    console.log(data);
    axios
    .patch(`${baseUrl}/api/userprofile/${id}`, data)
    .then((response) => {
      console.log("Success:", response);
      alert(response.data.message);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error");
    });

  };

  

  return (
    <div>
    <UserNavBar activep="active" />

    <div className="container mt-4">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Edit Profile</h2>
            <h4>{email}</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  User Name
                </label>
                <div className={`mb-3 ${errors.email ? 'has-danger' : ''}`}>
                  <input
                    type="text"
                    name="username"
                    {...register('username', validationRules.username)}
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    placeholder="Full Name"
                    aria-label="username"
                    aria-describedby="username-addon"
                  />
                </div>
                <p className="text-danger">
                  {' '}
                  {errors?.username && errors.username.message}
                </p>
              </div>

              <div className="mb-3">
                Date of Birth:
                {dob === 'googleauth' ? (
                  <img
                    style={{ width: '70px', height: '42px' }}
                    src="assets/googleauth/verifiedlogo.png"
                    alt="Google Auth Image"
                  />
                ) : (
                  <></>
                )}
                <input
                  type="date"
                  name="dob"
                  {...register('dob', validationRules.dob)}
                  className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                  placeholder=" Date of Birth (YYYY-MM-DD)"
                  aria-label="dob"
                  aria-describedby="dob-addon"
                />
              </div>
              <p className="text-danger">{' '}{errors?.dob && errors.dob.message}</p>

              <div className="mb-3">
                Phone Number
                {phone === 'googleauth' ? (
                  <img
                    style={{ width: '70px', height: '42px' }}
                    src="assets/googleauth/verifiedlogo.png"
                    alt="Google Auth Image"
                  />
                ) : (
                  <></>
                )}
                <input
                  type="text"
                  name="phone"
                  {...register('phone', validationRules.phone)}
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  placeholder="Phone Number"
                  aria-label="phone"
                  aria-describedby="phone-addon"
                />
              </div>
              <p className="text-danger">{' '}{errors?.phone && errors.phone.message}</p>

              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br></br>

    <Footer />
  </div>
  );
}

export default UserEditProfile;
