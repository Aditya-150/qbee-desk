import { Button } from "./ui/button";

const CTASection = () => {
    return (
        <section className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full text-white max-w-7xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-primary from-0% via-80% via-[#00183C] to-100% to-[#0041A2] gap-6 sm:gap-8">
               <div className="flex flex-col text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl font-semibold">Experience Unlimited Benefits </h2>
                    <p className="text-sm text-content mt-2">Sign up now and Start your live Tracking in just in minutes</p>
               </div>
               <div className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-gradient-to-b from-white to-[#666666] cursor-pointer" variant="secondary">Sign up</Button>
               </div>
            </div>
        </section>
    )
}

export default CTASection;