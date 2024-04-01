import FeatureHome from "@/components/home/FeatureHome";
import StatsSection from "@/components/home/StatsSection";
import FAQSection from "@/components/home/FAQHome";
import Layout from "@/layouts/layout";
import LandingHero from "@/components/landing/LandingHero";
import PluginRecommendation from "@/components/home/PluginRecommendation";

export default function IndexPage() {
	return (
		<Layout>
			<LandingHero />
			<FeatureHome />
			<StatsSection />
			<PluginRecommendation />
			<FAQSection />
		</Layout>
	);
}
