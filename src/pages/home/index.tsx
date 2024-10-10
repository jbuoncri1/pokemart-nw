import { useEffect, useState } from "react";

import PageLayout from "@/components/page-layout";

import { mockData } from "@/utils";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const { banners } = mockData;

const Home: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(banners[0].image);

  useEffect(() => {}, [currentBanner]);

  console.log(currentBanner);

  return (
    <PageLayout>
      <div className={`flex items-center justify-center h-40`}>
        <Carousel
          className="w-full max-w-xs"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {banners.map((banner) => {
              return (
                <CarouselItem
                  className={`bg-center bg-cover w-full`}
                  key={banner.setCode}
                >
                  <div className={`flex items-center justify-center`}>
                    <span className="w-full text-4xl font-semibold text-white">
                      {banner.name}
                    </span>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </PageLayout>
  );
};

export default Home;
