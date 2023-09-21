import OverviewStat from "./OverviewStat";

const Overview = () => {
  return (
    <div className="w-full border border-gray-200 rounded-xl grid grid-cols-3 p-7 shadow-sm bg-white">
      <OverviewStat />
      <div className="h-full w-[0.5px] bg-gray-300"></div>
      <div className="grid col-span-2 bg-blue-300">
        {/* Bar Chart */}

      </div>
    </div>
  );
};

export default Overview;
