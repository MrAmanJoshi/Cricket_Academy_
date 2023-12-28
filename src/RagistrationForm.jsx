import React, { useState } from "react"
import Input from "./Input"
import { withFormik } from "formik"
import * as yup from "yup"

const handleSubmitData = (values) => {
  console.log("submitted",
    values.Occupation,
    values.Email, values.Whatsapp_Number, values.DOB,
    values.State,
    values.Father_Name,
    values.gander,
    values.game_format,
    values.Registration_For,
    values.Catagory
  )
}

const schema = yup.object().shape({
  Name_Of_Participant: yup.string().required(),
  Father_Name: yup.string().required(),
  Mother_Name: yup.string().required(),
  Players_Number: yup.string().min(10).required(),
  Father_Number: yup.string().min(10).required(),
  Email: yup.string().email().required(),
  Address: yup.string().required(),
  District: yup.string().required(),
  State: yup.string().required(),
  Pincode: yup.string().min(6).required(),
  Whatsapp_Number: yup.string().min(10).required(),
  DOB: yup.string().required(),
  Occupation: yup.string().required(),
  age_group: yup.string().required(),
  Catagory: yup.string().required(),
  Registration_For: yup.string().required(),
  game_format: yup.string().required(),
  gander: yup.string().required(),
})

const initialValues = {
  Name_Of_Participant: "",
  Father_Name: "",
  Mother_Name: "",
  Players_Number: "",
  Father_Number: "",
  Email: "",
  Address: "",
  District: "",
  State: "",
  Pincode: "",
  Whatsapp_Number: "",
  DOB: "",
  Occupation: "default",
  age_group: "default",
  Catagory: "default",
  Registration_For: "default",
  game_format: "default",
  gander: "default"
};

const RegistrationForm = ({
  handleSubmit,
  handleBlur,
  handleChange,
  values,
  errors,
  touched
}) => {
  const [checkBox, setCheckBox] = useState(false);
 console.log("errors", errors, touched)
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <div className="mx-auto max-w-2xl bg-slate-50 border flex flex-col items-center rounded-lg mt-[102.5px] sm:mt-[256px] p-2 ">
        <h1 className="font-bold text-2xl text-center mt-2 mb-8 text-red-600">Online Registration</h1>

        <form onSubmit={handleSubmit} >
          <div className="sm:grid sm:grid-cols-2 sm:ml-10 mb-5" >
            <Input
              placeholder="Name Of Participant"
              type="text"
              name="Name_Of_Participant"
              id="#Name_Of_Participant"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Name_Of_Participant}
              error={errors.Name_Of_Participant}
              touched={touched.Name_Of_Participant}

            />

            <Input
              placeholder="Players Mobile Number"
              type="number"
              name="Players_Number"
              id="#Players_Number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Players_Number}
              error={errors.Players_Number}
              touched={touched.Players_Number}

            />

            <Input
              placeholder="Father's Name"
              type="text"
              name="Father_Name"
              id="#Father_Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Father_Name}
              error={errors.Father_Name}
              touched={touched.Father_Name}

            />

            <Input
              placeholder="Father's Mobile Number"
              type="number"
              name="Father_Number"
              id="#Father_Number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Father_Number}
              error={errors.Father_Number}
              touched={touched.Father_Number}

            />

            <Input
              placeholder="Mother's Name"
              type="text"
              name="Mother_Name"
              id="#Mother_Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Mother_Name}
              error={errors.Mother_Name}
              touched={touched.Mother_Name}

            />

            <div className="mb-4   flex flex-col">
              <label className="font-lg text-gray-700 mb-1">Parents Occupation:</label>
              <select
                className={`sm:w-64 h-10 border border-gray-700 `}
                name="Occupation"
                id="#Occupation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Occupation}
              >
                <option value="default">Select Parents Occupation</option>
                <option value="farmer">Farmer</option>

                <option value="businessman">Businessman</option>
                <option value="artist">Artist</option>
                <option value="politician">Politician</option>
                <option value="government_services">Government Services</option>
                <option value="private_services">Private Services</option>
                <option value="other">Other</option>
              </select>
              {errors.Occupation && touched.Occupation && <p className="text-red-500 text-sm sm:text-lg">{errors.Occupation}</p>}
            </div>

            <div className="mb-4 sm:mr-4 flex flex-col">
              <label className="font-lg text-gray-700 mb-1">Age Group:</label>
              <select
                className="sm:w-64 h-10 border border-gray-700"
                name="age_group"
                id="age_group"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age_group}
              >
                <option value="default">Select Age Group</option>
                <option value="under_12">Under 12</option>
                <option value="under_14">Under 14 </option>
                <option value="under_16">Under 16</option>
                <option value="under_19">Under 19</option>
                <option value="under_23">Under 23</option>
                <option value="under_25">Under 25</option>
              </select>
              {errors.age_group && touched.age_group && <p className="text-red-500 text-sm sm:text-lg">{errors.age_group}</p>}
            </div>

            <div className="mb-4  flex flex-col">
              <label className="font-lg text-gray-700 mb-1">Catagory:</label>
              <select
                className="sm:w-64 h-10 border border-gray-700"
                name="Catagory"
                id="#Catagory"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Catagory}
              >
                <option value="default">Select Catagory</option>
                <option value="batsman">Batsman</option>
                <option value="blower">Blower</option>
                <option value="all_rounder">All Rounder</option>
                <option value="wk">WK</option>
              </select>
              {errors.Catagory && touched.Catagory && <p className="text-red-500 text-sm sm:text-lg">{errors.Catagory}</p>}
            </div>

            <div className="mb-4 sm:mr-4 flex flex-col">
              <label className="font-lg text-gray-700 mb-1">Ragistration For:</label>
              <select className="sm:w-64 h-10 border border-gray-700"
                name="Ragistration_For"
                id="#Ragistration_For"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Ragistration_For}
              >
                <option value="default"> Select Ragistration For</option>
                <option value="club">Club</option>
                <option value="academy">Academy</option>

              </select>
              {errors.Ragistration_For && touched.Ragistration_For && <p className="text-red-500 text-sm sm:text-lg">{errors.Ragistration_For}</p>}
            </div>

            <Input
              placeholder="Email"
              type="email"
              name="Email"
              id="#Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Email}
              error={errors.Email}
              touched={touched.Email}
            />

            <Input
              placeholder="Address"
              type="text"
              name="Address"
              id="#Address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Address}
              error={errors.Address}
              touched={touched.Address}
            />

            <Input
              placeholder="Pin Code"
              type="number"
              name="Pincode"
              id="#Pincode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Pincode}
              error={errors.Pincode}
              touched={touched.Pincode}
            />

            <Input
              placeholder="District"
              type="text"
              name="District"
              id="#District"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.District}
              error={errors.District}
              touched={touched.District}
            />

            <Input
              placeholder="State"
              type="text"
              name="State"
              id="#State"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.State}
              error={errors.State}
              touched={touched.State}
            />

            <Input
              placeholder="Date Of Birth"
              type="date"
              name="DOB"
              id="#DOB"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.DOB}
              error={errors.DOB}
              touched={touched.DOB}
            />

            <div className="mb-4 sm:mr-4 flex flex-col">
              <label className="font-lg text-gray-700 mb-1">Game Format:</label>
              <select
                className="sm:w-64 sm:mr-4 h-10 border border-gray-700"
                name="game_format"
                id="game_format"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.game_format}
              >
                <option value="default">Select Game Format</option>
                <option value="t-20">T-20</option>
                <option value="one_day">One Day</option>
                <option value="test">Test</option>
                <option value="all_format">All (T-20, One Day & Test)</option>
              </select>
              {errors.game_format && touched.game_format && <p className="text-red-500 text-sm sm:text-lg">{errors.game_format}</p>}
            </div>

            <div className="mb-4 sm:mr-4 flex flex-col">
              <label className="font-lg text-gray-700 mb-1">Gender:</label>
              <select
                className="sm:w-64 h-10 border border-gray-700"
                name="gander"
                id="gander"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gander}
              >
                <option value="default">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gander && touched.gander && <p className="text-red-500 text-sm sm:text-lg">{errors.gander}</p>}
            </div>

            <Input
              placeholder="Whatsapp Number"
              type="number"
              name="Whatsapp_Number"
              id="#Whatsapp_Number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Whatsapp_Number}
              error={errors.Whatsapp_Number}
              touched={touched.Whatsapp_Number}
            />

          </div>

          <div className="sm:mx-10">

            <div className="mb-4 sm:mr-4 flex flex-col">
              <label className="font-lg text-gray-700 mb-1 sm:mr-4 ">Total Fees:</label>
              <select className=" h-10 border border-gray-700" name="total_fees" id="total_fees">
                <option value="500">500</option>

              </select>
            </div>

            <div className='flex my-8'>
              <input onClick={() => setCheckBox(checkBox === false ? true : false)} type="checkbox" className="w-8 h-8" />
              <p className="text-lg font-bold text-gray-800 ml-3 text-justify">I understand that registration fee are non refundable. I have also read all other terms & conditions for participation in NYCL league</p>
            </div>
            {Object.keys(errors).length  !== 0 && <p className={`text-sm sm:text-lg font-medium my-2 text-red-400`}>  All Fields are required.</p>}
            <button className={`font-bold text-lg rounded-lg px-4 py-2 text-white ${checkBox === false ? 'bg-gray-300 hover:bg-gray-400' : 'bg-red-500 hover:bg-red-600 '}`} type="submit" disabled= {checkBox === false} >Submit</button>

          </div>

        </form>
      </div>
    </div>

  )
}

export default withFormik({
  handleSubmit: handleSubmitData,
  validationSchema: schema,
  initialValues: initialValues
})(RegistrationForm)