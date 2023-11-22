import React from 'react';

import Navigation from "../components/parts/Navigation";
import Footer from '../components/parts/footer';
import InputText from '../components/parts/form/input/InputText';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import ScrollToTopArrow from '../components/parts/actions/ScrollToTopArrow';
import { NavLink } from 'react-router-dom';
import InputComboBox from '../components/parts/form/input/InputComboBox';

const Accueil = () => {
    return (
        <div>
            <Navigation />
            <div className='mt-20 mx-20'>
                <section className="overflow-hidden bg-white dark:bg-dark pt-5">
                    <div className="mx-auto">
                        <div className="flex flex-wrap items-center justify-between">
                            <div className="w-full lg:w-6/12 max-[1025px]:hidden">
                                <div className="flex items-center -mx-3 sm:-mx-4">
                                    <div className="w-full px-3 sm:px-4 xl:w-1/2 max-[1300px]:hidden">
                                        <div className="py-3 sm:py-4">
                                            <img
                                                src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                        <div className="py-3 sm:py-4">
                                            <img
                                                src="https://i.ibb.co/rfHFq15/image-2.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                        <div className="relative z-10 my-4">
                                            <img
                                                src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                                                alt=""
                                                className="w-full rounded-2xl max-[1300px]:w-[90%]"
                                            />
                                            <span className="absolute -right-7 -bottom-7 z-[-1] max-[1300px]:hidden">
                                                <svg
                                                    width={134}
                                                    height={106}
                                                    viewBox="0 0 134 106"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        cx="1.66667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 31 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3334"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3334 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 103 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 132 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="89.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 89.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="89.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 89.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="89.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 89.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="89.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 89.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="74.6673"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 74.6673)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="31.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 31.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="31.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 31.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="31.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 31.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="31.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 31.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="45.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 45.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="45.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 45.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="45.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 45.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="45.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 45.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:w-[500px] w-full px-4 lg:w-1/2 xl:w-5/12">
                                <div className="mt-10 lg:mt-0">
                                    <span className="block mb-4 text-lg font-semibold text-indigo-600">
                                        Pourquoi nous choisir ?
                                    </span>
                                    <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white text-md lg:text-[40px]/[48px]">
                                        Rencontrez un professionnel qui sera là pour vous.
                                    </h2>
                                    <p className="mb-5 text-base text-body-color dark:text-dark-6 hidden lg:block">
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem Ipsum is that it has a more-or-less.
                                    </p>
                                    <p className="mb-8 text-base text-body-color dark:text-dark-6 hidden lg:block">
                                        A domain name is one of the first steps to establishing your
                                        brand. Secure a consistent brand image with a domain name that
                                        matches your business.
                                    </p>
                                    <NavLink
                                        to="/je-suis-patient"
                                        className="inline-flex items-center justify-center py-3 font-medium text-center text-white border border-transparent rounded-md px-7  hover:bg-opacity-90 bg-indigo-600"
                                    >
                                        Trouver un professionnel
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mt-5'>
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                                <span className="mb-2 block text-lg font-semibold text-indigo-600">
                                    FAQ
                                </span>
                                <h2 className="capitalize mb-5 text-3xl font-bold text-dark dark:text-white text-md lg:text-[40px]/[48px]">
                                    une question ? regardez ici
                                </h2>
                                <p className="text-base text-slate-500">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 grid-rows-[repeat(3,120px)] gap-x-40 gap-y-10 place-content-center">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It&apos;s animated by default, but you can disable it if you
                                prefer.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
                <section className="container relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
                    <div className="-mx-4 flex flex-wrap lg:justify-between">
                        <div className="mb-12 max-w-[570px] lg:mb-0 w-full lg:w-1/2 xl:w-6/12">
                            <span className="mb-4 block text-base font-semibold text-indigo-600">
                                Contact Us
                            </span>
                            <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                Besoin d'une informations ?
                            </h2>
                            <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eius tempor incididunt ut labore e dolore magna aliqua. Ut
                                enim adiqua minim veniam quis nostrud exercitation ullamco
                            </p>

                            <div className="mb-8 flex w-full max-w-[370px]">
                                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <div className="w-full">
                                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                        Email Address
                                    </h4>
                                    <p className="text-base text-body-color dark:text-dark-6">
                                        info@yourdomain.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                                <form className='grid gap-5'>
                                    <InputComboBox content="Objet" label="objet" required data={{
                                        allResponse: ["Informations", "Problème"],
                                        placeholder: "Entrer votre objet...",
                                        label: "job"
                                    }} />
                                    <InputText content="Prénom" label="firstname" type="text" className="sm:col-span-1" required />
                                    <InputText content="Nom" label="nom" type="text" className="sm:col-span-1" required />
                                    <InputText content="Email" label="email" type="text" className="sm:col-span-1" required />
                                    <InputText content="Contenu" label="content" type="text" className="sm:col-span-1" required />
                                    <div className='pt-5'>
                                        <button
                                            type="submit"
                                            className="w-full rounded border bg-indigo-600 p-3 text-white transition hover:bg-opacity-90"
                                        >
                                            Envoyer le message
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <span className="absolute -right-9 -top-10 z-[-1]">
                                        <svg
                                            width={100}
                                            height={100}
                                            viewBox="0 0 100 100"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                                fill="#3056D3"
                                            />
                                        </svg>
                                    </span>
                                    <span className="absolute -right-10 top-[90px] z-[-1]">
                                        <svg
                                            width={34}
                                            height={134}
                                            viewBox="0 0 34 134"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="31.9993"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 132)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 117.333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 102.667)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 88)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 73.3333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 45)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 16)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 59)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 30.6666)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 1.66665)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 132)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 117.333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 102.667)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 88)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 73.3333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 45)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 16)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 59)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 30.6666)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 1.66665)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 132)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 117.333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 102.667)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 88)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 73.3333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 45)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 16)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 59)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 30.6666)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 1.66665)"
                                                fill="#4f46e5"
                                            />
                                        </svg>
                                    </span>
                                    <span className="absolute -bottom-7 -left-7 z-[-1]">
                                        <svg
                                            width={107}
                                            height={134}
                                            viewBox="0 0 107 134"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="104.999"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 104.999 132)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 104.999 117.333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 104.999 102.667)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 104.999 88)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 104.999 73.3333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 104.999 45)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 104.999 16)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 104.999 59)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 104.999 30.6666)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 104.999 1.66665)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 132)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 117.333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 102.667)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 88)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 73.3333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 45)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 16)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 59)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 30.6666)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 1.66665)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 132)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 132)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 117.333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 117.333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 102.667)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 102.667)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 88)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 88)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 73.3333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 73.3333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 45)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 45)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 16)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 16)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 59)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 59)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 30.6666)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 30.6666)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 1.66665)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 1.66665)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 132)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 132)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 117.333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 117.333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 102.667)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 102.667)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 88)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 88)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 73.3333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 73.3333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 45)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 45)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 16)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 16)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 59)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 59)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 30.6666)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 30.6666)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 1.66665)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 1.66665)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 132)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 132)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 117.333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 117.333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 102.667)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 102.667)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 88)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 88)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 73.3333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 73.3333)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 45)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 45)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 16)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 16)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 59)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 59)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 30.6666)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 30.6666)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 1.66665)"
                                                fill="#4f46e5"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 1.66665)"
                                                fill="#4f46e5"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ScrollToTopArrow />
            <Footer />
        </div>
    );
};

export default Accueil;