import React from "react";
import loginImg from "../../BK1.png";
import { Formik } from "formik";
import * as EmailValidator from "email-validator"; 
import '@fortawesome/fontawesome-free/css/all.min.css';

export class Login extends React.Component {
    
    constructor(props){
      super(props);
      this.state={
        showpassword: false
      }
    }
    showPass=()=>{
        this.setState({
          showpassword: !this.state.showpassword          
        })
    }
      
    render() {
      return (
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (!EmailValidator.validate(values.email)) {
                errors.email = "Invalid email address.";
              }
              
              if (!values.password) {
                errors.password = "Required";
              }
              return errors;
            }}
        >
      
        {props => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
          } = props;
          return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Welcome Back!</div>
                <div className="content">
                <div className="image">
                  <img src={loginImg} />
                </div>
                <div className="form">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      id = "email"
                      type="text" 
                      name="email" 
                      placeholder="Email" 
                      value={values.email} 
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      className={errors.email && touched.email && "error"} 
                    />
                    {errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <div className="inputpass">
                        <input 
                            type={this.state.showpassword? 'text' : 'password'}
                            name="password" 
                            placeholder="Password" 
                            value={values.password} 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            className={errors.password && touched.password && "error"}
                        >   
                        </input>
                        <span onClick={()=>{this.showPass()}}>
                          <i className={this.state.showpassword? "fa-solid fa-eye-slash":  "fa fa-eye password-icon" }>
                          </i>
                        </span>
                      </div>
                      {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                      )}
                      
                  </div>
                  <div className="form-group">
                        <div className="forgotpass">
                          <label htmlFor="forgotpass">Forgot Password</label>
                        </div>
                  </div>
                </div>
              </div>
                <div className="footer">
                  <button type="button" className="btn">
                    Log In
                  </button>
                  
                </div>
            </div>
          );
        }}
        
      </Formik>
          );
        }
  }