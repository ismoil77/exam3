import { useEffect } from 'react'
import awards2 from '../assets/awards (1).svg'
import background from '../assets/background.svg'
import clients from '../assets/Clients.svg'
import f2 from '../assets/figure (1).svg'
import f3 from '../assets/figure (2).svg'
import f4 from '../assets/figure (3).svg'
import f1 from '../assets/figure.svg'
import ic1 from '../assets/ic-chart.svg'
import ic3 from '../assets/ic-computer.svg'
import ic2 from '../assets/ic-speaker.svg'
import subsChart from '../assets/illustration (1).svg'
import illustration2 from '../assets/illustration (2).svg'
import illustration3 from '../assets/illustration (3).svg'
import illustration4 from '../assets/illustration (4).svg'
import illustration from '../assets/illustration.svg'
import peoples from '../assets/image (4).png'
import pic1 from '../assets/pic.jpg'
import pic2 from '../assets/pic2.jpg'
import play from '../assets/play.svg'
import userProfile from '../assets/user-profile.svg'
import MySwiper from '../Components/Swiper'
 import AOS from 'aos';
    import 'aos/dist/aos.css';
import DataTable from '../Components/Table/Table'
const HomePage = () => {
	 useEffect(() => {
        AOS.init({
        
          duration: 1000,
          once: true, 
        });
        
        AOS.refresh(); 
      }, []); 
	return (
		<div className='dark:bg-black dark:text-white'>
		
			<section
				data-aos="zoom-in-up"
				className='min-h-[600px]'
				style={{
					backgroundImage: `url(${background}) `,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='w-[70%] mx-auto flex justify-between items-start h-full max-sm:flex-col max-sm:items-center pt-[80px]'>
					<div className='max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'>
						<h1 className='text-[60px] text-[white] max-sm:text-center font-bold font-[Lato] max-sm:text-[30px]'>
							Best <span className='text-[#7772F1]'>SEO & Marketing</span>{' '}
							Solutions for You
						</h1>
						<div className='text-[white] text-[20px] flex  max-sm:flex-col max-sm:justify-center items-center gap-[20px]'>
							<button className='border rounded px-[20px] py-[10px]'>
								Get a free analysis
							</button>
							<div className='flex max-sm:flex-col max-sm:justify-center'>
								<img src={play} alt='' />
								<button> Play video</button>
							</div>
						</div>
					</div>
					<div className=''>
						<img src={illustration} className='max-w-[450px]' alt='' />
					</div>
				</div>
				<div className='flex w-[70%] mx-auto justify-between mt-[50px] max-sm:w-[100%] max-sm:flex-col max-sm:justify-center max-sm:items-center'>
					<div className='flex gap-[15px] items-center text-[20px] font-semibold font-[Lato] text-[white]'>
						<img src={ic1} alt='' />
						<h1>SEO Content Strategy</h1>
					</div>
					<div className='flex gap-[15px] items-center text-[20px] font-semibold font-[Lato] text-[white]'>
						<img src={ic2} alt='' />
						<h1>Content Marketing</h1>
					</div>
					<div className='flex gap-[15px] items-center text-[20px] font-semibold font-[Lato] text-[white]'>
						<img src={ic3} alt='' />
						<h1>Website & Social Media Marketing</h1>
					</div>
				</div>
			</section>
				<section className='w-[100%]'>
				<DataTable/>
			</section>
			<section data-aos="zoom-in-up" className='w-[70%] mx-auto flex flex-col gap-[100px] my-[100px]'>
				<div className='flex gap-[60px] max-sm:flex-col max-sm:items-center max-sm:text-center'>
					<h1 className='text-[#1E212C] font-[Lato] font-bold text-[24px]'>
						Createx SEO Agency is a full-service digital marketing agency.
						We help businesses make more money through a wealth of performance
						data and market research. We create science-based SEO strategies
						to empower our clients.
					</h1>
					<img className='' src={awards2} alt='' />
				</div>
				<div className='max-sm:hidden max-md:hidden'>
					<img src={clients} alt='' />
				</div>
			</section>
			<section className='pb-[200px]'>
				<div className='flex w-[70%] mx-auto items-center gap-[100px] my-[100px] max-sm:flex-col max-sm:items-center '>
					<div className='flex flex-col gap-[20px] max-sm:items-center'>
						<h1 className='text-[black] font-bold text-[46px] dark:text-white'>
							Createx Agency
						</h1>
						<h1 className='text-[#787A80] max-sm:text-center'>
							Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes,
							viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam
							elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor
							ultrices mattis eget orci eu nisi sed augue odio. Et senectus
							risus, pharetra, tristique libero. Dolor risus ac quam dictum
							mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis
							et quis hendrerit. Cras at ac magna ultricies orci.
						</h1>
						<button className='bg-[#7772F1] font-[Roboto] rounded text-white px-[20px] max-w-[200px] min-h-[50px]'>
							More about us
						</button>
					</div>
					<div className=''>
						<img className='max-w-[500px]' src={peoples} alt='' />
					</div>
				</div>
				<div className='flex w-[50%] max-sm:flex-col max-sm:w-[40%] justify-between mx-auto'>
					<img src={f1} alt='' />
					<img src={f2} alt='' />
					<img src={f3} alt='' />
					<img src={f4} alt='' />
				</div>
			</section>
			<section className='w-[70%] mx-auto text-center pb-[100px]'>
				<h1 className='text-[black] font-bold text-[46px] dark:text-white'>Our services</h1>
				<div className='flex items-center justify-between mt-[30px] mb-[30px] max-sm:flex-col '>
					<div className='w-[20%] max-sm:w-[200px]'>
						<button className='w-[100%] h-[40px] text-[#7772F1] border-[#7772F1] border-2 rounded'>
							Social Media
						</button>
					</div>
					<div className='w-[20%]'>
						<button className='w-[100%] text-[#9A9CA5]'>SEO</button>
					</div>
					<div className='w-[20%]'>
						<button className='w-[100%] text-[#9A9CA5]'>Research</button>
					</div>
					<div className='w-[20%]'>
						<button className='w-[100%] text-[#9A9CA5]'>Content & PR</button>
					</div>
					<div className='w-[20%]'>
						<button className='w-[100%] text-[#9A9CA5]'>Payed Traffic</button>
					</div>
				</div>
				<div className='flex max-sm:flex-col'>
					<div className='text-start '>
						<h1 className='text-black dark:text-white font-[Lato] font-semibold text-[28px] mb-[20px]'>
							Complete Worflow For Any SEO Professional
						</h1>
						<div className='text-[#424551] font-[Roboto] flex flex-col gap-[8px]'>
							<h1>✔️ Aenean enim tellus morbi nisl vulputate dictumst.</h1>
							<h1>✔️ Nibh sapien volutpat lacus augue.</h1>
							<h1>✔️ Vel in amet, placerat adipiscing est pharetra.</h1>
							<h1>✔️ Gravida ornare sit in et ut sit sem id.</h1>
							<h1>✔️ Ultrices pellentesque dictum enim egestas ac diam.</h1>
							<h1>✔️ Sit semper enim senectus integer ut turpis et.</h1>
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
								className='bg-[#393c46] h-[35px] rounded w-[45%] max-sm:w-[100%]'
							/>
							<input
								type='text'
								className='bg-[#393c46] h-[35px] rounded w-[45%] max-sm:w-[100%] max-sm:mt-[20px]'
							/>
						</div>
						<input
							type='text'
							className='bg-[#393c46] h-[35px] rounded w-[550px] mt-[50px] max-sm:w-[100%]'
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
			<section className='w-[70%] mx-auto py-[100px]'>
				<div className='flex  max-sm:flex-col justify-between'>
					<div className='text-start'>
						<h1 className='font-[Lato] text-black dark:text-white font-semibold text-[28px] mb-[20px]'>
							Freequently Ask Questions
						</h1>
						<div className='text-[black] font-[Roboto] flex flex-col gap-[8px]'>
							<h1 className='text-black dark:text-white'>➖ Aliquet lectus urna viverra in odio?</h1>
							<h1 className='max-w-[200px] text-[13px] text-[#424551]'>
								{' '}
								➖ Adipiscing nunc arcu enim elit mattis eu placerat proin.
								Imperdiet elementum faucibus dignissim purus. Fusce parturient
								diam magna ullamcorper morbi semper massa ac facilisis.
							</h1>
							<h1 className='text-black dark:text-white'>➕ Orci commodo, viverra orci mollis ut euismod?</h1>
							<h1 className='text-black dark:text-white'>
								➕ Sagittis vitae facilisi rutrum amet mauris quisque vel
								convallis?
							</h1>
							<h1 className='text-black dark:text-white'>➕ In id dolor quis nunc, urna hendrerit pharetra?</h1>
						</div>
						<div className='flex gap-[50px] mt-[50px]'>
							<button className='w-[200px] h-[40px] text-[#7772F1] border-[#7772F1] border-2 rounded'>
								Learn more
							</button>
							<button className='w-[200px] h-[40px] text-[white] bg-[#7772F1]  rounded'>
								Discover more
							</button>
						</div>
					</div>
					<div className=''>
						<img src={illustration3} alt='' />
					</div>
				</div>
			</section>
			<section className='w-[70%] mx-auto py-[100px]'>
				<h1 className='font-[Lato] font-semibold text-[46px] mb-[20px] text-black max-sm:text-center'>
					Read our clients' case studies
				</h1>
				<div className='h-[300px] dark:bg-black bg-white max-sm:hidden'>
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
			</section>
			<section className='w-[70%] mx-auto py-[100px]'>
				<h1 className='font-[Lato] font-semibold text-[46px] mb-[20px] text-black text-center'>
					Our benefits
				</h1>
				<div className='flex items-center justify-between max-sm:flex-col'>
					<div className='flex flex-col gap-[20px]'>
						<div className='text-center w-[390px] border shadow flex flex-col justify-center gap-[10px] p-[30px] h-[200px]'>
							<img className='w-[40px] h-[40px] mx-auto' src={ic2} alt='' />
							<h1 className='text-[18px] text-black dark:text-white font-semibold font-[Lato] '>
								Social Advertising Experts
							</h1>
							<p className='text-black dark:text-white'>
								Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
								velit nostrud aliquip sunt.
							</p>
						</div>
						<div className='text-center w-[390px] border shadow flex flex-col  gap-[10px] p-[30px] h-[200px]'>
							<img className='w-[40px] h-[40px] mx-auto' src={ic1} alt='' />
							<h1 className='text-black dark:text-white text-[18px] font-semibold font-[Lato] '>
								Social Advertising Experts
							</h1>
							<p className='text-black dark:text-white'>
								Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
								velit nostrud aliquip sunt.
							</p>
						</div>
						<div className='text-center w-[390px] border shadow flex flex-col  gap-[10px] p-[30px] h-[200px]'>
							<img className='w-[40px] h-[40px] mx-auto' src={ic3} alt='' />
							<h1 className='text-black dark:text-white text-[18px] font-semibold font-[Lato] '>
								Social Advertising Experts
							</h1>
							<p className='text-black dark:text-white'>
								Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
								velit nostrud aliquip sunt.
							</p>
						</div>
					</div>
					<div className=''>
						<img src={illustration4} alt='' />
					</div>
					<div className='flex flex-col gap-[20px]'>
						<div className='text-center w-[390px] border shadow flex flex-col  gap-[10px] p-[30px] h-[200px]'>
							<img className='w-[40px] h-[40px] mx-auto' src={ic3} alt='' />
							<h1 className='text-black dark:text-white text-[18px] font-semibold font-[Lato] '>
								Social Advertising Experts
							</h1>
							<p className='text-black dark:text-white'>
								Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
								velit nostrud aliquip sunt.
							</p>
						</div>
						<div className='text-center w-[390px] border shadow flex flex-col  gap-[10px] p-[30px] h-[200px]'>
							<img className='w-[40px] h-[40px] mx-auto' src={ic2} alt='' />
							<h1 className='text-black dark:text-white text-[18px] font-semibold font-[Lato] '>
								Social Advertising Experts
							</h1>
							<p className='text-black dark:text-white'>
								Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
								velit nostrud aliquip sunt.
							</p>
						</div>
						<div className='text-center w-[390px] border shadow flex flex-col  gap-[10px] p-[30px] h-[200px]'>
							<img className='w-[40px] h-[40px] mx-auto' src={ic1} alt='' />
							<h1 className='text-black dark:text-white text-[18px] font-semibold font-[Lato] '>
								Social Advertising Experts
							</h1>
							<p className='text-black dark:text-white'>
								Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
								velit nostrud aliquip sunt.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='w-[70%] mx-auto'>
				<h1 className='font-[Lato] font-semibold text-[46px] mb-[20px] text-black text-center'>
					Flexible pricing plans
				</h1>
				<div className='text-white flex items-center gap-[20px] border-[#7772F1] border w-fit pr-[50px] rounded-[30px] mx-auto'>
					<button className='bg-[#7772F1] px-[50px] py-[10px] rounded-[30px]'>
						Monthly
					</button>
					<h1 className='text-[#7772F1] font-semibold'>Yearly -12% Off</h1>
				</div>
				<div className='my-[50px] flex gap-[40px] max-sm:flex-col'>
					<div className='border-[#7772F1] border-2 rounded shadow-2xl p-[40px] text-center w-[350px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
						<h1 className='font-semibold text-[28px]'>Basic</h1>
						<h1 className='text-[#7772F1] text-[46px] font-semibold'>
							$24/mon
						</h1>
						<div className='text-start flex flex-col items-start mx-auto w-[200px] border-t-2 font-[Lato] gap-[15px] mt-[30px] pt-[20px] text-black dark:text-white'>
							<h1>✔️ Advanced Analytics</h1>
							<h1>✔️ Change Management</h1>
							<h1>✔️ Corporate Finance</h1>
							<h1>✔️ One Way Link Building</h1>
							<h1>✔️ Social Media Marketing</h1>
							<h1>✖️ Strategy & Marketing</h1>
							<h1>✖️ Information Technology</h1>
						</div>
						<button className='border-[#7772F1] text-[#7772F1] border-2 px-[40px] py-[10px] rounded font-semibold mt-[30px]'>
							Choose plan
						</button>
					</div>
					<div className='border-[#7772F1] text-[#03CEA4]  border-2 rounded shadow-2xl p-[40px] text-center w-[350px] bg-[#1f222d] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
						<h1 className='font-semibold text-[28px]'>PRO</h1>
						<h1 className='text-[#03CEA4] text-[46px] font-semibold'>
							$40/mon
						</h1>
						<div className='text-start flex flex-col items-start mx-auto w-[200px] border-t-2 font-[Lato] gap-[15px] mt-[30px] pt-[20px] '>
							<h1>✔️ Advanced Analytics</h1>
							<h1>✔️ Change Management</h1>
							<h1>✔️ Corporate Finance</h1>
							<h1>✔️ One Way Link Building</h1>
							<h1>✔️ Social Media Marketing</h1>
							<h1>✖️ Strategy & Marketing</h1>
							<h1>✖️ Information Technology</h1>
						</div>
						<button className='bg-[#7772F1] text-[white] border-2 px-[40px] py-[10px] rounded font-semibold mt-[30px]'>
							Choose plan
						</button>
					</div>
					<div className='border-[#7772F1]  border-2 rounded shadow-2xl p-[40px] text-center w-[350px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
						<h1 className='font-semibold text-[28px]'>MAX</h1>
						<h1 className='text-[#7772F1] text-[46px] font-semibold'>
							$67/mon
						</h1>
						<div className='text-start flex flex-col items-start mx-auto w-[200px] border-t-2 font-[Lato] gap-[15px] mt-[30px] pt-[20px] text-black dark:text-white'>
							<h1>✔️ Advanced Analytics</h1>
							<h1>✔️ Change Management</h1>
							<h1>✔️ Corporate Finance</h1>
							<h1>✔️ One Way Link Building</h1>
							<h1>✔️ Social Media Marketing</h1>
							<h1>✖️ Strategy & Marketing</h1>
							<h1>✖️ Information Technology</h1>
						</div>
						<button className='border-[#7772F1] text-[#7772F1] border-2 px-[40px] py-[10px] rounded font-semibold mt-[30px]'>
							Choose plan
						</button>
					</div>
				</div>
			</section>
			<section className='w-[70%] dark:bg-black dark:text-white mx-auto my-[100px] bg-slate-100 p-[50px] rounded shadow-2xl'>
				<h1 className='font-[Lato] font-semibold text-[46px] mb-[20px] text-black text-center dark:text-white'>
					What our clients say
				</h1>
				<div className='w-[90%] mx-auto'>
					<h1 className='mb-[20px] text-black dark:text-white'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet
						lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed
						purus facilisi. Vitae id turpis tempus ornare turpis quis non.
						Congue tortor in euismod vulputate etiam eros. Pulvinar neque
						pharetra arcu diam maecenas diam integer in.
					</h1>
					<img src={userProfile} alt='' />
				</div>
			</section>
			<section className='w-[70%] mx-auto flex min-h-[400px] gap-[20px] max-sm:flex-col py-[100px]'>
				<div className=''>
					<h1 className='font-[Lato] font-bold text-[46px] mb-[20px] text-black  dark:text-white '>
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
					<button className='font-semibold text-black dark:text-white	'>Read more 🔜</button>
				</div>
				<div className='flex flex-col justify-between items-start'>
					<div className=''>
						<img src={pic2} className='w-[300px] h-[300px]' alt='' />
						<p className='text-[grey]'>SEO | July 5, 2020 | By Diane Mccoy</p>
						<h1 className='font-semibold text-[20px] text-black dark:text-white'>The Basics of Blogging Search Engine Optimization.</h1>
						<h1 className='text-black dark:text-white'>Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit...</h1>
					</div>
					<button className='font-semibold text-black dark:text-white'>Read more 🔜</button>
				</div>
			</section>
		</div>
	)
}

export default HomePage
