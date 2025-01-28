import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
// import ComingSoon from "./pages/comingsoon"
import { SelectedPage } from "./shared/types"
import IndexInitial from "./pages/index-initial";
import Footer from "./components/footer";

function App() {  
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);        
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <IndexInitial/>
      <Footer/>
    </div>
  )
}

export default App
