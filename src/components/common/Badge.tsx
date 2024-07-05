const Badge = ({ text }: { text: string }) => {
  return (
    <span className="bg-gray-100 text-gray-800 text-xs sm:text-lg font-light me-2 px-2.5 py-0.5 rounded border border-gray-500">
      {text}
    </span>
  )
}

export default Badge