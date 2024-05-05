import { useWorkerFormContext } from "../../contexts/WorkerFormDataProvider";

export default function FourthStep() {
  const { workerFormData, setWorkerFormData } = useWorkerFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkerFormData({ ...workerFormData, [name]: value });
  };

  return (
    <div className="mx-auto max-w-md p-4 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-semibold mb-4">Select Category</h1>
      <div className="space-y-4">
        <select
          name="userRole"
          onChange={handleChange}
          value={workerFormData.userRole || ""}
          required // Adding required attribute to ensure an option is selected
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled hidden>
            Select user role
          </option>
          <option value="worker">Worker</option>
          <option value="contractor">Contractor</option>
        </select>
        <select
          name="categoriesOfWork"
          onChange={handleChange}
          value={workerFormData.categoriesOfWork || ""}
          required // Adding required attribute to ensure an option is selected
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled hidden>
            Select category of work
          </option>
          <option value="construction">Construction</option>
          <option value="household">Household</option>
          <option value="factory">Factory</option>
          <option value="farm">Farm</option>
          <option value="transportation">Transportation</option>
          <option value="skilled">Skilled</option>
          <option value="service">Service</option>
        </select>
      </div>
    </div>
  );
}
