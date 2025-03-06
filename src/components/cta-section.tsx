import { Button } from "./ui/button";

const CTASection = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20">
            <div className="flex flex-row items-center justify-between w-full text-white max-w-7xl mx-auto rounded-3xl p-10 px-10 bg-gradient-to-r from-primary from-0% via-80% via-[#00183C] to-100% to-[#0041A2]">
               <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold">Experience Unlimited Benefits </h2>
                    <p className="text-sm text-content">Sign up now and Start your live Tracking in just in minutes</p>
               </div>
               <div>
                    <Button className="bg-gradient-to-b from-white to-[#666666] cursor-pointer" variant="secondary">Sign up</Button>
               </div>
            </div>
        </section>
    )
}

export default CTASection;