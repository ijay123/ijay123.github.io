import React, {useState, useEffect} from "react";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpzvpolb");
  if (state.succeeded) {
    setTimeout(() => {
      return <p>Thanks for getting in touch!</p>;
    }, 5000);
  }
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      // Show the success message
      setShowMessage(true);
      
      // Set a timer to hide the message or refresh the page after 5 seconds
      const timerId = setTimeout(() => {
        // Hide the message (if you want to stay on the page and just hide the message)
        setShowMessage(false);

        // Or refresh the page
        window.location.reload();

        // Or if using React Router for navigation in a SPA, you might navigate to a different route
        // navigate('/thank-you'); // Uncomment and use this line if using React Router and you want to navigate

      }, 5000);

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timerId);
    }
  }, [state.succeeded]); 
  return (
    <>
      <p className="lg:text-[35px] lg:text-center pt-[50px] lg:pt-[150px] text-[25px] text-[red] lg:pb-[60px] bg-[#F7F6FB]">
        Contact Me
      </p>

      <div
        className="lg:pt-[50px] px-[10px] pt-[50px] flex lg:gap-[200px] pb-[100px] flex-col-reverse lg:flex-row lg:pl-[130px] bg-[#F7F6FB]"
        id="contact"
      >
        <div>
          <form onSubmit={handleSubmit} className="lg:w-[500px]">
            <div className="flex flex-col gap-[25px] w-[40%]">
              <div className="flex flex-col lg:flex-row mt-[20px] gap-[20px] w-[100%]">
                <span>
                  <input
                    placeholder="First Name"
                    id="firstName"
                    type="text"
                    name="firstName"
                    className="rounded-[5px] h-[40px] pl-[10px]"
                  />
                </span>
                <span>
                  <input
                    placeholder="Surname"
                    name="surName"
                    type="text"
                    id="surName"
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
                  id="message"
                  type="text"
                  className="rounded-[5px] w-[80vw] lg:w-[480px] p-[5px]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#343D68] text-white py-[10px] px-[30px] font-[Merienda] text-center justify-center rounded-[5px] flex"
                disabled={state.submitting}
              >
                Send Message
              </button>
            </div>
          </form>
          {showMessage && <p className="text-[red] text-[30px]">Thanks for getting in touch!</p>}
        </div>
        <div>
          <img src="/images/contact.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
