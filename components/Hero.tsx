"use client";
import { CustomButton } from ".";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Encontre o carro dos seus sonhos</h1>
        <p className="hero__subtitle">
          O veículo dos seus sonhos está aqui embarque em uma jornada de
          excelência automotiva conosco.
        </p>
        <CustomButton
          title="Encontre aqui"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        ></CustomButton>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/lambo.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
