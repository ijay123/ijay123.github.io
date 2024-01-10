import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    message: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const emailTemplate = "template_8qhhv5s"
  const serviceTemplate = "service_rcgg1kt"

const sendEmail = ()=>{
  emailjs.sendForm(emailTemplate,serviceTemplate,handleInputChange)
}

  return (
    <>
      <p className="lg:text-[35px] pt-[50px] lg:pt-[150px] text-[25px] text-[red] lg:pb-[60px] bg-[#F7F6FB]">
        Contact Me
      </p>
      <div
        className="lg:pt-[50px] px-[10px] pt-[50px] flex lg:gap-[200px] pb-[100px] flex-col-reverse lg:flex-row lg:pl-[130px] bg-[#F7F6FB]"
        id="contact"
      >
        <div>
          <form className="lg:w-[500px]">
            <div className="flex flex-col gap-[25px] w-[40%]">
              <div className="flex flex-col lg:flex-row mt-[20px] gap-[20px] w-[100%]">
                <span>
                  <input
                    placeholder="First Name"
                    onChange={handleInputChange}
                    name="firstName"
                    className="rounded-[5px] h-[40px] pl-[10px]"
                  />
                </span>
                <span>
                  <input
                    placeholder="Surname"
                    name="surName"
                    onChange={handleInputChange}
                    className=" rounded-[5px] h-[40px] pl-[10px]"
                  />
                </span>
              </div>
              <div>
                <textarea
                  cols={44}
                  rows={10}
                  placeholder="message"
                  name="message"
                  onChange={handleInputChange}
                  className="rounded-[5px] w-[80vw] lg:w-[480px] p-[5px]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#343D68] text-white py-[10px] px-[30px] font-[Merienda] text-center justify-center rounded-[5px] flex"
                onClick={sendEmail}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div>
          <img src="/images/contact.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
