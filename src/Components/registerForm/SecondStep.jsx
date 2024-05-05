import { useEmployerFormContext } from "../../contexts/EmployerFormDataProvider";
import { useWorkerFormContext } from "../../contexts/WorkerFormDataProvider";

export default function SecondStep() {
  const { workerFormData, setWorkerFormData } = useWorkerFormContext();
  const { employerFormData, setEmployerFormData } = useEmployerFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkerFormData({ ...workerFormData, [name]: value });
    setEmployerFormData({ ...employerFormData, [name]: value });
  };

  return (
    <div className="mx-auto max-w-md h-fit p-4 bg-white rounded-md shadow-md">
      <h1 className="text-xl font-semibold mb-4 text-center">
        Personal Information
      </h1>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          value={workerFormData.name || ""}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            required
            onChange={handleChange}
            value={workerFormData.dob || ""}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            max={
              new Date(
                new Date().getFullYear() - 18,
                new Date().getMonth(),
                new Date().getDate()
              )
                .toISOString()
                .split("T")[0]
            }
          />
        </div>
        <div>
          <p>Gender:</p>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={workerFormData.gender === "male"}
            className="mr-1"
          />
          <label htmlFor="male" className="mr-4">
            Male
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={workerFormData.gender === "female"}
            className="mr-1"
          />
          <label htmlFor="female" className="mr-4">
            Female
          </label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={handleChange}
            checked={workerFormData.gender === "other"}
            className="mr-1"
          />
          <label htmlFor="other">Other</label>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          value={workerFormData.email || ""}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="tel"
          name="mobileNumber"
          placeholder="Phone No."
          value={localStorage.getItem("formattedPh") || ""}
          readOnly
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="company"
          placeholder="Your Company (Optional)"
          onChange={handleChange}
          value={workerFormData.company || ""}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}
