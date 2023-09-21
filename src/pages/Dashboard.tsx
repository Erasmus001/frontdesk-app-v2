import Overview from "@/components/Overview/Index";
import Button from "@/components/ui/Button";
import RangePicker from "@/components/ui/RangePicker";
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { VisitorsTableData } from "@/config/tableData";

const Dashboard = () => {
  return (
    <main className="w-full h-full p-7 flex items-start justify-start flex-col gap-6">
      <header className="w-full flex items-center justify-between">
        <h2 className="text-xl font-semibold">Overview</h2>
        <div className="flex items-center justify-center gap-4">
          <RangePicker />
          <Button
            bgColor="blue"
            color="white"
            type="button"
            onClick={() => alert("Fuck off")}
          >
            Export
          </Button>
        </div>
      </header>

      {/* Overview Card */}
      <Overview />

      {/* Visitors Logs */}
      <Table className="w-full bg-white border border-gray-20 shadow-sm rounded-lg">
        <TableHead>
          <TableRow className="w-full bg-blue-500 h-14 px-4 text-white">
            <TableHeaderCell className="text-left">Fullname</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Phone number</TableHeaderCell>
            <TableHeaderCell>Purpose</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className="">
          {VisitorsTableData?.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.fullname}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.phoneNumber}</TableCell>
              <TableCell>{data.purpose}</TableCell>
              <TableCell>
                <Badge color="blue">{data.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

export default Dashboard;
