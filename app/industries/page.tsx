import dynamic from 'next/dynamic';
import { getData } from "@/lib/data";


export const metadata = {
    title: "Industries We Serve | Hidden Brains UK",
    description: "Hidden Brains UK delivers innovative IT solutions across diverse industries including healthcare, fintech, eCommerce, real estate, and more.",
};

export default async function IndustriesPage() {
  const data = await getData();
  const { INDUSTRIES_CONTENT } = data;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {INDUSTRIES_CONTENT.title}
      </h1>
      <p className="mt-4 text-base text-slate-300 md:text-lg">
        {INDUSTRIES_CONTENT.description}
      </p>
      <Contact data={data} />
    </div>
  );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));
