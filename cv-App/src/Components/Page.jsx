import { useState } from "react";
import Form from "./FormSection";
import Preview from "./PreviewSection";

function Page() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [cv, setCv] = useState({
    personal: {
      name: "John Doe",
      email: "",
      phone: "",
    },

    education: [
      { school: "school name", class: "12th", date: "01-01-2000" },
      { college: "college name", degree: "BCA", date: "01-01-2000" },
    ],

    experience: [
      { company: "", role: "", date: "" },
      { company: "", role: "", date: "" },
    ],
  });

  return (
    <div className="flex justify-center items-center flex-col gap-10 bg-gray-400  h-screen">
      <h1 className="text-5xl font-bold">CV-Application</h1>
      <div className="shadow-xl flex justify-center w-300 gap-10">
        {/* LEFT */}

        {isSubmitted ? (
          <Preview cv={cv} setIsSubmitted={setIsSubmitted} />
        ) : (
          <>
            <Form cv={cv} setCv={setCv} setIsSubmitted={setIsSubmitted} />
            <Preview cv={cv} setIsSubmitted={setIsSubmitted} />
          </>
        )}
      </div>
    </div>
  );
}

export default Page;
