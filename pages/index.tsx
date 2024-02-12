import DefaultLayout from "@/layouts/default";
import HeroHome from "@/components/home/HeroHome";
import FeatureHome from "@/components/home/FeatureHome";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<HeroHome />
			<FeatureHome />
		</DefaultLayout>
	);
}
