import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import e1 from "@/assets/emergency/e1.png";
import e2 from "@/assets/emergency/e2.png";
import e3 from "@/assets/emergency/e3.png";
import e4 from "@/assets/emergency/e4.png";
import e5 from "@/assets/emergency/e5.png";
import e6 from "@/assets/emergency/e6.png";
import e7 from "@/assets/emergency/e7.png";
import e8 from "@/assets/emergency/e8.png";
import e9 from "@/assets/emergency/e9.png";
import e10 from "@/assets/emergency/e10.png";
import e11 from "@/assets/emergency/e11.png";
import e12 from "@/assets/emergency/e12.png";
import e13 from "@/assets/emergency/e13.png";
import e14 from "@/assets/emergency/e14.png";
import e15 from "@/assets/emergency/e15.png";
import e16 from "@/assets/emergency/e16.png";
import e17 from "@/assets/emergency/e17.png";

const emergencyItems = [
  { label: "Emergency 1", href: "/emergency/1", img: e1 },
  { label: "Emergency 2", href: "/emergency/2", img: e2 },
  { label: "Emergency 3", href: "/emergency/3", img: e3 },
  { label: "Emergency 4", href: "/emergency/4", img: e4 },
  { label: "Emergency 5", href: "/emergency/5", img: e5 },
  { label: "Emergency 6", href: "/emergency/6", img: e6 },
  { label: "Emergency 7", href: "/emergency/7", img: e7 },
  { label: "Emergency 8", href: "/emergency/8", img: e8 },
  { label: "Emergency 9", href: "/emergency/9", img: e9 },
  { label: "Emergency 10", href: "/emergency/10", img: e10 },
  { label: "Emergency 11", href: "/emergency/11", img: e11 },
  { label: "Emergency 12", href: "/emergency/12", img: e12 },
  { label: "Emergency 13", href: "/emergency/13", img: e13 },
  { label: "Emergency 14", href: "/emergency/14", img: e14 },
  { label: "Emergency 15", href: "/emergency/15", img: e15 },
  { label: "Emergency 16", href: "/emergency/16", img: e16 },
  { label: "Emergency 17", href: "/emergency/17", img: e17 },
];

const Emergency = () => {
  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    })
  );

  return (
    <div className="w-full p-[70px] bg-primary/5">
      <div className="text-center mb-10">
        <h2 className="heading">Emergency</h2>
        <h3 className="subHeading">Hotlines for help you</h3>
      </div>
      <Carousel
        plugins={[autoplayPlugin.current]}
        className="w-full"
        onMouseEnter={autoplayPlugin.current.stop}
        onMouseLeave={autoplayPlugin.current.reset}
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="w-full">
          {emergencyItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
              <div className="p-1">
                <Card className="border-0 h-[100px] flex items-center">
                  <CardContent className="flex aspect-square items-center justify-center p-6 border-0">
                    <img src={item.img} alt={item.label} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Emergency;
