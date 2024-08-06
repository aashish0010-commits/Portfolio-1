import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './About.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const services = [
  {
    icon: './images/S-1.png',
    title: 'Design Trends',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    icon: './images/S-2.png',
    title: 'PSD Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    icon: './images/S-3.png',
    title: 'Customer Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    icon: './images/S-4.png',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    icon: './images/S-5.png',
    title: 'Fully Responsive',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    icon: './images/S-6.png',
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
];

const testimonials = [
  {
    image: 'https://kaleidoscopic-pie-2341a3.netlify.app/template/img/client-2.jpg', 
    name: 'John Santana',
    role: 'Entrepreneur',
    quote: 'Aashish did an excellent creative job, addressing our request quickly, and also providing his own graphic insight, being open to feedback and changes or edits when they arose. He worked with us the entire way. Highly recommended.'
  },
  {
    image: 'https://kaleidoscopic-pie-2341a3.netlify.app/template/img/client-2.jpg', 
    name: 'John Santana',
    role: 'Entrepreneur',
    quote: 'Aashish did an excellent creative job, addressing our request quickly, and also providing his own graphic insight, being open to feedback and changes or edits when they arose. He worked with us the entire way. Highly recommended.'
  },
  {
    image: 'https://kaleidoscopic-pie-2341a3.netlify.app/template/img/client-3.jpg', 
    role: 'Envato Customer',
    quote: 'Aashish did an excellent creative job, addressing our request quickly, and also providing his own graphic insight, being open to feedback and changes or edits when they arose. He worked with us the entire way. Highly recommended.'
  }
];

const pricingPlans = [
  {
    icon: './images/P-1.png',
    title: 'Standard',
    price: '$19/month',
    features: [
      'Mobile App Design',
      'Responsive Design',
      'Database Development',
      'Web Design',
      '24/7 Support',
    ],
    buttonText: 'Get Standard',
  },
  {
    icon: './images/P-2.png',
    title: 'Professional',
    price: '$29/month',
    features: [
      'Mobile App Design',
      'Responsive Design',
      'Database Development',
      'Web Design',
      '24/7 Support',
    ],
    buttonText: 'Get Pro',
  },
  {
    icon: './images/P-3.png',
    title: 'Business',
    price: '$39/month',
    features: [
      'Mobile App Design',
      'Responsive Design',
      'Database Development',
      'Web Design',
      '24/7 Support',
    ],
    buttonText: 'Get Business',
  },
];

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <div className="flex items-center justify-center mb-4">
        <img src={icon} alt={title} className="h-12 w-12" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TestimonialCard({ image, name, role, quote }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <div className="flex items-center justify-center mb-4">
        <img src={image} alt={name} className="h-24 w-24 rounded-full border-2 border-green-500" />
      </div>
      <p className="text-gray-400 mb-4">{quote}</p>
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  );
}

function PricingPlanCard({ plan }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <div className="flex items-center justify-center mb-4">
        <img src={plan.icon} alt={plan.title} className="h-12 w-12 text-green-500" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{plan.title}</h3>
      <p className="text-3xl font-bold text-white mb-4">{plan.price}</p>
      <ul className="text-gray-400 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
      <button className="rounded-2xl bg-green-500 p-2 text-white">
        {plan.buttonText}
      </button>
    </div>
  );
}

function About() {
  return (
    <section className='bg-[#101010] relative'>
      <div className='container md:px-[50px] px-[30px]'>
        {/* Cross Icon */}
        <Link to="/" className="fixed top-4 right-4 text-white text-5xl font-normal z-20">
          &times;
        </Link>

        {/* About Me Section */}
        <p className='text-center text-[#7E7E7E] text-lg pt-[70px]'>Get to know me</p>
        <h1 className='text-center text-white text-5xl font-bold py-4'>About Me</h1>
        <div className="flex justify-center">
          <div className="bg-customGreen h-1 animate-continuousExpand"></div>
        </div>

        <div className='row py-5'>
          <div className='col-lg-4 flex justify-center items-center'>
            <img className='w-[260px] rounded-full md:rounded-md shadow-lg' src="./images/about.jpg" alt="img2" />
          </div>
          <div className='col-lg-7 text-center'>
            <h3 className='text-customGreen pt-20 md:py-0 pb-3 text-lg font-semibold md:text-start'>Who am I?</h3>
            <h2 className='text-white text-2xl font-bold  md:text-start'>I'm Aashish Nepal, a Frontend-Developer</h2>
            <p className='text-[#9e9b9b] pt-3 text-sm text-justify md:text-left'>I'm a dedicated and creative developer who thrives on transforming ideas into seamless digital experiences. With a strong foundation in frontend development and a constant hunger for learning, I am committed to pushing the boundaries of what's possible in the digital landscape.</p>
            <hr className='border-t-2 border-inherit border-[#7E7E7E] mt-6' />
            <div className='row text-white py-2 md:text-start'>
              <div className='col-lg-5'>
                <p className='text-[#9e9b9b] py-3'><span className='text-[#dedada]'>Name:</span> Aashish Nepal</p>
                <p className='text-[#9e9b9b]'><span className='text-[#dedada]'>Age:</span> 24</p>
              </div>
              <div className='col-lg-5'>
                <p className='text-[#9e9b9b] py-3'><span className='text-[#dedada]'>Email:</span> emma@example.com</p>
                <p className='text-[#9e9b9b]'><span className='text-[#dedada]'>From:</span> Kathmandu, Nepal</p>
              </div>
            </div>
            <div className='flex items-center -space-x-2  md:space-x-4 mt-3'>
                <div>
                  <button className='rounded-md bg-customGreen p-2 text- md:text-start text-white'>
                    Download CV
                  </button>
                </div>

                <div className='text-white mx-3 md:mx-0'>&#x2014;&#x2014;</div>

                <div className='flex space-x-3'>
                  <a className="text-white" href="#" aria-label="Twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a className="text-white" href="#" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a className="text-white" href="#" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a className="text-white" href="#" aria-label="GitHub">
                    <i className="bi bi-github"></i>
                  </a>
                  <a className="text-white" href="#" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
          </div>
        </div>

        {/* My Services Section */}
        <div className='md:py-[100px] py-[50px]'>
          <p className='text-center text-[#7E7E7E] text-lg'>What I can do</p>
          <h1 className='text-center text-white text-5xl font-bold py-4'>My Services</h1>
          <div className="flex justify-center">
            <div className="bg-customGreen h-1 animate-continuousExpand"></div>
          </div>
          <div className='row gap-y-[30px] py-5'>
            {services.map((service, index) => (
              <div key={index} className='col-lg-4 col-sm-6'>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>

        {/* Client Reviews Section */}
        <div className='pb-[100px]'>
          <p className='text-center text-[#7E7E7E] text-lg'>What my clients think about me</p>
          <h1 className='text-center text-white text-5xl font-bold py-4'>Client Reviews</h1>
          <div className="flex justify-center">
            <div className="bg-customGreen h-1 animate-continuousExpand"></div>
          </div>
          <Swiper
            spaceBetween={50}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper py-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pricing Plans Section */}
        <div className='pb-[100px]'>
          <p className='text-center text-[#7E7E7E] text-lg'>Get started with my services</p>
          <h1 className='text-center text-white text-5xl font-bold py-4'>Pricing Plans</h1>
          <div className="flex justify-center">
            <div className="bg-customGreen h-1 animate-continuousExpand"></div>
          </div>
          <div className='row gap-y-[30px] py-5'>
            {pricingPlans.map((plan, index) => (
              <div key={index} className='col-lg-4 col-sm-6'>
                <PricingPlanCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
