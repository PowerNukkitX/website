import DefaultLayout from "@/layouts/default";
import HeroHome from "@/components/home/HeroHome";
import FeatureHome from "@/components/home/FeatureHome";
import StatsSection from "@/components/home/StatsSection";
import FAQSection from "@/components/home/FAQHome";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<div className="bg-hero-pattern bg-no-repeat bg-center bg-cover">
				<HeroHome />
				<FeatureHome />
				<StatsSection />
				<FAQSection />
			</div>
		</DefaultLayout>
	);
}
