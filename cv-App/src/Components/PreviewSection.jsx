function Preview({cv}) {


    return(
        <>
                <div className="bg-gray-50 w-1/2 h-200 p-10 flex items-center flex-col">
          <div>
            <h1 className="text-3xl font-semibold">{cv.personal.name}</h1>
            <p className="flex gap-5">
              <p>email: {cv.personal.email} </p>
              <p>phone no. : {cv.personal.phone}</p>
            </p>
          </div>

          {/* 2ND PART!! */}

          <div className="w-full ">
            <div className="flex w-full justify-between mt-10 ">
              <div>
                <h3 className="text-xl font-semibold">{cv.education[0].school}</h3>
                <h4 className="font-medium">{cv.education[0].class} </h4>
              </div>

              <h5 className="text-lg font-medium">{cv.education[0].date}</h5>
            </div>

            <div className="flex w-full justify-between mt-10 ">
              <div>
                <h3 className="text-xl font-semibold">{cv.education[1].college}</h3>
                <h4 className="font-medium">{cv.education[1].degree} </h4>
              </div>

              <h5 className="text-lg font-medium">{cv.education[1].date}</h5>
            </div>
          </div>

          {/* 3rd part */}

          <div className="w-full mt-20">
            <div className="flex w-full justify-between mt-10 ">
              <div>
                <h3 className="text-xl font-semibold">Company Name</h3>
                <h4 className="font-medium">HCL </h4>
              </div>

              <h5 className="text-lg font-medium">8-04-2026</h5>
            </div>

            <div className="flex w-full justify-between mt-10 ">
              <div>
                <h3 className="text-xl font-semibold">Company Name</h3>
                <h4 className="font-medium">ORACLE </h4>
              </div>

              <h5 className="text-lg font-medium">9-04-2026</h5>
            </div>
          </div>
        </div>
        </>
    )
}

export default Preview;