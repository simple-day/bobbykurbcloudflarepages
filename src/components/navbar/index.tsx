// import useMediaQuery from '@/hooks/useMediaQuery';
// import { useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Link from './Link';
import Logo from '@/assets/logo.png'

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    // const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navBackground = isTopOfPage ? "" : "bg-white drop-shadow "

    return (
        <nav className={`${navBackground}`} >
          <div className='navbar mt-5'>
            
            <div className='navbar-start pl-10 space-x-6'>
                <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
              
                <Link
                    page="Bio"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />                
            </div>

            <div className='navbar-center '>
                <img src={Logo} alt="Bobby Kurb Logo" className='max-w-32 md:max-w-60'/>
            </div>

            <div className='navbar-end pr-10 space-x-6'>
                <Link
                    page="Works"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
              
                  <Link
                    page="Blog"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </div>
            
            </div>
          
        
        </nav>
    )
}

export default Navbar

