import { getData } from "@/lib/data";
import TestimonialsContent from "@/components/testimonials/TestimonialsContent";

export const metadata = {
    title: "Video Testimonials | Hidden Brains UK",
    description: "Watch video testimonials from our valued clients. See how Hidden Brains UK has helped businesses transform with innovative IT solutions.",
};

export default async function TestimonialsPage() {
    const data = await getData();
    return <TestimonialsContent data={data} />;
}
