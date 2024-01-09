import React from "react";

const Contact = () => {
  return (
    <div className="pt-[350px] flex gap-[200px] pl-[130px] pb-[200px] relative z-[10] bg-[#F7F6FB]" id="contact">
      <div>
      <form className="w-[500px]">
        <p className="text-[35px] text-[red] mb-[60px]">
          Contact Me
        </p>
        <div className="flex flex-col gap-[25px] w-[40%]">
          <div className="flex gap-[20px] w-[100%]">
            <span>
              <input placeholder="Name" className="rounded-[5px] h-[40px] pl-[10px]"/>
            </span>
            <span>
              <input placeholder="Surname" className=" rounded-[5px] h-[40px] pl-[10px]" />
            </span>
          </div>
          <div>
            <textarea cols={44} rows={10} className="rounded-[5px]"/>
          </div>
          <button type="submit" className="bg-[#343D68] text-white py-[10px] px-[30px] font-[Merienda] text-center justify-center rounded-[5px] flex">Send Message</button>
        </div>
      </form>
      </div>
     <div>
      <img src="/images/contact.png" alt=""/>
     </div>

    </div>
  );
};

export default Contact;
