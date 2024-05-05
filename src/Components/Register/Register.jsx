import { BiSolidLogInCircle } from "react-icons/bi";
import { MdPhoneAndroid, MdDashboard } from "react-icons/md";
import { RiTimerFlashLine } from "react-icons/ri";

const Register = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-gray-300 rounded-xl flex flex-col items-center p-3 pl-5 pr-5 justify-center text-xl hover:-translate-y-3 transition-transform duration-1000 cursor-pointer">
        <BiSolidLogInCircle className="text-3xl" />
        <h2 className="mt-2">Register with Mera Rojgar Mera Adhikar</h2>
      </div>
      <div className="bg-gray-300 rounded-xl flex flex-col items-center p-3 justify-center text-xl hover:-translate-y-3 cursor-pointer transition-transform duration-1000 pl-5 pr-5">
        <div>
          <MdPhoneAndroid className="text-3xl" />
        </div>
        <h2 className="mt-2">Login with Mobile Number and OTP</h2>
      </div>
      <div className="bg-gray-300 rounded-xl flex flex-col items-center p-3 justify-center text-xl hover:-translate-y-3 cursor-pointer transition-transform duration-1000 pl-5 pr-5">
        <div>
          <MdDashboard className="text-3xl" />
        </div>
        <h2 className="mt-2">Access Your Dashboard</h2>
      </div>
      <div className="bg-gray-300 rounded-xl flex flex-col items-center p-3 justify-center text-xl hover:-translate-y-3 transition-transform cursor-pointer duration-1000 pl-5 pr-5">
        <div>
          <RiTimerFlashLine className="text-3xl" />
        </div>
        <h2 className="mt-2">Explore Features and Requirements</h2>
      </div>
    </div>
  );
};

export default Register;
