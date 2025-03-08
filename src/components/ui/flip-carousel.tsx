"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BadgeCheckIcon } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const tweets = [
    {
        author: "Velupillai Prabhakaran",
        handle: "@VPrabhakaran",
        content: "Our team now has a clear, real-time view of everyone's progress. Quantum Bee has helped us built systems that feels like a friendly assistant that keeps us on track every day!",
        date: "12:15 PM · Feb 19, 2025",
        platform: "Twitter for Android",
        avatar: "/avatars/avatar1.jpeg"
    },
    {
        author: "Ravi Gupta",
        handle: "@guptaravi",
        content: "Quantum Bee has transformed our business operations with their cutting-edge ERP solutions. The seamless integration and user-friendly interface have made our daily tasks so much more efficient. ",
        date: "11:33 AM · Jan 27, 2025",
        platform: "Twitter Web App",
        avatar: "/avatars/avatar2.jpeg"
    },
    {
        author: "Rakesh Kumar",
        handle: "@rkrocks",
        content: "I appreciate how straightforward solutions can significantly impact business, and Quantum Bee has consistently embraced this approach.",
        date: "9:30 AM · Jan 22, 2025",
        platform: "Twitter for iPhone",
        avatar: "/avatars/avatar3.jpeg"
    }
];

const FlipCarousel = () => {
    const CARD_OFFSET = 10;
    const SCALE_FACTOR = 0.06;
    const [cards, setCards] = useState(tweets);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prevCards) => {
                const newArray = [...prevCards];
                newArray.unshift(newArray.pop()!);
                return newArray;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[600px] mx-auto flex items-center justify-center">
            <AnimatePresence>
                {cards.map((tweet, index) => (
                    <motion.div
                        key={tweet.content}
                        className="absolute mt-12 sm:mt-16 lg:mt-20 w-full bg-white rounded-xl p-3 sm:p-4 shadow-xl shadow-gray-500/30"
                        style={{
                            transformOrigin: "top center",
                        }}
                        initial={{ opacity: 0, rotateX: 90 }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: cards.length - index,
                            opacity: 1,
                            rotateX: 0,
                        }}
                        exit={{ opacity: 0, rotateX: -90 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="flex flex-col">
                            <div className="flex gap-2 sm:gap-3">
                                <div className="size-10 sm:size-12 overflow-hidden rounded-full flex items-center justify-center">
                                    <Image
                                        src={tweet.avatar}
                                        alt={tweet.author}
                                        width={48}
                                        height={48}
                                        className="object-cover h-full w-full"
                                    />
                                </div>
                               <div className="flex flex-col">
                                    <div className="flex flex-row items-center gap-1">
                                        <h4 className="font-semibold text-[13px] sm:text-[15px]">{tweet.author}</h4>
                                        <BadgeCheckIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="blue" />
                                    </div>
                                    <p className="text-gray-500 text-[13px] sm:text-[15px]">{tweet.handle}</p>
                               </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-[13px] sm:text-[15px] mt-2 sm:mt-3 leading-normal line-clamp-3 sm:line-clamp-none">{tweet.content}</p>
                                <div className="flex items-center gap-1 mt-2 sm:mt-3 text-gray-500 text-xs sm:text-sm">
                                    <span>{tweet.date}</span>
                                    <span>·</span>
                                    <span className="hidden sm:inline">{tweet.platform}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default FlipCarousel;