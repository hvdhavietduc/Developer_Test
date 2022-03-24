import React from "react";
import loginImg from "../../BK1.png";
import { Formik } from "formik";
import * as EmailValidator from "email-validator"; 
import '@fortawesome/fontawesome-free/css/all.min.css';
export class Register extends React.Component{
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
    render(){
        return (
          
        <Formik
          initialValues={{ fullname:"",email: "", password: "" }}
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
              if (!values.fullname) {
                errors.fullname = "Required";
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
        <div className="base-container"ref={this.props.containerRef}>
                <div className="header">Sign Up for Free</div>
                <div class className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="fullname" >Full name</label>
                            <input id="fullname"type="text" name="fullname" placeholder="Full Name" value={values.fullname} onChange={handleChange} onBlur={handleBlur} className={errors.fullname && touched.fullname && "error"}></input>
                            {errors.fullname && touched.fullname && (
                              <div className="input-feedback">{errors.fullname}</div>
                            )}
                            
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email && "error"}></input>
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
                                  placeholder="Set a password" 
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
                        
                    </div>
                    
                </div>
                
                <div className="footer">
                    <button type="button" className="btn">
                        Register
                    </button>
                    
                </div>   
            </div>
          );
        }}
            </Formik>
        );
        
    }
    
}
