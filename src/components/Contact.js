// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {AtSymbolIcon} from '@heroicons/react/solid'

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkwnaqk");
  if (state.succeeded) {
      return  <section id="contact"className="text-white bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <p className="sm:text-4xl text-3xl font-medium title-font text-white">Successfully sent!</p>
          </div>
          </section>
  }
  return (
      <section id="contact"className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-10">
                <AtSymbolIcon className="mx-auto inline-block w-10 mb-4"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
                    Contact Me
                </h1>
            </div>
            <form onSubmit={handleSubmit} className="">
                <div className="md:flex md:items-center md:justify-center">
                <div className="md:w-1/2">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                </div>
                </div>
                <div className="md:flex md:items-center md:justify-center">
                <div className="md:w-1/2">
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 h-300"
                    id="message"
                    name="message"
                    placeholder="Message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                </div>
                </div>
                <button type="submit" disabled={state.submitting} className="bg-green-500 hover:bg-green-700 
                text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
                    Submit
                </button>
            </form>
        </div>
    </section>
  );
}
function Contact() {
  return (
    <ContactForm />
  );
}
export default Contact;
