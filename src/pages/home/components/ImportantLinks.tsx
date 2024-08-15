import { notice } from "@/utils/notice";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import govtLogo from "../../../assets/logos/bd-govt.png";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import Dropdown from "@/components/formik/Dropdown";

const initialValues = {
  officeType: "dd",
  officeSubType: "dd",
};

const officeTypes = [
  { label: "অফিসের ধরণ", value: "dd" },
  { label: "মন্ত্রণালয়/বিভাগ", value: "ministry" },
  { label: "অধিদপ্তর বাতায়ন", value: "directorate" },
  { label: "বিভাগীয় বাতায়ন", value: "divisional" },
  { label: "জেলা বাতায়ন", value: "districal" },
  { label: "উপজেলা বাতায়ন", value: "upazilaBatayon" },
  { label: "ইউনিয়ন বাতায়ন", value: "unionBatayon" },
  { label: "অন্যান্য", value: "otherOfficeList" },
];
const officeSubTypes = [
  { label: "বিভাগ নির্বচন করুন", value: "dd" },
  { label: "চট্টগ্রাম বিভাগ", value: "www.chittagongdiv.gov.bd" },
  { label: "রাজশাহী বিভাগ", value: "www.rajshahidiv.gov.bd" },
  { label: "খুলনা বিভাগ", value: "www.khulnadiv.gov.bd" },
  { label: "বরিশাল বিভাগ", value: "www.barisaldiv.gov.bd" },
  { label: "সিলেট বিভাগ", value: "www.sylhetdiv.gov.bd" },
  { label: "ঢাকা বিভাগ", value: "www.dhakadiv.gov.bd" },
  { label: "রংপুর বিভাগ", value: "www.rangpurdiv.gov.bd" },
  { label: "ময়মনসিংহ বিভাগ", value: "www.mymensinghdiv.gov.bd" },
];

const ImportantLinks = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="">
      <div className="flex justify-between mb-[70px]">
        <div className="relative border rounded-md p-8 bg-primary/5">
          <h3 className="text-2xl font-medium text-primary">Notice Board</h3>
          <div className="notices">
            {notice?.map((item, index) => {
              const maxLength = item?.length;
              return (
                <div key={index} className="">
                  <a
                    href="/"
                    className="capitalize flex items-center my-3 hover:text-primary "
                  >
                    <GrDocumentText className="text-primary-foreground me-3" />{" "}
                    {item?.slice(0, 60)}
                    {maxLength > 80 && "..."}
                  </a>
                </div>
              );
            })}
            <Link
              to={"/"}
              className="absolute right-3 bottom-3 text-primary hover:text-primary-foreground flex items-center"
            >
              all{" "}
              <MdOutlineKeyboardDoubleArrowRight className="ms-1 font-semibold" />
            </Link>
          </div>
          <img
            src={govtLogo}
            alt=""
            className="w-[100px] absolute left-[-55px] top-[-55px] z-0"
          />
        </div>
        <div>
          <h3 className="text-2xl font-medium">Bangladesh National Portal</h3>
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            {({ values, setFieldValue }) => (
              <Form className="space-y-5 mt-5">
                <Dropdown
                  setFieldValue={setFieldValue}
                  name="officeType"
                  label="Select office type"
                  placeholder="select category"
                  options={officeTypes}
                />
                <Dropdown
                  setFieldValue={setFieldValue}
                  name="officeSubType"
                  label="Select division"
                  placeholder="select category"
                  options={officeSubTypes}
                />
                <button className="h-[40px] w-[80px] rounded-md font-medium text-white bg-primary">
                  Go
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {/* <Card /> */}
    </div>
  );
};

export default ImportantLinks;
