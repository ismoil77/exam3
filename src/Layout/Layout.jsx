import { Link, Outlet } from 'react-router-dom'
import awards from '../assets/awards.svg'
import burger from '../assets/Hamburger_icon.svg.png'
import logo from '../assets/logo.svg'
import socials from '../assets/socials.svg'
import useDarkSide from '../config/useDarkMode'

const Layout = () => {
	 const [theme, toggleTheme] = useDarkSide()
	return (
		<div className=''>
			<div className='bg-gradient-to-r from-[#1E212C] via-[#232441] to-[#1E212C]'>
				<div className=' flex justify-between items-center w-[70%] mx-auto py-[25px]'>
					<img
						src={burger}
						className='w-[40px] invert h-[40px] max-sm:block hidden'
						alt=''
					/>
					<ul className=' text-white font-[Lato] text-[17px] flex max-sm:hidden font-semibold gap-[20px]'>
						<li>
							<Link to={'/'}>
								<img src={logo} />
							</Link>
						</li>
						<li>
							<Link to={'/'}>
								Home
							</Link>
						</li>
						<li>
							<Link to={'/services'}>Services</Link>
						</li>
						<li>
							<Link to={'/seo'}>Seo</Link>
						</li>
						<li>Case Studies</li>
						<li>About Us</li>
						<li>Blog</li>
						<li>Contacts</li>
						
					</ul>
					<button className='dark:bg-[black] dark:text-white bg-white text-black px-[30px] py-[10px] rounded' onClick={toggleTheme}>{localStorage.getItem('theme').toUpperCase() }</button>
					<button className='bg-[#7772F1] font-[Roboto] rounded text-white px-[20px] max-w-[200px] min-h-[50px]'>
						Talk to a human
					</button>
				</div>
			</div>

			<Outlet />
			<footer className='min-h-[500px] bg-gradient-to-r from-[#1E212C] via-[#232441] to-[#1E212C] flex flex-col justify-between'>
				<div className='w-[70%] mx-auto pt-[100px] flex justify-between max-sm:flex-col max-sm:justify-center max-sm:text-center'>
					<div className='font-semibold font-[Lato] max-w-[380px] flex flex-col items-start gap-[20px] text-gray-400 max-sm:items-center'>
						<img src={logo} alt='' />
						<h1>
							Createx SEO Agency is a full-service digital marketing agency.
							We help businesses make more money through a wealth of performance
							data and market research. We create science-based SEO strategies
							to empower our clients.
						</h1>
						<img src={socials} alt='' />
					</div>
					<div className='text-gray-400 font-semibold font-[Roboto] flex flex-col items-start gap-[10px] w-[200px] max-sm:items-center max-sm:w-[100%]'>
						<h1 className='text-white '>COMPANY</h1>
						<h1>About Us</h1>
						<h1>Case Studies</h1>
						<h1>Blog</h1>
						<h1>Careers</h1>
						<h1>Contacts</h1>
					</div>
					<div className='text-gray-400 font-semibold font-[Roboto] flex flex-col items-start gap-[10px] w-[200px] max-sm:items-center max-sm:w-[100%]'>
						<h1 className='text-white'>SERVICES</h1>
						<h1>Social Media</h1>
						<h1>SEO</h1>
						<h1>Research</h1>
						<h1>Content & PR</h1>
						<h1>Payed Traffic</h1>
					</div>
					<div className='text-gray-400 font-semibold font-[Roboto] flex flex-col items-start gap-[10px] w-[300px] max-sm:items-center max-sm:w-[100%]'>
						<h1 className='text-white'>CONTACT US</h1>
						<h1>(405) 555-0128</h1>
						<h1>hello@createx.com</h1>
					</div>
					<div className='text-gray-400 font-semibold font-[Roboto] flex flex-col items-start gap-[10px] w-[450px] max-sm:items-center max-sm:w-[100%]'>
						<h1 className='text-white '>SIGN UP TO OUR NEWSLETTER</h1>
						<input
							type='text'
							className='w-[240px] bg-[#393c46] border rounded h-[30px] text-white placeholder:text-white'
							placeholder='-->'
						/>
						<h1 className=''>
							*Subscribe to our newsletter to receive communications and early
							updates from Createx SEO Agency.
						</h1>
					</div>
				</div>
				<div className='border-t border-gray-400  mt-[50px] pt-[20px] flex justify-between items-center max-sm:flex-col max-sm:items-center'>
					<div className='w-[70%] mx-auto flex justify-between items-center max-sm:flex-col max-sm:items-center'>
						<img src={awards} alt='' />
						<div className="flex items-end gap-[30px] text-[white] font-semibold font-[Lato]">
							<h1>GO TO TOP</h1>
								<button className='bg-[#7772F1] font-[Roboto] rounded text-white px-[20px] max-w-[200px] max-h-[50px] max-sm:mt-[20px]'>
						UP
					</button>
						</div>
					</div>
				</div>

				<div className="text-white bg-[#292c37] h-[50px] font-[Lato] font-semibold mt-[20px] flex flex-col justify-center items-center">
					<div className="w-[70%] mx-auto flex justify-between items-center max-sm:flex-col max-sm:items-center">
					<h1>© All rights reserved.Made with 💜 by Createx Studio </h1>

					</div>
				</div>
			</footer>
		</div>
	)
}

export default Layout
