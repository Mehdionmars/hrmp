import { auth,  currentUser } from "@clerk/nextjs";

export default async function DashboardPage() {
    const {userId} = auth();

    if (!userId) {
        return <div>You are not logged in</div>;
    }

    const user = await currentUser();

    return <div>DashboardPage</div>;
    }