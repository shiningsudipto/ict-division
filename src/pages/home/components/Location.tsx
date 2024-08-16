import Input from "@/components/formik/Input";
import Textarea from "@/components/formik/Textarea";
import { Form, Formik } from "formik";

const initialValues = {
  email: "",
  message: "",
};

const Location = () => {
  return (
    <div className="p-[70px]">
      <div className="text-center mb-10">
        <h2 className="heading">Location & Feedback</h2>
        <h3 className="subHeading">Hotlines for help you</h3>
      </div>
      <div className="flex lg:flex-row md:flex-col lg:gap-x-[70px] md:gap-5">
        <div className="lg:w-[50%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.812348710394!2d90.39065157439173!3d23.754070188637172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a27cff4725%3A0xc0f3561e4e5e9f7d!2sICT%20Division!5e0!3m2!1sen!2sbd!4v1723782032548!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="lg:w-[50%]">
          <h3 className="text-2xl font-medium">Feedback</h3>
          <Formik
            onSubmit={(values) => console.log(values)}
            initialValues={initialValues}
          >
            {({ values }) => (
              <Form className="space-y-5 mt-5 w-full">
                <Input
                  name="email"
                  label="Email"
                  defaultValue={values?.email}
                  placeholder="your email"
                />
                <Textarea
                  name="message"
                  label="Message"
                  defaultValue={values?.message}
                  placeholder="your message"
                />
                <button className="h-[40px] w-[120px] rounded-md font-medium text-white bg-primary">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Location;
