import FeaturedWorks from "@/components/FeaturedWorks";
import Hero from "@/components/hero";
import RecentPost from "@/components/recentPost";
export default function Home() {
  return (
    <div className="">
      <Hero/>
      <RecentPost/>
      <FeaturedWorks/>
    </div>
  );
}
