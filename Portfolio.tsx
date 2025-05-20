import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'editing', label: 'Video Editing' },
    { id: 'animation', label: 'Animation' },
    { id: 'motion', label: 'Motion Graphics' },
    { id: 'youtube', label: 'YouTube Content' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Corporate Brand Video',
      category: 'editing',
      image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Professional editing for a corporate brand video with color grading and dynamic transitions.'
    },
    {
      id: 2,
      title: 'Product Animation',
      category: 'animation',
      image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: '3D product animation showcasing features and benefits with smooth camera movements.'
    },
    {
      id: 3,
      title: 'YouTube Channel Trailer',
      category: 'youtube',
      image: 'https://images.pexels.com/photos/7845516/pexels-photo-7845516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Attention-grabbing channel trailer with fast-paced editing and branded elements.'
    },
    {
      id: 4,
      title: 'Motion Graphics Intro',
      category: 'motion',
      image: 'https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Custom After Effects intro with dynamic text animations and particle effects.'
    },
    {
      id: 5,
      title: 'Social Media Ad Campaign',
      category: 'editing',
      image: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Series of short, impactful social media ads optimized for various platforms.'
    },
    {
      id: 6,
      title: 'Event Highlight Reel',
      category: 'editing',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Engaging highlight reel capturing the best moments of a corporate event.'
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Check out some of my recent work across different categories of video editing and content creation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${activeFilter === filter.id 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-white text-slate-700 hover:bg-slate-200'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-slate-200 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-200 text-sm mb-4">{item.description}</p>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                    <Play className="w-4 h-4" />
                    Watch
                  </button>
                  <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-md font-medium transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;