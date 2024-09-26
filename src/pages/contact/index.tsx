import { ContactForm } from "./components/contact-form";




const Contact: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="mt-6 mb-3"><h1 className="text-4xl font-bold">Feel free to get intouch!</h1></div>
        <div className="mb-6"><h1 className="text-lg md:text-xl font-light text-neutral-400">Shoot me an email and I'll get back to you as soon as I can.</h1></div>
        <ContactForm/>
      </div>
    </>
  );
};

export default Contact;
