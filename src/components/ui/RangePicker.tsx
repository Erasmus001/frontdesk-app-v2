import { useEffect, useState } from "react";

const RangePicker = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    if (startDate == "" && endDate == "") {
      return undefined;
    } else {
      console.log({ startDate, endDate });
    }
  }, [startDate, endDate]);

  return (
    <form className="w-fit flex items-center justify-center gap-3 border border-gray-300 rounded-md p-1 text-xs">
      <input
        type="date"
        name="startDate"
        id="startDate"
        placeholder="12 Jun"
        required
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
        className="p-1 border-gray-300 bg-transparent text-sm placeholder:text-gray-200 outline-none"
      />
      <input
        type="date"
        name="endDate"
        id="endDate"
        placeholder="12 Jul 2023"
        required
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
        className="p-1 border-gray-300 bg-transparent text-sm placeholder:text-gray-200 outline-none"
      />
    </form>
  );
};

export default RangePicker;
