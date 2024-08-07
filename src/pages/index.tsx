import FeatureHome from "@/components/home/FeatureHome";
import StatsSection from "@/components/home/StatsSection";
import FAQSection from "@/components/home/FAQHome";
import Layout from "@/layouts/layout";
import LandingHero from "@/components/landing/LandingHero";
import React from "react";
import {ColorProvider} from "@/components/ColorContext";

export default function IndexPage() {
	return (
		<ColorProvider>
			<Layout>
				<LandingHero/>
				<FeatureHome/>
				<StatsSection/>
				<FAQSection/>
			</Layout>
		</ColorProvider>
	);
}
