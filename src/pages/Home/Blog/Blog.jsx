// src/components/BlogSection.js
const blogImage3 = 'https://images.unsplash.com/photo-1614064548237-096f735f344f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D';
const blogImage1 = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D';
const blogImage2 = 'https://images.unsplash.com/photo-1616095283204-6a1d2ac3b134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwYXBwJTIwZGVzaWdufGVufDB8fDB8fHww';
import React from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Navigating the Web: Trends in Modern Web Development',
      image: blogImage1,
      date: 'August 10, 2023',
      excerpt: 'Explore the latest trends shaping the web development landscape.',
    },
    {
      title: 'The Art of Mobile App Design: User-Centric Approaches',
      image: blogImage2,
      date: 'July 25, 2023',
      excerpt: 'Delve into the world of mobile app design and learn the key principles.',
    },
    {
      title: 'Cybersecurity Essentials: Safeguarding Your Digital Presence',
      image: blogImage3,
      date: 'June 12, 2023',
      excerpt: 'In an era of increasing cyber threats, understand the fundamental cybersecurity .',
    },
    // Add more blog posts here
  ];

  return (
    <section className="bg-[#F4F8FF] py-20">
      <div className="my-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Blog & News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
              <button className='mt-5'>
                <ButtonPrimary>Read More</ButtonPrimary>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
