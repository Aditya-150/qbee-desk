"use client"

import React from 'react'
import SubHeader from './ui/sub-header'
import SectionHeader from './ui/section-header'
import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What is Quantum Bee desk?",
        answer: "Quantum Bee desk is a real‑time location intelligence mobile application designed to help organizations efficiently manage their field teams. It provides features such as live location tracking, location‑based attendance, task management, meeting note logging, route analytics, and integration with payroll processes."
    },
    {
        question: "How do I download and install the app?",
        answer: "You can download Quantum Bee desk from your device's app store (Google Play Store for Android and the App Store for iOS). Simply search for \"Quantum Bee desk\" and follow the on-screen instructions to install the app on your mobile device."
    },
    {
        question: "What are the main features of the Quantum Bee desk app?",
        answer: (
            <div className="space-y-2">
                <p>Our app includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Real-Time Location Tracking: Monitor the live locations of your field employees and vehicles.</li>
                    <li>Location-Based Attendance: Automatically record attendance using GPS and geofencing.</li>
                    <li>Task and Meeting Management: Create, assign, and track tasks as well as record meeting notes on the go.</li>
                    <li>Route Analytics: Automatically calculate travel distances and optimize routes for efficient reimbursements.</li>
                    <li>Integrated Reporting: Generate daily, weekly, and monthly reports to help streamline payroll and performance management.</li>
                </ul>
            </div>
        )
    },
    {
        question: "How does location-based attendance work?",
        answer: "The app uses GPS and geofencing to automatically log when employees check in and out based on their location. Optional biometric verification adds an extra layer of security, ensuring accurate attendance records."
    },
    {
        question: "How do I manage my account and update my information?",
        answer: "All account management is handled within the app. You can update your personal or business information by navigating to the \"Account Settings\" section within the app."
    },
    {
        question: "What security measures are in place to protect my data?",
        answer: "Quantum Bee desk employs industry-standard security practices, including encryption and access controls, to protect your Personal Information and operational data. Access is limited to authorized personnel only, ensuring your information remains secure."
    },
    {
        question: "How can I contact support if I have an issue?",
        answer: "For technical support or any inquiries, please use the in-app support feature or email us at support@quantumbeedesk.com during our business hours (10:00 a.m. to 6:00 p.m., Monday to Friday). Major issues receive a response within 3 hours, medium issues within 3 business days, and minor issues within 7 business days."
    },
    {
        question: "How is my Personal Information used?",
        answer: "Your Personal Information is used to manage your account, provide and improve our Services, personalize your experience, and communicate important updates. We never sell your information and share it only with trusted partners as necessary to support our app's functionality—all in accordance with our Privacy Policy."
    },
    {
        question: "What subscription plans do you offer?",
        answer: "Our pricing is flexible, based on a per-user model with both monthly and yearly subscription options. Detailed pricing information is available within the app under the \"Pricing\" section."
    },
    {
        question: "What is your cancellation policy?",
        answer: "You may cancel your subscription by providing one (1) month written notice via the app's account management section or by contacting support. Please note that any data retrieval must occur within 7 business days after cancellation, after which data may be deleted according to our retention policies."
    },
    {
        question: "How do I export my data?",
        answer: "Quantum Bee desk allows you to export your data—including location logs, attendance records, task details, and reports—from within the app. This helps ensure that you maintain full control over your information."
    },
    {
        question: "Can I provide feedback or request new features?",
        answer: "Absolutely! We value your feedback. Please use the in-app feedback feature or contact us directly at support@quantumbeedesk.com to share your suggestions or report any issues."
    }
]

const FAQSection = () => {
    return (
        <section className="max-w-7xl mx-auto py-20 px-4 md:px-6 lg:px-8" id="faq">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center mb-16"
            >
                <SubHeader title="FAQ" />
                <SectionHeader 
                    title="Frequently Asked Questions" 
                    className="text-3xl/tight md:text-4xl/tight lg:text-5xl/tight w-full md:w-3/4 lg:w-1/2 text-center mt-2"
                />
                <p className="text-sm md:text-base w-full md:w-3/4 lg:w-1/2 text-center text-content mt-4">
                    Find answers to common questions about Quantum Bee desk. Can&apos;t find what you&apos;re looking for? Contact our support team.
                </p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <AccordionItem value={`item-${index}`} className="border rounded-lg px-4 md:px-6 py-2 hover:shadow-md transition-shadow duration-200">
                                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-content text-sm md:text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>
            </motion.div>
        </section>
    )
}

export default FAQSection;