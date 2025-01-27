import isAdmin from "@/lib/isAdmin";
import { announcement } from "@/models/announcement";
import { auth } from "@clerk/nextjs/server";

export async function DELETE(req: Request, {params} : { params : { _id : string; }}) {
    try {
        const { userId } = await auth();

        if(!isAdmin(userId ? userId : ""))
            return new Response(null, { status: 403 });

        const { _id } = params;

        const result = await announcement.findById(_id);

        if(!result) {
            return new Response(null, { status: 404 });
        }

        const deletedAnnouncement = await announcement.findByIdAndDelete(_id);

        if(!deletedAnnouncement) {
            return new Response(null, { status: 500 });
        }

        return new Response(null, { status: 204 });
    }
    catch(error) {
        console.log(error);
        return new Response(null, { status: 500 });
    }
}