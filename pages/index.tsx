import FeatureHome from "@/components/home/FeatureHome";
import StatsSection from "@/components/home/StatsSection";
import FAQSection from "@/components/home/FAQHome";
import Layout from "@/layouts/layout";
import LandingHero from "@/components/landing/LandingHero";

export default function IndexPage() {
	return (
		<Layout>
			<div className="bg-hero-pattern bg-no-repeat bg-bottom bg-contain">
				<LandingHero />
				<FeatureHome />
				<StatsSection />
				<FAQSection />
			</div>
		</Layout>
	);
}
