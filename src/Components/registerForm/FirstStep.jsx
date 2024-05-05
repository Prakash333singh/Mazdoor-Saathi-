import { useEmployerFormContext } from "../../contexts/EmployerFormDataProvider";
import { useWorkerFormContext } from "../../contexts/WorkerFormDataProvider";

export default function FirstStep({ userType, setUserType }) {
  const { setEmployerFormData } = useEmployerFormContext();
  function handleChange(e) {
    setUserType(e.target.value);
    if (e.target.value === "employer") {
      setEmployerFormData((prev) => ({ ...prev, ["userRole"]: "employer" }));
    }
  }

  return (
    <div className="shadow-md rounded-md">
      <select
        name="user-type"
        id="user-type"
        value={userType}
        onChange={(e) => handleChange(e)}
        required
        className="p-2 text-base rounded-md border border-gray-300 outline-none bg-white shadow-sm"
      >
        <option value="" disabled hidden>
          Select your role
        </option>
        <option value="worker-contractor">Worker/Contractor</option>
        <option value="employer">Employer</option>
      </select>
    </div>
  );
}
