import { useState } from "react";
import Form from "./FormSection";
import Preview from "./PreviewSection";

function Page() {

    const [cv, setCv] = useState({

        personal: {
            name: "John Doe",
            email: "",
            phone: ""
        },

        education: [
             {school: "", degree: "", date: "" },
            { college: "", degree: "", date: "" }
        ],

          experience: [
          { company: "", role: "", date: "" },
          {company: "", role: "", date: ""}
  ]
             
    })

    return (
    <div className="flex justify-center items-center flex-col gap-10 bg-gray-400  h-screen">
      <h1 className="text-5xl font-bold">CV-Application</h1>
      <div className="shadow-xl flex justify-center w-300 gap-10">

        {/* LEFT */}

        <Form  cv={cv} setCv={setCv}/>
        <Preview cv={cv}/>

      </div>
    </div>
  );
}

export default Page;
