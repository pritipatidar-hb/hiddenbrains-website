import HomeView from "@/components/HomeView";
import { getData } from "@/lib/data";

export const revalidate = 3600;

// export const dynamic = "force-dynamic";

export const metadata = {
  title: "Hidden Brains UK | Leading IT Solutions & Software Development Company",
  description: "Hidden Brains UK is a leading IT solutions and software development company offering web, mobile app development, and digital transformation services across the UK.",
};

export default async function HomePage() {
  const data = await getData();
  return <HomeView data={data} />;
}
