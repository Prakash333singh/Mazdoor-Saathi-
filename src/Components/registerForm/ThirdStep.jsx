import { useEmployerFormContext } from "../../contexts/EmployerFormDataProvider";
import { useWorkerFormContext } from "../../contexts/WorkerFormDataProvider";

export default function ThirdStep() {
  const { workerFormData, setWorkerFormData } = useWorkerFormContext();
  const { employerFormData, setEmployerFormData } = useEmployerFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkerFormData({ ...workerFormData, [name]: value });
    setEmployerFormData({ ...employerFormData, [name]: value });
  };

  return (
    <div className="mx-auto max-w-md p-4 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-semibold mb-4">Address</h1>
      <div className="space-y-4">
        <input
          type="text"
          name="street"
          placeholder="Street"
          onChange={handleChange}
          value={workerFormData.street || ""}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          value={workerFormData.city || ""}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          value={workerFormData.pincode || ""}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          pattern="[0-9]{6}"
          max={999999}
          title="Pincode must be exactly 6 digits"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          onChange={handleChange}
          value={workerFormData.state || ""}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}
