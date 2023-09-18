import Button from "@/components/ui/Button";

const Dashboard = () => {
  return (
    <main className="w-full h-full p-7">
      <header className="w-full flex items-start justify-between flex-col gap-3">
        <h3 className="text-black text-lg font-semibold">Overview</h3>
        <div className="flex items-center justify-center gap-2 w-full">
          <Button
            type="button"
            variant="filled"
            color="black"
            // bgColor="blue"
            onClick={() => alert("Export")}
          >
            Export
          </Button>
          <Button
            type="button"
            // variant="filled"
            color="black"
            bgColor="green"
            onClick={() => alert("Import")}
          >
            Import
          </Button>
        </div>
      </header>
    </main>
  );
};

export default Dashboard;
