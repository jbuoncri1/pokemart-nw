import PageLayout from "@/components/page-layout";

import Banner from "@/components/banner";

const Home: React.FC = () => {
  return (
    <PageLayout>
      <Banner
        src="src/assets/images/banners/surging-sparks-2.jpeg"
        alt="surging sparks banner"
      />
    </PageLayout>
  );
};

export default Home;
