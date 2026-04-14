function Form ({cv, setCv}) {


    return(
        <>
          <div className="h-200 w-1/2 bg-gray-50 p-10 pt-0">
          <div className="h-full w-full bg-blue-400 flex flex-col items-center">
            <h1 className="text-xl font-bold">INPUTS</h1> 

            <div className="bg-white w-full mt-5">

            <section className="flex flex-col gap-4 w-full">
              <h3 className="font-semibold text-xl">Personal :-</h3>
            <label htmlFor="name" className="text-sm font-medium">Name
              <input type="text" id="name" className="border p-1 w-40 rounded" onChange={(e) => {
                setCv({
                  ...cv,
                  personal : {
                    ...cv.personal,
                    name: e.target.value

                  }
                })
              }} />
              </label>

              <div className="flex flel-col gap-10">
              <label htmlFor="email" className="text-sm font-medium">
                email:

                <input type="email" id="email" className="border p-1 w-40 rounded" onChange={(e) => {
                  setCv({
                    ...cv,
                    personal: {
                      ...cv.personal,
                      email: e.target.value
                    }
                  })
                }} />
              </label>

              <label htmlFor="phone" className="text-sm font-medium">
                Phone
                <input type="text" id="phone" className="border p-1 w-40 rounded" onChange={(e) => {

                  setCv({
                    ...cv,
                    personal: {
                      ...cv.personal,
                      phone: e.target.value
                    }
                  })
                }} />
              </label>

              </div>

              </section>
            </div>


                {/* EDUCATION SECTION */}
              <div className="bg-white w-full mt-5">

            <section className="flex flex-col gap-4 w-full">
              <h3 className="font-semibold text-xl">Education :-</h3>
            <label htmlFor="name" className="text-sm font-medium">School Name:- 
              <input type="text" id="name" className="border p-1 w-40 rounded" onChange={(e) => {
                setCv({
                  ...cv,
                  education: cv.education.map((item, index) => 
                    index === 0? {...item, school: e.target.value}: item
                  )
                })
              }} 
              />


              </label>

              <div className="flex flel-col gap-10">
              <label htmlFor="email" className="text-sm font-medium">
                Degree Name:-

                <input type="email" id="email" className="border p-1 w-40 rounded" onChange={(e) => {
                setCv({
                  ...cv,
                  education: cv.education.map((item, index) => 
                    index === 0? {...item, class: e.target.value}: item
                  )
                })
              }} 
                 />
              </label>

              <label htmlFor="phone" className="text-sm font-medium">
                Date
                <input type="text" id="phone" className="border p-1 w-40 rounded" onChange={(e) => {

                  setCv({
                    ...cv,
                    education: cv.education.map((item, index) => 
                    index === 0? {...item, date: e.target.value} : item
                    )
                  })
                }} />
              </label>

              </div>

              </section>
            </div>

            <div className="bg-white w-full mt-5">

            <section className="flex flex-col gap-4 w-full">
            <label htmlFor="name" className="text-sm font-medium">College Name
              <input type="text" id="name" className="border p-1 w-40 rounded" onChange={(e) => {
                setCv({
                  ...cv,
                  education: cv.education.map((item, index) => 
                    index === 1? {...item, college: e.target.value} : item
                  )
                })
              }} />
              </label>

              <div className="flex flel-col gap-10">
              <label htmlFor="email" className="text-sm font-medium">
                Degree Name:

                <input type="email" id="email" className="border p-1 w-40 rounded" onChange={(e) => {
                  setCv({
                    ...cv,
                  education: cv.education.map((item, index) => 
                    index === 1? {...item, degree: e.target.value} : item
                  )
                  })
                }} />
              </label>

              <label htmlFor="phone" className="text-sm font-medium">
                Date
                <input type="text" id="phone" className="border p-1 w-40 rounded" onChange={(e) => {

                  setCv({
                    ...cv,
                   education: cv.education.map((item, index) => 
                    index === 1? {...item, date: e.target.value} : item
                  )
                  })
                }} />
              </label>

              </div>

              </section>
            </div>

            {/* WORK EXPERIENCE */}

             <div className="bg-white w-full mt-5">

            <section className="flex flex-col gap-4 w-full">
              <h3 className="font-semibold text-xl">Work Experience :-</h3>
            <label htmlFor="name" className="text-sm font-medium">Company Name
              <input type="text" id="name" className="border p-1 w-40 rounded" onChange={(e) => {
                setCv({
                  ...cv,
                  personal : {
                    ...cv.personal,
                    name: e.target.value

                  }
                })
              }} />
              </label>

              <div className="flex flel-col gap-10">
              <label htmlFor="email" className="text-sm font-medium">
               Position: 

                <input type="email" id="email" className="border p-1 w-40 rounded" onChange={(e) => {
                  setCv({
                    ...cv,
                    personal: {
                      ...cv.personal,
                      email: e.target.value
                    }
                  })
                }} />
              </label>

              <label htmlFor="phone" className="text-sm font-medium">
                Date
                <input type="text" id="phone" className="border p-1 w-40 rounded" onChange={(e) => {

                  setCv({
                    ...cv,
                    personal: {
                      ...cv.personal,
                      phone: e.target.value
                    }
                  })
                }} />
              </label>

              </div>

              </section>
            </div>


                  <div className="bg-white w-full mt-5">

            <section className="flex flex-col gap-4 w-full">
            <label htmlFor="name" className="text-sm font-medium">Company Name
              <input type="text" id="name" className="border p-1 w-40 rounded" onChange={(e) => {
                setCv({
                  ...cv,
                  personal : {
                    ...cv.personal,
                    name: e.target.value

                  }
                })
              }} />
              </label>

              <div className="flex flel-col gap-10">
              <label htmlFor="email" className="text-sm font-medium">
               Position: 

                <input type="email" id="email" className="border p-1 w-40 rounded" onChange={(e) => {
                  setCv({
                    ...cv,
                    personal: {
                      ...cv.personal,
                      email: e.target.value
                    }
                  })
                }} />
              </label>

              <label htmlFor="phone" className="text-sm font-medium">
                Date
                <input type="text" id="phone" className="border p-1 w-40 rounded" onChange={(e) => {

                  setCv({
                    ...cv,
                    personal: {
                      ...cv.personal,
                      phone: e.target.value
                    }
                  })
                }} />
              </label>

              </div>

              </section>
            </div>

          </div>
          </div>
        </>
    )
}


export default Form;