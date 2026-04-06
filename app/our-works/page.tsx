import dynamic from 'next/dynamic';
import { getData } from "@/lib/data";

import PortfolioView from "@/components/portfolio/PortfolioView";

export const metadata = {
  title: "Our Work - Portfolio | Hidden Brains UK",
  description: "Explore our portfolio of successful projects. Hidden Brains UK has delivered innovative web and mobile solutions across various industries worldwide.",
};

export default async function PortfolioPage() {
  const data = await getData();
  const { PORTFOLIO_CONTENT, PROJECTS } = data;

  return (
    <div className="w-full">
      <PortfolioView
        title={PORTFOLIO_CONTENT.title}
        description={PORTFOLIO_CONTENT.description}
        projects={PROJECTS}
      />
      {/* <Contact data={data} /> */}
    </div>
  );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));
