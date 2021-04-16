import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import './Connection.css'

const Connection = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_LTG3Zqm80qlTJAhQCazf2";

  const onSubmit = (data, r) => {

    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("İslem basarılı. Sizinle en yakın zamanda iletişime geçeceğim.");
      }).catch(err => console.error(`Bir seyler hatali gitti...${err}`));
  }
{/*Ç Ğ I İ Ş ç ğ ı ş */}
  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>İletİşİm</h1>
        <p>Lütfen formu doldurup gönderin. Sizinle en yakın zamanda iletişime geçeceğim.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="İsim"
                  name="name"
                  ref={
                    register({
                      required: "Lütfen isminizi girin",
                      maxLength: {
                        value: 20,
                        message: "Lütfen 20 karakterden daha az bir isim girin"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telefon Numarası"
                  name="phone"
                  ref={
                    register({
                      required: "Lütfen telefon numaranizi girin",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={
                    register({
                      required: "Lütfen email adresinizi girin",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Gecersiz Email"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Konu"
                  name="subject"
                  ref={
                    register({
                      required: "Konuyu girmeyi unuttunuz.",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Lütfen kısaca konuyu açıklayın..."
                  name="description"
                  ref={
                    register({
                      required: "Lütfen kısaca konuyu açıklayın..." 
                    })
                  }
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">gönder</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Connection;
