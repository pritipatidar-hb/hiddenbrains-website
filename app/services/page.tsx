import dynamic from 'next/dynamic';
import { getData } from "@/lib/data";


export const metadata = {
    title: "Our Services - IT Solutions & Development | Hidden Brains UK",
    description: "Explore our comprehensive range of IT services including web development, mobile app development, software solutions, and digital transformation services.",
};

export default async function ServicesPage() {
  const data = await getData();
  const { SERVICES_CONTENT } = data;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {SERVICES_CONTENT.title}
      </h1>
      <p className="mt-4 text-base text-slate-300 md:text-lg">
        {SERVICES_CONTENT.description}
      </p>
      <Contact data={data} />
    </div>
  );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));
