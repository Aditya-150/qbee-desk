import React from 'react'
import SubHeader from './ui/sub-header'
import SectionHeader from './ui/section-header'
import { BanknoteIcon, BarChartIcon, CalendarClockIcon, CheckCheckIcon, CompassIcon, HandCoinsIcon, HandshakeIcon, ListCheckIcon, MapPinIcon, PieChartIcon } from 'lucide-react'
import Image from 'next/image'
// import Image from 'next/image'

const features = [
    {
        id: 1,
        icon: <MapPinIcon size={14} />,
        reverse: false,
        subTitle: "Tracking",
        title: "Live Employee Tracking",
        description: "Keep up with your team in real time. Our intuitive dashboard lets you see where everyone is, so you can manage shifts and support your workforce seamlessly.",
        image: "/features/features-1.webp",
        benefits: [
            {
                id: 1,
                title: "Geo Fencing",
                icon: <CompassIcon size={16} />,
                description: "Automatically monitor employee locations with our smart geo-fencing feature. Keep your team within designated work zones to boost accountability and streamline operations."
            },
            {
                id: 2,
                title: "Optimized time usage",
                icon: <CalendarClockIcon size={16} />,
                description: "Unlock peak productivity with optimized time tracking. Our system minimizes downtime and ensures every minute is used efficiently, powering your team to excel."
            },
        ]
    },
    {
        id: 2,
        icon: <CheckCheckIcon size={14} />,
        reverse: true,
        subTitle: "Task Assigned",
        title: "Task and Project Management",
        description: "Organize and assign tasks with ease. Whether it's daily to-dos or big projects, our system keeps everyone aligned and moving forward - without the stress.",
        image: "/features/features-2.webp",
        benefits: [
            {
                id: 1,
                title: "Performance Insights",
                icon: <PieChartIcon size={16} />,
                description: "Get real-time, data-driven insights into your team's performance. Leverage detailed metrics to drive growth, optimize processes, and foster a high-performance culture."
            }, {
                id: 2,
                title: "Daily Reports",
                icon: <BarChartIcon size={16} />,
                description: "Receive concise, actionable daily reports that keep you updated on progress and challenges. Make quick, informed decisions to keep your team on track every day."
            },
        ]
    },
    {
        id: 3,
        icon: <HandshakeIcon size={14} />,
        reverse: false,
        subTitle: "HR Systems",
        title: "Comprehensive ERP & HR Tools",
        description: "From HR processes to resource planning, our solution simplifies your workflow. Enjoy friendly guidance every step of the way to keep your operations smooth and efficient.",
        image: "/features/features-3.webp",
        benefits: [
            {
                id: 1,
                title: "Daily attendance",
                icon: <ListCheckIcon size={16} />,
                description: "Easily track and record daily attendance with our intuitive system—ensuring accurate records and seamless time management for your workforce."
            }, {
                id: 2,
                title: "Expense Tracking",
                icon: <HandCoinsIcon size={16} />,
                description: "Easily track and manage expense records with our intuitive system—ensuring accurate financial records and transparent spending for your organization."
            }, {
                id: 3,
                title: "Reimbursement Management",
                icon: <BanknoteIcon size={16} />,
                description: "Streamline the reimbursement process with our efficient system—ensuring quick approvals and seamless financial settlements for your employees."
            },
        ]
    },
]

const FeaturesSection = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20 relative">
            {/* <Image
                src="/Features_section.png"
                alt="Features Background"
                className="w-full h-auto"
                width={1920}
                height={1080}
                priority
                quality={100}
            /> */}
            <SubHeader title="Testimonials" />
            <SectionHeader title="Simplify Your Workflow & Empower Your Team" className="text-5xl w-1/2 text-center" />
            <p className="text-base w-1/2 text-center text-content mb-24">Experience real-time employee tracking, effortless task management, and smart HR tools—all designed with a friendly, intuitive touch to keep your business moving smoothly.</p>
            <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto gap-y-40">
                {
                    features.map((feature) => (
                        <div key={feature.id} className={`flex ${feature.reverse ? 'flex-row-reverse' : 'flex-row'} items-center justify-between w-full gap-x-8`}>
                            <div className="flex-col">
                                <div className="inline-flex flex-row items-center gap-x-1 text-[#874BF8] py-1.5 px-3 rounded-full bg-[#CDBEFE] border-2 border-[#874BF8]">
                                    {feature.icon}
                                    <p className="text-sm font-medium">{feature.subTitle}</p>
                                </div>
                                <h3 className="text-4xl font-medium mt-4">{feature.title}</h3>
                                <p className="text-sm/relaxed text-content mt-4">{feature.description}</p>
                                <div className="grid grid-cols-2 gap-5 mt-12">
                                    {
                                        feature.benefits.map((benefit) => (
                                            <div key={benefit.id} className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center gap-x-2">
                                                    <div className="inline-flex flex-row items-center gap-x-1 text-white p-2 rounded-lg bg-[#874BF8]">
                                                        {benefit.icon}
                                                    </div>
                                                    <h4 className="text-base font-medium">{benefit.title}</h4>
                                                </div>
                                                <p className="text-sm/relaxed text-content">{benefit.description}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                className="w-1/2 h-auto"
                                width={1920}
                                height={1080}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}


export default FeaturesSection