import Form from "./FormSection";
import Preview from "./PreviewSection";

function Page() {

    
    return (
    <div className="flex justify-center items-center flex-col gap-10 bg-gray-400  h-screen">
      <h1 className="text-5xl font-bold">CV-Application</h1>
      <div className="shadow-xl flex justify-center w-300">

        {/* LEFT */}

        <Form />
        <Preview />

      </div>
    </div>
  );
}

export default Page;
