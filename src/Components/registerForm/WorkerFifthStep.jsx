import { useWorkerFormContext } from "../../contexts/WorkerFormDataProvider";

export default function WorkerFifthStep() {
  const { workerFormData, setWorkerFormData } = useWorkerFormContext();

  // Function to handle file input change and update WorkerFormContext
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setWorkerFormData((prev) => ({ ...prev, [e.target.name]: file }));
  };

  return (
    <div className="mx-auto max-w-md p-4 bg-white shadow-md rounded-md w-full">
      <h1 className="text-xl font-semibold mb-4">Upload Documents</h1>
      <div className="space-y-4">
        <div className="flex items-center">
          <label htmlFor="photo" className="mr-2">
            Photo:
          </label>
          <input
            type="file"
            name="photo"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="border border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="aadharCard" className="mr-2">
            Aadhar Card:
          </label>
          <input
            type="file"
            name="aadharCard"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="border border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="laborCard" className="mr-2">
            Labour Card:
          </label>
          <input
            type="file"
            name="laborCard"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="border border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
      </div>
    </div>
  );
}
