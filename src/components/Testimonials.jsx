import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { testimonialsData } from "../constants/testimonials";
import { titleVariants, carouselVariants } from "../constants/animations";

function Card({ item }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="h-full w-full overflow-hidden rounded-[26px] border border-white bg-white p-7 shadow-[0_10px_30px_rgba(34,98,234,0.07)] transition-shadow hover:shadow-[0_16px_36px_rgba(34,98,234,0.12)] md:min-h-[330px]"
    >
      <div className="text-left">
        <span
          className="block font-serif text-5xl font-bold leading-[0.75] text-[#9FC7FF]"
          aria-hidden="true"
        >
          “
        </span>
        <p className="mt-4 text-sm font-medium leading-[1.65] text-[#2b2b2b] md:text-[15px]">
          {item.text}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-[#E1E8F5] pt-5">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-[#E1E8F5]"
        />

        <div className="min-w-0 flex-1 text-left">
          <p className="text-sm font-semibold text-[#2b2b2b]">{item.name}</p>
          <p className="mt-0.5 text-xs text-[#363636]">{item.role}</p>
        </div>

        {item.linkedin && (
          <a
            href={item.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver el perfil de ${item.name} en LinkedIn`}
            className="ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F1F5FF] text-[#2262EA] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2262EA] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2262EA]/30"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const autoplay = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-title"
      className="relative overflow-hidden rounded-t-[80px] bg-[#F0F3FF] py-12 lg:py-16"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 font-poppins md:px-8">
        <motion.div
          className="flex flex-col text-center text-[#2262EA]"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="inline-block font-figtree text-sm font-bold uppercase tracking-[0.18em] text-gray-600">
            Testimonios
          </span>
          <h2
            id="testimonios-title"
            className="mt-2 font-passionate text-2xl font-bold sm:text-3xl md:text-4xl"
          >
            Lo que opinan las personas sobre mi trabajo
          </h2>
        </motion.div>

        <motion.div
          className="relative mt-10"
          variants={carouselVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex py-3 md:-ml-4">
              {testimonialsData.map((item) => (
                <div
                  key={item.id}
                  className="flex basis-full shrink-0 pl-4 md:basis-1/2 md:pl-4 lg:basis-1/3"
                >
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <motion.button
              type="button"
              onClick={scrollPrev}
              aria-label="Testimonio anterior"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white p-0 text-[#173A70] shadow-[0_8px_22px_rgba(34,98,234,0.08)] transition hover:bg-white hover:text-[#2262EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2262EA]/30"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </motion.button>

            <div className="flex items-center justify-center gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                  aria-current={index === selectedIndex ? "true" : undefined}
                  className={`h-2 rounded-full p-0 transition-all duration-300 ${
                    index === selectedIndex
                      ? "w-6 bg-[#2262EA]"
                      : "w-2 bg-[#CFE0F8] hover:bg-[#9FC7FF]"
                  }`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              onClick={scrollNext}
              aria-label="Siguiente testimonio"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white p-0 text-[#173A70] shadow-[0_8px_22px_rgba(34,98,234,0.08)] transition hover:bg-white hover:text-[#2262EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2262EA]/30"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
