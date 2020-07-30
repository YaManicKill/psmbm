import React from 'react';
import HeroImage from '../images/hero.jpg';

export default () => (
    <section id="intro" className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none">
            Friends of Gordon Cottage
            </h1>
            <p className="text-xl lg:text-1xl mt-6 font-light">
            Friends of Gordon Cottage provide funding and support to Gordon Cottage Child Development Centre (CDC), based in Kelty, Fife.
            </p>
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-none mt-6">
            Gordon Cottage CDC
            </h1>
            <p className="text-xl lg:text-1xl mt-6 font-light">
            Gordon Cottage CDC provide a play based approach to assessment and therapy for children who have a wide variety of additional support needs. Our aim is to work with parents to enhance the abilities of all children who have development problems. We believe that every child has the right to the opportunity to fulfil their full potential.
            </p>
        </div>
        <div className="lg:w-1/2 lg:self-center lg:ml-2 mt-2 lg:mt-0 flex justify-center">
            <img src={HeroImage} alt="Image of a ladybird, drawn by a child" />
        </div>
        </div>
    </section>
);
