import background from '../assets/background.svg'
import clients from '../assets/Clients.svg'
import ic1 from '../assets/ic-chart.svg'
import ic3 from '../assets/ic-computer.svg'
import ic2 from '../assets/ic-speaker.svg'
import pic2 from '../assets/pic2.jpg'
import bgPurple from '../assets/bgPurple.svg'
import linee from '../assets/line.svg'
import MySwiper from '../Components/Swiper'
import subsChart from '../assets/illustration (1).svg'
 import AOS from 'aos';
    import 'aos/dist/aos.css';
import { useEffect } from 'react'
const Seo = () => {
		 useEffect(() => {
        AOS.init({
        
          duration: 1000,
          once: true, 
        });
        
        AOS.refresh(); 
      }, []); 
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
						<h1 className='text-white text-[20px]'>
							Home / Services / Search Engine Optimization
						</h1>
						<h1 className='text-[60px] text-[white] max-sm:text-center font-bold font-[Lato] max-sm:text-[30px]'>
							Search Engine Optimization
						</h1>
						<h1 className='text-[grey] text-[20px] max-w-[700px]'>
							Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui
							pellentesque enim integer facilisi. Ultrices vitae tempor amet nec
							euismod non.
						</h1>
						<div className='text-white text-left mt-[50px] w-[70%] mx-auto'>
							<h1 className='font-[Lato] font-semibold text-[20px]'>
								Your website URL
							</h1>
							<div className='mt-[20px]'>
								<input
									type='text'
									placeholder='http://yoursite.com'
									className='placeholder:text-[white] bg-[#3c3e4e] h-[50px] px-[10px] w-[70%] rounded-l'
								/>
								<button className='w-[30%] bg-[#7772F1] h-[50px] rounded-r'>
									Analyse your site
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='w-[70%] mx-auto max-sm:hidden'>
				<div className=''>
					<img src={clients} alt='' />
				</div>
			</section>
			<section className='w-[70%] mx-auto'>
				<div className='flex flex-row-reverse max-sm:flex-col  my-[100px] justify-between items-start'>
					<div className='text-start max-w-[400px]'>
						<h1 className='font-[Lato] font-semibold text-[45px] mb-[20px] max-sm:text-center text-black dark:text-white'>
							We go above and beyond to ensure successful SEO
						</h1>
						<div className='text-[#787A80] font-[Roboto] flex flex-col gap-[8px] max-w-[400px] justify-between'>
							<h1 className='max-sm:text-center'>
								Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes,
								viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam
								elit diam mauris orci. Volutpat quam tempus justo, aliquam.
								Tortor ultrices mattis eget orci eu nisi sed augue odio.
								Et senectus risus, pharetra, tristique libero. Dolor risus
								ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus,
								suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies
								orci.
							</h1>
						</div>
					</div>
					<div className=''>
						<img className='w-[600px] h-[500px]' src={pic2} alt='' />
					</div>
				</div>
			</section>
			<section className='w-[70%] mx-auto my-[100px]'>
				<h1 className='text-[black] dark:text-white font-bold text-[46px] text-center'>
					SEO services include
				</h1>
				<div className='flex flex-wrap gap-[5px] mt-[40px] max-sm:flex-col '>
					<div className='w-[33%] flex flex-col items-start gap-[15px] border p-[20px] rounded shadow-2xl max-sm:w-[100%] text-black dark:text-white'>
						<img src={ic1} alt='' />
						<h1 className='font-semibold font-[Lato] text-[20px]'>
							SEO Strategy
						</h1>
						<h1>
							Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
							velit nostrud aliquip sunt.
						</h1>
					</div>
					<div className='w-[33%] flex flex-col items-start gap-[15px] border p-[20px] rounded shadow-2xl max-sm:w-[100%] text-black dark:text-white'>
						<img src={ic2} alt='' />
						<h1 className='font-semibold font-[Lato] text-[20px]'>
							Competitor Analysis
						</h1>
						<h1>
							Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
							velit nostrud aliquip sunt.
						</h1>
					</div>
					<div className='w-[33%] flex flex-col items-start gap-[15px] border p-[20px] rounded shadow-2xl max-sm:w-[100%] text-black dark:text-white'>
						<img src={ic3} alt='' />
						<h1 className='font-semibold font-[Lato] text-[20px]'>
							Technical Audit
						</h1>
						<h1>
							Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
							velit nostrud aliquip sunt.
						</h1>
					</div>
					<div className='w-[33%] flex flex-col items-start gap-[15px] border p-[20px] rounded shadow-2xl max-sm:w-[100%] text-black dark:text-white'>
						<img src={ic3} alt='' />
						<h1 className='font-semibold font-[Lato] text-[20px]'>
							Content Strategy
						</h1>
						<h1>
							Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
							velit nostrud aliquip sunt.
						</h1>
					</div>
					<div className='w-[33%] flex flex-col items-start gap-[15px] border p-[20px] rounded shadow-2xl max-sm:w-[100%] text-black dark:text-white'>
						<img src={ic3} alt='' />
						<h1 className='font-semibold font-[Lato] text-[20px]'>
							Media Promotion
						</h1>
						<h1>
							Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
							velit nostrud aliquip sunt.
						</h1>
					</div>
					<div className='w-[33%] flex flex-col items-start gap-[15px] border p-[20px] rounded shadow-2xl max-sm:w-[100%] text-black dark:text-white'>
						<img src={ic2} alt='' />
						<h1 className='font-semibold font-[Lato] text-[20px]'>
							SEO Reports
						</h1>
						<h1>
							Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
							velit nostrud aliquip sunt.
						</h1>
					</div>
				</div>
			</section>
			<section className='w-[70%] mx-auto bg-[#7772F1] py-[40px] rounded shadow-2xl px-[50px]'
				style={{
								backgroundImage: `url(${bgPurple}) `,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}>
				<h1 className='font-[Lato] font-semibold text-[30px] my-[20px] max-sm:text-center text-white text-center'>Get a Free SEO Analysis!</h1>
				<div className="flex justify-between items-end max-sm:flex-col">
					<div className="w-[23%] max-sm:w-[100%]">
						<h1 className='text-white'>Name</h1>
						<input type="text" className='h-[50px] rounded text-black  bg-white border placeholder:text-black w-[100%]' placeholder='Name'/>
					</div>
							<div className="w-[23%] max-sm:w-[100%]">
						<h1 className='text-white'>Email</h1>
						<input type="text" className='h-[50px] rounded text-black  bg-white border placeholder:text-black w-[100%]' placeholder='Your working email'/>
					</div>
							<div className="w-[23%] max-sm:w-[100%]">
						<h1 className='text-white'>Your website URL</h1>
						<input type="text" className='h-[50px] rounded text-black  bg-white border placeholder:text-black w-[100%]' placeholder='http://yoursite.com'/>
					</div>
					<button className='h-[50px] w-[23%] max-sm:w-[100%] max-sm:mt-[20px] bg-[black] text-white'>Analyse your site</button>
				</div>
			</section>
			<section className='my-[100px]'>
				<h1 className='text-[black] dark:text-[white] font-bold text-[46px] text-center'>
					That’s how it works
				</h1>
				<div className="flex gap-[20px] justify-center">
					<div className="mt-[130px]">
<div className="text-right w-[350px] font-[Lato]">
						<h1 className='text-[#787A80]'>STEP 2</h1>
						<h1 className='text-[20px] font-semibold text-black dark:text-white'>Technical SEO Optimizations</h1>
						<h1 className='text-[#787A80]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</h1>
						</div>
						<div className="text-right w-[350px] font-[Lato] mt-[130px]">
						<h1 className='text-[#787A80]'>STEP 4</h1>
						<h1 className='text-[20px] font-semibold text-black dark:text-white'>Content Marketing</h1>
						<h1 className='text-[#787A80]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</h1>
					</div>
					</div>
					<div className="">
<img src={linee} alt="" />
					</div>
					<div className="">
<div className="text-left w-[350px] font-[Lato]">
						<h1 className='text-[#787A80]'>STEP 1</h1>
						<h1 className='text-[20px] font-semibold text-black dark:text-white'>Off-Site SEO Analysis</h1>
						<h1 className='text-[#787A80]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</h1>
						</div>
						<div className="text-left w-[350px] font-[Lato] mt-[130px]">
						<h1 className='text-[#787A80]'>STEP 3</h1>
						<h1 className='text-[20px] font-semibold text-black dark:text-white'>Usability Check</h1>
						<h1 className='text-[#787A80]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</h1>
					</div>
					</div>
				</div>
			</section>
					<section className='w-[70%] mx-auto'>
				<h1 className='font-[Lato] font-semibold text-[46px] mb-[20px] text-black text-center dark:text-white'>
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
						<div className='text-start flex flex-col items-start mx-auto w-[200px] border-t-2 font-[Lato] gap-[15px] mt-[30px] pt-[20px]'>
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
			<section className='w-[70%] mx-auto py-[100px]'>
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
			</section>
				<section className='w-[70%] mx-auto text-center pb-[100px]'>
							<h1 className='text-[black] font-bold text-[46px] dark:text-white'>Other services</h1>
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
								<div className='text-start'>
									<h1 className='font-[Lato] font-semibold text-[28px] mb-[20px] text-black dark:text-white'>
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
		</div>
	)
}

export default Seo
