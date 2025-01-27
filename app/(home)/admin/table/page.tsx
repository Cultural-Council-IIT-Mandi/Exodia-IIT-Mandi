import { columns } from "@/components/Admin_columns";
import { DataTable } from "@/components/Admin_DataTable";
import { announcement } from "@/models/announcement";
import { connectToDB } from "@/lib/connectDB";

const AdminTable = async () => {
    await connectToDB();
    const announcements = await announcement.find();

    return (
        <div className="p-6">
            <DataTable columns={columns} data={announcements} />
        </div>
    )
}

export default AdminTable;