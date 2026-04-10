function Form ({cv, setCv}) {


    return(
        <>
          <div className="h-200 w-1/2 bg-gray-50 p-10 pt-0">
          <div className="h-full w-full bg-blue-400 flex flex-col items-center">
            <h1 className="text-xl font-bold">INPUTS</h1> 

            <div className="bg-white w-full h-10 mt-5">

            <label htmlFor="name">Name
              <input type="text" id="name" onChange={(e) => {
                setCv({
                  ...cv,
                  personal : {
                    ...cv.personal,
                    name: e.target.value

                  }
                })
              }} />
              </label>

              <label htmlFor="email">
                email:

                <input type="email" id="email" onChange={(e) => {
                  setCv({
                    ...cv,
                    personal: {
                      ...cv.personal,
                      email: e.target.value
                    }
                  })
                }} />
              </label>

              <label htmlFor="phone">
                Phone
                <input type="text" id="phone" onChange={(e) => {

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

          </div>
          </div>
        </>
    )
}


export default Form;