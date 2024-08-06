import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const BlogPost = [
    {
      id: 1,
      img: './images/b-1.jpg',
      title: 'Top tools for Photographers',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
      date: '1 Jan, 2024'
    },
    {
      id: 2,
      img: './images/b-2.jpg',
      title: 'How to improve work performance',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
      date: '2 Jan, 2024'
    },
    {
      id: 3,
      img: './images/b-3.jpg',
      title: 'Take a tour of my office',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
      date: '3 Jan, 2024'
    },
    {
      id: 4,
      img: './images/b-4.jpg',
      title: 'How to work from home',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
      date: '4 Jan, 2024'
    },
    {
      id: 5,
      img: './images/b-5.jpg',
      title: 'How I became a Web Designer',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
      date: '5 Jan, 2024'
    },
    {
      id: 6,
      img: './images/b-6.jpg',
      title: 'How to enjoy your business trip',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.',
      date: '6 Jan, 2024'
    },
  ];

  return (
    <section className='bg-[#101010]'>
      <div className='container mx-auto px-[50px] md:px-[60px] py-12'>
        <Link to="/" className="fixed top-4 right-4 text-white text-5xl font-normal z-20">
          &times;
        </Link>
        <p className="text-center text-[#7E7E7E] text-lg pt-8">
          Check out my latest blog posts
        </p>
        <h1 className="text-center text-white text-4xl font-bold py-4">
          My Blog
        </h1>
        <div className="flex justify-center mb-12">
          <div className="bg-customGreen h-1 w-20 animate-continuousExpand"></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white py-7'>
          {BlogPost.map((post) => (
            <div key={post.id} className="relative">
              <Link to="#">
                <img
                  className='w-full h-64 transition-transform duration-300 ease-out hover:scale-105 object-cover'
                  src={post.img}
                  alt="img"
                />
              </Link>
              <div className='absolute top-4 left-4 bg-customGreen text-white px-3 py-1 text-sm'>
                {post.date}
              </div>
              <h3 className='text-xl font-bold mt-6'>{post.title}</h3>
              <p className='text-[#7E7E7E] text-sm'>{post.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
