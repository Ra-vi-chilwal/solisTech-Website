import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section id="features" className="bg-light/[.03] py-16 md:py-20 lg:py-28">
        {/* <div className="container">
          <div className="row d-flex" >
 <div className="col-lg-6 ">
          <SectionTitle
            title="Mobile App Development Services Read more on"
            paragraph="Solis Technology creates native, cross-platform and progressive web applications with stable performance, human-centered design and a unique selling proposition to stand out in a fierce market."
            
            center
          />
          </div>
          <div className="col-lg-6 ">
          <SectionTitle
            title="Mobile App Development Services Read more on"
            paragraph="Solis Technology creates native, cross-platform and progressive web applications with stable performance, human-centered design and a unique selling proposition to stand out in a fierce market."
            
            center
          />
          </div>
          </div>
         

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div> */}
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-8">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Inspiring Business Growth with Solis Technology"
                  paragraph="Digital Polaris was formed with the vision of becoming the brightest star in the digital marketing field. We are the best digital marketing agency in Gurgaon providing 360-degree digital marketing services & solutions for all your digital needs. Our close-knit integrated team of content developers, SEO executives, and digital marketing experts will put your business on the map. With our innovative approaches to improve brand recognition, you’ll get the best bang for the buck."
                />
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[700px]  lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <img
                    src="/images/icons/5051409.png"
                    alt="about-image"
                   
                    className="mx-auto max-w-full lg:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
