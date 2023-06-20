const Footer = () => {
  return (
    <footer className="flex justify-center flex-col w-full h-[382px] bg-cdark-blue px-[255px]">
      <div className="flex justify-around w-full h-full "></div>
      <div className="flex justify-center font-medium text-h4 pb-[17px]">
        <p>© {new Date().getFullYear()} Witr.kz. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
