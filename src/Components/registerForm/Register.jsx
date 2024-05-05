import axios from "axios";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import WorkerFifthStep from "./WorkerFifthStep";
import WorkerFourthStep from "./WorkerFourthStep";
import { useEffect, useRef, useState } from "react";
import { useWorkerFormContext } from "../../contexts/WorkerFormDataProvider";
import { useEmployerFormContext } from "../../contexts/EmployerFormDataProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Popup from "../SuccessPopup/Popup";
export default function Register() {
  const [currentForm, setCurrentForm] = useState(1);
  const [userType, setUserType] = useState(""); // Added state to store user type
  const { workerFormData } = useWorkerFormContext();
  const { employerFormData } = useEmployerFormContext();
  const [showPopup, setShowPopup] = useState(false);
  const [isFirstFormFilled, setIsFirstFormFilled] = useState(false);
  const { setWorkerFormData } = useWorkerFormContext();
  const { setEmployerFormData } = useEmployerFormContext();
  useEffect(() => {
    // Get the value from localStorage if
    const storedMobileNumber = localStorage.getItem("formattedPh");
    // Parse the stored value or use an empty string if not found
    if (storedMobileNumber) {
      setWorkerFormData({
        ...workerFormData,
        ["mobileNumber"]: storedMobileNumber,
      });

      setEmployerFormData({
        ...employerFormData,
        ["mobileNumber"]: storedMobileNumber,
      });
    }
  }, []);

  useEffect(() => {
    setIsFirstFormFilled(userType !== "" && userType !== undefined);
  }, [userType]);

  async function handleWorkerRegister(e) {
    const {
      name,
      dob,
      company,
      mobileNumber,
      street,
      city,
      pincode,
      state,
      gender,
      email,
      userRole,
      photo,
      aadharCard,
      laborCard,
      categoriesOfWork,
    } = workerFormData;

    e.preventDefault();
    const emptyField = Object.entries({
      name,
      dob,
      gender,
      email,
      mobileNumber,
      street,
      city,
      pincode,
      state,
      userRole,
      categoriesOfWork,
      photo,
      aadharCard,
      laborCard,
    }).find(([key, value]) => !value);

    if (pincode && pincode.length !== 6) {
      toast.error("Pincode must be of 6 digits");
      return;
    }

    if (emptyField) {
      const [fieldName] = emptyField;
      toast.error(
        `Please fill the ${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } field.`
      );
      return; // Exit the function if any field is empty
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("dob", dob);
    formData.append("company", company);
    formData.append("mobileNumber", mobileNumber);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("pincode", pincode);
    formData.append("state", state);
    formData.append("gender", gender);
    formData.append("email", email);
    formData.append("userRole", userRole);
    formData.append("photo", photo);
    formData.append("aadharCard", aadharCard);
    formData.append("laborCard", laborCard);
    formData.append("categoriesOfWork", categoriesOfWork);

    console.log(mobileNumber, "mobileNumber");
    try {
      const res = await axios.post(
        "https://mrma.connoisseurpresents.in/user/register",
        // "http://localhost:5000/user/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        toast.success("Registered Successfully!!");
        setShowPopup(true);
      } else {
        toast.error("Oops!! Something went wrong!!");
      }
    } catch (err) {
      toast.error("Email already exists!!");
    }
  }

  async function handleEmployerRegister(e) {
    e.preventDefault();
    const {
      name,
      dob,
      company,
      mobileNumber,
      street,
      city,
      pincode,
      state,
      gender,
      email,
      userRole,
    } = employerFormData;

    if (pincode && pincode.length !== 6) {
      toast.error("Pincode must be of 6 digits");
      return;
    }
    const emptyField = Object.entries({
      name,
      dob,
      gender,
      email,
      mobileNumber,
      street,
      city,
      pincode,
      state,
      userRole,
    }).find(([key, value]) => !value);

    if (emptyField) {
      const [fieldName] = emptyField;
      toast.error(
        `Please fill the ${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } field`
      );
      return; // Exit the function if any field is empty
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("dob", dob);
    formData.append("company", company);
    formData.append("mobileNumber", mobileNumber);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("pincode", pincode);
    formData.append("state", state);
    formData.append("gender", gender);
    formData.append("email", email);
    formData.append("userRole", userRole);
    try {
      const res = await axios.post(
        "https://mrma.connoisseurpresents.in/user/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        toast.success("Registered Successfully!!");
        setShowPopup(true);
      } else {
        toast.error("Oops!! Something went wrong!!");
      }
    } catch (err) {
      toast.error("Email already exists!");
    }
  }

  function showStep(stepNum) {
    switch (stepNum) {
      case 1:
        return <FirstStep setUserType={setUserType} userType={userType} />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />; //give employer submit button just here
      case 4:
        return <WorkerFourthStep />;
      case 5:
        return <WorkerFifthStep />;
    }
  }

  // Function to handle form submission

  return (
    <>
      {showPopup && <Popup />}
      <div className="flex bg-blue-200 h-96 justify-center">
        <div className="lg:w-96 lg:h-full flex justify-center items-center mt-11 h-0 w-0">
          <img
            src="/images/form-side1.jpg"
            className="w-full rounded-l-lg object-cover hidden lg:block"
          />
        </div>
        <div className="second mt-32 mb-10 bg-white flex flex-col items-center gap-5 shadow-2xl rounded-r-lg rounded-l-lg lg:rounded-l-none  p-6 w-96">
          <h1 className="font-bold text-xl">Registration</h1>
          <form
            onSubmit={(e) =>
              userType === "employer"
                ? handleEmployerRegister(e)
                : handleWorkerRegister(e)
            }
            className="flex flex-col gap-2 items-center"
          >
            {showStep(currentForm)}
            <div
              className={`flex w-4/5 ${
                currentForm === 1 ? "justify-center" : "justify-between"
              }`}
            >
              {currentForm > 1 && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentForm((curr) => curr - 1);
                  }}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 mr-2"
                >
                  Back
                </button>
              )}
              {currentForm < 3 && userType === "employer" && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentForm((curr) => curr + 1);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor focus:ring-opacity-50"
                >
                  Next
                </button>
              )}
              {currentForm < 5 && userType !== "employer" && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentForm((curr) => curr + 1);
                  }}
                  disabled={!isFirstFormFilled}
                  className={`px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                    isFirstFormFilled ? "" : "cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              )}
              {((userType === "employer" && currentForm === 3) ||
                (userType !== "employer" && currentForm === 5)) && (
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
