import { Card } from "@tremor/react";

const OverviewStat = () => {
  return (
    <Card className="w-full grid grid-cols-2 gap-7">
      <div className="w-full flex items-start justify-start flex-col gap-1">
        <h3 className="text-base font-semibold text-gray-700">Total visitor</h3>
        <h1 className="text-3xl font-bold">200</h1>
        <p className="text-sm text-gray-500 mt-4">Visitors</p>
      </div>
      <div className="w-full flex items-start justify-start flex-col gap-1">
        <h3 className="text-base font-semibold text-gray-700">
          Total deliveries
        </h3>
        <h1 className="text-3xl font-bold">200</h1>
        <p className="text-sm text-gray-500 mt-4">Deliveries</p>
      </div>
      <div className="w-full flex items-start justify-start flex-col gap-1">
        <h3 className="text-base font-semibold text-gray-700">
          Total enquiries
        </h3>
        <h1 className="text-3xl font-bold">200</h1>
        <p className="text-sm text-gray-500 mt-4">Enquiries</p>
      </div>
      <div className="w-full flex items-start justify-start flex-col gap-1">
        <h3 className="text-base font-semibold text-gray-700">
          Total document
        </h3>
        <h1 className="text-3xl font-bold">200</h1>
        <p className="text-sm text-gray-500 mt-4">Documents</p>
      </div>
    </Card>
  );
};

export default OverviewStat;

{
  /* <h3>Total deliveries</h3>
        <h3>Total enquiries</h3>
        <h3>Total document</h3> */
}
