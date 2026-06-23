"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const projects = [
    "/project-1.jpeg",
    "/project-2.jpeg",
    "/project-3.jpeg",
    "/project-4.jpeg",
    "/project-5.jpeg",
    "/project-6.jpeg",
    "/project-7.jpeg",
    "/project-8.jpeg",
    "/project-9.jpeg",
  ];

  const reviews = [
    {
      name: "Kevin McFelea",
      text: "Excellent work. Hard to find these days. Shower for elderly father looks great. Thanks.",
    },
    {
      name: "Jack Pasquill",
      text: "They did the remodel in a timely manner. They were professional and talented. It was done in the timeframe requested at the quoted price. Excellent job.",
    },
    {
      name: "Caroline Wylupek",
      text: "Justin did excellent work for us, was on time and completed the job in the quoted time. We definitely plan to work with him again!",
    },
    {
      name: "Ashley Wilson",
      text: "Justin did an amazing job on our backsplash and tile showers. Everything looks great, and the quality of work is excellent. We are very happy with the results!",
    },
    {
      name: "Samuel Staton",
      text: "Justin has done several tile jobs at my business. Always on time and professional. Highly recommend!",
    },
    {
      name: "Josh Valentine",
      text: "Carolina Tile Services is hands down the best tile company in North Carolina. Justin's work is impeccable and he is prompt, courteous, detailed, caring and a man of his word.",
    },
    {
      name: "Doris Elliott",
      text: "Excellent company! Customer service is a top priority. Their expertise, work ethic, and quality products exceed expectations.",
    },
    {
      name: "Kevin Stone",
      text: "Very professional and do exceptional quality work! I would gladly recommend them to anyone!",
    },
    {
      name: "Glen Chapman",
      text: "Justin remodeled my bathroom with tile and quartz countertop. I could not be more satisfied. He took pride in his work and cleaned up everything after completion.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#343A40]">
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
          <header className="flex items-center justify-between border-b border-white/10 bg-black/20 clackdrop-blur-md px-6 py-4 rounded-2x1">
            <img
              src="/logo-horizontal.png"
              alt="Carolina Tile Services"
              className="h-28 md:h-42 w-autoo opacity-60"
            />

            <a
              href="tel:+18288292837"
              className="rounded-full bg-[#B58A58] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              📞 (828) 829-2837
            </a>
          </header>

          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#B58A58]">
              Tile Installation & Remodeling
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl">
              Luxury tile craftsmanship designed to elevate your home.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-[#F8F6F1] md:text-xl">
              Premium bathroom remodels, custom showers, kitchen backsplashes,
              and elegant tile installations throughout Charlotte, NC.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#B58A58] px-8 py-4 font-semibold text-white hover:opacity-90"
              >
                Request an Estimate
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#B58A58]">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Professional tile solutions for your home.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Bathroom Tile",
              "Kitchen Backsplash",
              "Luxury Vinyl Floor Tile Installation",
              "Laminate Flooring",
              "Hardwood Flooring",
              "Remodel",
            ].map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-[#D9D7D2] bg-[#F8F6F1] p-6"
              >
                <h3 className="text-xl font-bold">{service}</h3>
                <p className="mt-3 text-[#6F7478]">
                  Clean workmanship, attention to detail, and reliable service
                  from start to finish.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F1] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#B58A58]">
            Recent Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Quality craftsmanship you can trust.
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-12 pb-12"
          >
            {projects.map((image, index) => (
              <SwiperSlide key={image}>
                <div className="overflow-hidden rounded-3xl shadow-lg">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="h-80 w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#B58A58]">
            Customer Reviews
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            5-Star Reviews from Real Homeowners
          </h2>

          <p className="mt-4 max-w-3xl text-[#6F7478]">
            See why homeowners across North Carolina trust Carolina Tile
            Services for high-quality tile installation and remodeling.
          </p>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-10 pb-12"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.name}>
                <div className="flex h-full flex-col rounded-3xl bg-[#F8F6F1] p-8 shadow-sm">
                  <div className="text-xl text-[#B58A58]">★★★★★</div>
                  <p className="mt-4 flex-1 text-[#6F7478]">
                    “{review.text}”
                  </p>
                  <p className="mt-6 font-bold">{review.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#B58A58]">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Quality work. Clear communication. Reliable service.
          </h2>

          <p className="mt-6 text-lg text-[#6F7478]">
            From small repairs to complete tile projects, Carolina Tile Services
            focuses on delivering a smooth experience and a finished result you
            can be proud of.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-[#343A40] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">Ready to start your project?</h2>

          <p className="mt-4 text-lg text-[#D9D7D2]">
            Contact Carolina Tile Services today to request a free estimate.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+18288292837"
              className="rounded-full bg-[#B58A58] px-8 py-4 font-semibold text-white hover:opacity-90"
            >
              Call (828) 829-2837
            </a>

            <a
              href="mailto:contact@carolinatileservices.com"
              className="rounded-full border border-white/30 px-8 py-4 font-semibold hover:bg-white/10"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}