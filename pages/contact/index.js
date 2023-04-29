import ContactForm from "../../components/contact/contact-form";
import Head from 'next/head';
const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <ContactForm />
    </div>
  )
}

export default Contact;