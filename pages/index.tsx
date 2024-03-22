import FeatureHome from "@/components/home/FeatureHome";
import StatsSection from "@/components/home/StatsSection";
import FAQSection from "@/components/home/FAQHome";
import Layout from "@/layouts/layout";
import LandingHero from "@/components/landing/LandingHero";
import PluginRecomendation from "@/components/home/PluginRecomendation";

export default function IndexPage() {
	return (
		<Layout>
			<LandingHero />
			<FeatureHome />
			<StatsSection />
			<PluginRecomendation />
			<FAQSection />
		</Layout>
	);
}
