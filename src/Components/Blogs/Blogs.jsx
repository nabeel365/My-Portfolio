import React from 'react';

const Blogs = () => {
  const blogs = [
    // Blog details...
    {
      title: 'Mastering CSS Flexbox: A Comprehensive Guide',
      date: 'August 15, 2023',
      description: 'Learn how to effectively use CSS Flexbox to create flexible and responsive layouts for your web projects.',
      imageUrl: 'https://example.com/flexbox.jpg',
      link: 'https://example.com/mastering-css-flexbox-guide',
    },
    {
      title: '10 Essential JavaScript Concepts Every Web Developer Should Know',
      date: 'July 28, 2023',
      description: 'Discover the key JavaScript concepts that will help you become a more proficient web developer.',
      imageUrl: 'https://example.com/javascript-concepts.jpg',
      link: 'https://example.com/essential-javascript-concepts',
    },
    {
      title: 'Responsive Web Design Best Practices: Building Mobile-Friendly Websites',
      date: 'June 12, 2023',
      description: 'Learn the best practices for creating responsive web designs that adapt seamlessly to various screen sizes and devices.',
      imageUrl: 'https://example.com/responsive-web-design.jpg',
      link: 'https://example.com/responsive-web-design-best-practices',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Coming Soon ...</h2>

        {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={blog.imageUrl} alt={blog.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.date}</p>
                <p className="text-gray-700">{blog.description}</p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Blogs;
