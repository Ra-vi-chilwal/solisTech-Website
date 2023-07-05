"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import one from "../../public/images/icons/2.svg";
import two from "../../public/images/icons/2.svg";
import three from "../../public/images/icons/3.svg";
import four from "../../public/images/icons/4.svg";
import five from "../../public/images/icons/5.svg";
import six from "../../public/images/icons/6.svg";
import seven from "../../public/images/icons/7.svg";
import eight from "../../public/images/icons/8.svg";
import ModalVideo from "react-modal-video";

import KeyFeatureBox from "../KeyFeature/KeyFeatureBox";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-8">
      <div className="container">
        <SectionTitle
          title="Our Key Feature"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative aspect-[77/40] items-center justify-center">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-3">
                <KeyFeatureBox
                  title="Data Protection"
                  subtitle="By signing an NDA, our company ensures the utmost safety of all your private data. We deliver best-rated products to maintain confidentiality."
                  icon={one}
                />
                <KeyFeatureBox
                  title="Agile Development"
                  subtitle="We follow the Agile Development process that helps us to deliver the project with utmost quality and solid product for reliable and scalable business."
                  icon={two}
                />
                <KeyFeatureBox
                  title="Quality Deliverance"
                  subtitle="We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price."
                  icon={three}
                />
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-5 md:grid-cols-2 lg:grid-cols-3">
                <KeyFeatureBox
                  title="Client Centric Development"
                  subtitle="We craft the client's needs on web, mobile, and blockchain to tailor the solutions and enhance growth of the businesses."
                  icon={five}
                />
                <KeyFeatureBox
                  title="Enhancement"
                  subtitle="During Discovery, Designing and Development phases, our technical team is always there to provide suggestions and edits to improvise their product.

"
                  icon={six}
                />
                <KeyFeatureBox 
                  title="Data Backups"
                  subtitle="The backups are the important part  and we carefully maintain your Data  our clients project backups to deal with misfortunes in the best manner."
                  icon={seven}/>
                  </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-5 md:grid-cols-2 lg:grid-cols-3">
                  <KeyFeatureBox
                    title="Excellent Support"
                    subtitle="We are always there to assist our clients in every possible way to meet client's expectations and end needs."
                    icon={seven}
                  />
                  <KeyFeatureBox title="Dedicated Development Team"
                    subtitle="Our skilled team leverage projects to provide best results.The team dedicates their every effort and does not look back."
                    icon={eight}/>
                </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/images/video/shape.svg" alt="shape" className="w-full" />
      </div>
    </section>
  );
};

export default Video;
