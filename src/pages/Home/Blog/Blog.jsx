// src/components/BlogSection.js
const blogImage3 = 'https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524398.jpg?w=740&t=st=1693065422~exp=1693066022~hmac=86f295328497bd63fb9c565d7cd746a0fa26753f95633f924f93c3b609074713';
const blogImage1 = 'https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=740&t=st=1693065268~exp=1693065868~hmac=142b339bc79be0b20f3c02208736236f6b3f7b4c34e286da1747307baac876af';
const blogImage2 = 'https://img.freepik.com/free-photo/scientists-protection-suits-analysing-test-tubes-with-blood-sample-chemical-equipped-laboratory-biologists-examining-vaccine-evolution-using-high-tech-technology-researching-treatment_482257-13003.jpg?w=826&t=st=1693065387~exp=1693065987~hmac=1815b6c941bd7000ceadbb8895847b5f52c11d39a50efb5c37f6cb8ea6af4c77';
import React from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Exploring the Future of IoT',
      image: blogImage1,
      date: 'August 10, 2023',
      excerpt: 'Discover the latest trends and innovations in the world of Internet of Things.',
    },
    {
      title: 'Robotics in Healthcare: Transforming',
      image: blogImage2,
      date: 'July 25, 2023',
      excerpt: 'Learn how robotics is revolutionizing the healthcare industry and improving patient outcomes.',
    },
    {
      title: 'AI and Automation: Shaping Industries',
      image: blogImage3,
      date: 'June 12, 2023',
      excerpt: 'Explore the intersection of artificial intelligence and automation in various sectors.',
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
