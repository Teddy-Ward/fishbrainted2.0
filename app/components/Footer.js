import ThemeSwitch from "./ThemeSwitch";

export default function Footer() {
  return (
    <>
    <div className="footer w-full flex grid-cols-3 mx-auto">
      <div className="pl-10"></div>
      <div className="mx-auto pt-10">
        Footer      
      </div>
      <div className="mr-10 pb-10"><ThemeSwitch /></div>
        
    </div>

    </>
    
  )
}