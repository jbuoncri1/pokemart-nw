import { useEffect, useState } from "react"

import PageLayout from "@/components/page-layout"

import { mockData } from "@/utils"
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const { banners } = mockData

const Home: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(banners[0].image)

  useEffect(() => {}, [currentBanner])

  console.log(currentBanner)

  return (
    <PageLayout>
      <div className={`flex items-center justify-center h-40`}>
        <Carousel
          className="w-full"
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
                  className={`bg-center bg-cover w-full relative h-full`}
                  key={banner.setCode}
                >
                  <div
                    className={`flex items-center justify-center p-8 py-64 z-20`}
                  >
                    <span className="w-full text-4xl font-semibold text-white">
                      {banner.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 z-10">
                    <img
                      src={banner.image}
                      alt={banner.name}
                      className="h-full aspect-auto object-cover"
                    />
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </PageLayout>
  )
}

export default Home
