import AOS from 'aos'
import 'aos/dist/aos.css'
import background from '../assets/background.svg'
import servisesIcon from '../assets/call.svg'
import clients from '../assets/Clients.svg'
import subsChart from '../assets/illustration (1).svg'
import illustration2 from '../assets/illustration (2).svg'
import sc3 from '../assets/illustration pgsc3.jpg'
import sc2 from '../assets/pg2sc2.jpg'
import sc4 from '../assets/pgsc4.jpg'
import pic1 from '../assets/pic.jpg'
import pic2 from '../assets/pic2.jpg'
import sc5 from '../assets/sc5.svg'
import MySwiper from '../Components/Swiper'
import { useEffect } from 'react'
const Services = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		})

		AOS.refresh()
	}, [])
	return (
		<div>
			<section
				data-aos="zoom-in-up"
				className='min-h-[600px]'
				style={{
					backgroundImage: `url(${background}) `,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='w-[70%] mx-auto flex justify-center items-center h-full max-sm:flex-col max-sm:items-center pt-[80px]'>
					<div className='max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center text-center'>
						<h1 className='text-white text-[20px]'>Home / Services</h1>
						<h1 className='text-[60px] text-[white] max-sm:text-center font-bold font-[Lato] max-sm:text-[30px]'>
							Our services
						</h1>
						<h1 className='text-[grey] text-[20px] max-w-[700px]'>
							We offer more than services. Our agency provides solutions to your
							top-priority concerns, involving customer targeting, email
							performance and sales growth. If there is no existing solution
							readily available, we create one, specifically to suit your
							business.
						</h1>
						<div className='text-[white] text-[20px] flex  max-sm:flex-col max-sm:justify-center justify-center items-center gap-[20px] mt-[50px]'>
							<button className='border rounded px-[20px] py-[10px]'>
								Start now
							</button>
							<div className='flex max-sm:flex-col max-sm:justify-center'>
								<img className='' src={servisesIcon} alt='' />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='w-[70%] mx-auto'>
				<div className='flex max-sm:flex-col items-center my-[100px]'>
					<div className='text-start'>
						<h1 className='font-[Lato] font-semibold text-[28px] mb-[20px] max-sm:text-center text-black dark:text-white'>
							Social Media Marketing
						</h1>
						<div className='text-[#787A80] font-[Roboto] flex flex-col gap-[8px] w-[400px]'>
							<h1>
								Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
								lacus, turpis accumsan gravida. Aliquet mattis dignissim massa
								sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel
								eget molestie. Turpis enim arcu, amet donec massa pellentesque
								nulla duis. Arcu dictum metus sed purus senectus faucibus eget
								elementum pretium.
							</h1>
						</div>
						<div className='flex gap-[50px] mt-[50px]'>
							<button className='w-[200px] h-[40px] text-[#7772F1] border-[#7772F1] border-2 rounded'>
								Learn more
							</button>
							<button className='w-[200px] h-[40px] text-[white] bg-[#7772F1]  rounded'>
								Try SEO toolkit
							</button>
						</div>
					</div>
					<div className=''>
						<img className='dark:invert' src={subsChart} alt='' />
					</div>
				</div>
			</section>
			<section className='w-[70%] mx-auto'>
				<div className='flex flex-row-reverse max-sm:flex-col items-center my-[100px]'>
					<div className='text-start'>
						<h1 className='font-[Lato] font-semibold text-[28px] mb-[20px] max-sm:text-center text-black dark:text-white'>
							Search Engine Optimization
						</h1>
						<div className='text-[#787A80] font-[Roboto] flex flex-col gap-[8px] w-[400px]'>
							<h1>
								Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
								lacus, turpis accumsan gravida. Aliquet mattis dignissim massa
								sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel
								eget molestie. Turpis enim arcu, amet donec massa pellentesque
								nulla duis. Arcu dictum metus sed purus senectus faucibus eget
								elementum pretium.
							</h1>
						</div>
						<div className='flex gap-[50px] mt-[50px]'>
							<button className='w-[200px] h-[40px] text-[#7772F1] border-[#7772F1] border-2 rounded'>
								Learn more
							</button>
							<button className='w-[200px] h-[40px] text-[white] bg-[#7772F1]  rounded 	'>
								Try SEO toolkit
							</button>
						</div>
					</div>
					<div className=''>
						<img className='dark:invert' src={sc2} alt='' />
					</div>
				</div>
			</section>
			<section className='w-[70%] mx-auto'>
				<div className='flex max-sm:flex-col items-center my-[100px]'>
					<div className='text-start'>
						<h1 className='font-[Lato] font-semibold text-[28px] mb-[20px] max-sm:text-center text-black dark:text-white'>
							Research Service
						</h1>
						<div className='text-[#787A80] font-[Roboto] flex flex-col gap-[8px] w-[400px]'>
							<h1>
								Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
								lacus, turpis accumsan gravida. Aliquet mattis dignissim massa
								sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel
								eget molestie. Turpis enim arcu, amet donec massa pellentesque
								nulla duis. Arcu dictum metus sed purus senectus faucibus eget
								elementum pretium.
							</h1>
						</div>
						<div className='flex gap-[50px] mt-[50px]'>
							<button className='w-[200px] h-[40px] text-[#7772F1] border-[#7772F1] border-2 rounded'>
								Learn more
							</button>
							<button className='w-[200px] h-[40px] text-[white] bg-[#7772F1]  rounded'>
								Try SEO toolkit
							</button>
						</div>
					</div>
					<div className=''>
						<img className='dark:invert' src={sc3} alt='' />
					</div>
				</div>
			</section>
			<section className='w-[70%] mx-auto'>
				<div className='flex flex-row-reverse max-sm:flex-col items-center my-[100px]'>
					<div className='text-start'>
						<h1 className='font-[Lato] font-semibold text-[28px] mb-[20px] max-sm:text-center text-black dark:text-white'>
							Content & PR Service
						</h1>
						<div className='text-[#787A80] font-[Roboto] flex flex-col gap-[8px] w-[400px]'>
							<h1>
								Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
								lacus, turpis accumsan gravida. Aliquet mattis dignissim massa
								sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel
								eget molestie. Turpis enim arcu, amet donec massa pellentesque
								nulla duis. Arcu dictum metus sed purus senectus faucibus eget
								elementum pretium.
							</h1>
						</div>
						<div className='flex gap-[50px] mt-[50px]'>
							<button className='w-[200px] h-[40px] text-[#7772F1] border-[#7772F1] border-2 rounded'>
								Learn more
							</button>
							<button className='w-[200px] h-[40px] text-[white] bg-[#7772F1]  rounded'>
								Try SEO toolkit
							</button>
						</div>
					</div>
					<div className=''>
						<img className='dark:invert' src={sc4} alt='' />
					</div>
				</div>
			</section>
			<section className='w-[70%] mx-auto'>
				<div className='flex max-sm:flex-col items-center my-[100px]'>
					<div className='text-start'>
						<h1 className='font-[Lato] font-semibold text-[28px] mb-[20px] max-sm:text-center text-black dark:text-white'>
							Payed Traffic Management
						</h1>
						<div className='text-[#787A80] font-[Roboto] flex flex-col gap-[8px] w-[400px]'>
							<h1>
								Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
								lacus, turpis accumsan gravida. Aliquet mattis dignissim massa
								sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel
								eget molestie. Turpis enim arcu, amet donec massa pellentesque
								nulla duis. Arcu dictum metus sed purus senectus faucibus eget
								elementum pretium.
							</h1>
						</div>
						<div className='flex gap-[50px] mt-[50px]'>
							<button className='w-[200px] h-[40px] text-[#7772F1] border-[#7772F1] border-2 rounded'>
								Learn more
							</button>
							<button className='w-[200px] h-[40px] text-[white] bg-[#7772F1]  rounded'>
								Try SEO toolkit
							</button>
						</div>
					</div>
					<div className=''>
						<img className='dark:invert' src={sc5} alt='' />
					</div>
				</div>
			</section>
			<section
				className=''
				style={{
					backgroundImage: `url(${background}) `,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='flex w-[70%] mx-auto justify-between py-[100px] max-sm:flex-col'>
					<img src={illustration2} alt='' />
					<div className='max-w-[550px]'>
						<h1 className='font-bold font-[Lato] text-[46px] text-white'>
							Get a Free SEO Analysis!
						</h1>
						<div className='flex max-sm:flex-col justify-between w-[100%]'>
							<input
								type='text'
								className='bg-[#393c46] h-[50px] rounded w-[45%] max-sm:w-[100%] placeholder:text-[white]'
								placeholder='Your name'
							/>
							<input
								type='text'
								className='bg-[#393c46] h-[50px] rounded w-[45%] max-sm:w-[100%] max-sm:mt-[20px] placeholder:text-[white]'
								placeholder='Your working email'
							/>
						</div>
						<input
							type='text'
							className='bg-[#393c46] h-[50px] rounded w-[550px] mt-[50px] max-sm:w-[100%] placeholder:text-[white]'
							placeholder='http://yoursite.com'
						/>
						<div className='mt-[30px] flex gap-[10px] items-start'>
							<input type='checkbox' className='w-[20px] h-[20px]' checked />
							<h1 className='text-[white]'>
								I agree to receive communications from Createx SEO Agency
							</h1>
							<button className='w-[200px] min-h-[40px] text-[white] bg-[#7772F1] rounded'>
								Get a free analysis
							</button>
						</div>
					</div>
				</div>
			</section>
			<div className='bg-[#E5E8ED] dark:bg-black dark:text-white'>
				<section className='w-[70%] mx-auto py-[100px] '>
					<h1 className='font-[Lato] font-semibold text-[46px] mb-[20px] text-black max-sm:text-center dark:text-white'>
						Read our clients' case studies
					</h1>
					<div className='h-[300px] max-sm:hidden'>
						<MySwiper />
					</div>
					<div className='flex w-[60%] mx-auto justify-between max-sm:flex-col'>
						<h1 className='font-[Lato] text-[28px] font-bold max-sm:text-center text-black dark:text-white'>
							Explore more case studies
						</h1>

						<button className='w-[200px] min-h-[40px] text-[white] bg-[#7772F1]  rounded '>
							View all case studies
						</button>
					</div>
					<div className='mt-[50px] max-sm:hidden'>
						<img src={clients} alt='' />
					</div>
				</section>
			</div>
			<section className='w-[70%] mx-auto flex min-h-[400px] gap-[20px] max-sm:flex-col py-[100px]'>
				<div className=''>
					<h1 className='font-[Lato] font-bold text-[46px] mb-[20px] text-black dark:text-white'>
						Latest news
					</h1>
					<h1 className='text-black dark:text-white'>
						Check more posts in our blog for featured news and advertising
						insights
					</h1>
					<button className='bg-[#7772F1] text-[white] border-2 px-[40px] py-[10px] rounded font-semibold mt-[30px]'>
						Go to blog
					</button>
				</div>
				<div className='flex flex-col justify-between items-start '>
					<div className=''>
						<img src={pic1} className='w-[550px] h-[300px]' alt='' />
						<p className='text-[grey]'>SEO | July 5, 2020 | By Diane Mccoy</p>
					</div>
					<button className='font-semibold text-black dark:text-white'>Read more 🔜</button>
				</div>
				<div className='flex flex-col justify-between items-start'>
					<div className=''>
						<img src={pic2} className='w-[300px] h-[300px]' alt='' />
						<p className='text-[grey]'>SEO | July 5, 2020 | By Diane Mccoy</p>
						<h1 className='font-semibold text-[20px] text-black dark:text-white'>
							The Basics of Blogging Search Engine Optimization.
						</h1>
						<h1 className='text-black dark:text-white'>
							Mauris tincidunt sollicitudin tristique odio eget volutpat.
							Fringilla viverra amet, mi interdum blandit...
						</h1>
					</div>
					<button className='font-semibold text-black dark:text-white'>Read more 🔜</button>
				</div>
			</section>
		</div>
	)
}

export default Services
