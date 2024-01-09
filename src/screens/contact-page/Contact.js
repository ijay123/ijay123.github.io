import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    message: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <p className="lg:text-[35px] pt-[50px] text-[25px] text-[red] lg:mb-[60px] bg-[#F7F6FB]">
        Contact Me
      </p>
      <div
        className="lg:pt-[350px] px-[10px] pt-[50px] flex lg:gap-[200px] flex-col-reverse lg:pl-[130px] lg:pb-[200px] bg-[#F7F6FB]"
        id="contact"
      >
        <div>
          <form className="lg:w-[500px]">
            <div className="flex flex-col gap-[25px] w-[40%]">
              <div className="flex flex-col mt-[20px] gap-[20px] w-[100%]">
                <span>
                  <input
                    placeholder="First Name"
                    onChange={handleInputChange}
                    className="rounded-[5px] h-[40px] pl-[10px]"
                  />
                </span>
                <span>
                  <input
                    placeholder="Surname"
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
                  onChange={handleInputChange}
                  className="rounded-[5px] w-[80vw]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#343D68] text-white py-[10px] px-[30px] font-[Merienda] text-center justify-center rounded-[5px] flex"
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
