import dynamic from 'next/dynamic';
import { getData } from "@/lib/data";


export const metadata = {
    title: "About Us | Hidden Brains UK - IT Solutions Company",
    description: "Learn about Hidden Brains UK, a leading IT solutions company with 22+ years of experience delivering innovative web and mobile app development services.",
};

export default async function AboutPage() {
  const data = await getData();
  const { ABOUT_CONTENT } = data;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {ABOUT_CONTENT.title}
      </h1>
      <p className="mt-4 text-base text-slate-300 md:text-lg">
        {ABOUT_CONTENT.description}
      </p>
      <Contact data={data} />
    </div>
  );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));
