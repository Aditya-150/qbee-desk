
const SubHeader = ({ title }: { title: string}) => {
  return (
    <div className="inline-flex items-center justify-center px-4 py-1.5 bg-white text-content rounded-full border-2 border-gray-300">
      <h2 className="text-base font-medium">{title}</h2>
    </div>
  )
}

export default SubHeader