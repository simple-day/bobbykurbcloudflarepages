import Logo from "@/assets/logo.png"

const Footer = () => {
  return (
    <div className="p-4 bg-base-200 dark:text-gray-100">
        <nav className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
        <ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:border-transparent">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:border-transparent">Bio</a>
			</li>
		</ul>
            <div className="flex items-center p-2">
                <img src={Logo} alt="bobby kurb"/>
            </div>
            <ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:border-transparent">Works</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:border-transparent">Blog</a>
			</li>
		</ul>
        </nav>
        <hr/>
        <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
            <div className="items-stretch hidden space-x-3 md:flex"> 
                <p className="flex items-center px-4 -mb-1">
                made by mads & day
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer

