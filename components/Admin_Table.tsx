import { columns } from "./Admin_columns";
import { DataTable } from "./Admin_DataTable";

async function getData(): Promise<any[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      // ...
    ]
}

export const AdminTable = async () => {
    const data = await getData();
    return (
        <div className="p-6">
            <DataTable columns={columns} data={data} />
        </div>
    );
};