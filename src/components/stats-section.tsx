"use client"

import React from 'react'
import { motion } from 'framer-motion'

const stats = [
    {
        number: "10K+",
        label: "Active Users"
    },
    {
        number: "95%",
        label: "Customer Satisfaction"
    },
    {
        number: "24/7",
        label: "Support Available"
    },
    {
        number: "50+",
        label: "Countries Served"
    }
]

const StatsSection = () => {
  return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Background with gradient and pattern */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-[#874BF8]/5 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[url('/stats-pattern.svg')] bg-repeat opacity-5" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-center"
                        >
                            <motion.h3 
                                initial={{ scale: 0.5 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                            >
                                {stat.number}
                            </motion.h3>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-2 text-sm md:text-base text-content"
                            >
                                {stat.label}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
          </div>
    </section>
  )
}

export default StatsSection