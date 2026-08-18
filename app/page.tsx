import HomePage from "./components/Homepage";
import { getServerSession } from "next-auth"; // or your auth provider

export default async function Page() {
  const session = await getServerSession();

  // Format user prop if logged in
  const userData = session?.user ? {
    name: session.user.name || "Patient",
    email: session.user.email || "",
    activePrescriptionsCount: 3,
    lastOrderStatus: "Out for delivery today"
  } : null;

  return <HomePage user={userData} />;
}