import { cn } from "@/lib/utils"


const SectionHeader = ({ title, className }: { title: string, className?: string}) => {
  return (
    <h2 className={cn("text-4xl/tight w-2/3 text-center text-content font-semibold my-4", className)}>{title}</h2>
  )
}

export default SectionHeader