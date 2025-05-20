import React from 'react';
import { Film, Type, Image, Youtube, FileVideo, Briefcase } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Film className="h-10 w-10 text-amber-500 group-hover:text-amber-600 transition-colors duration-300" />,
      title: 'Video Editing & Animation',
      description: 'Professional video editing with color grading, transitions, and effects to create polished, engaging content that captivates your audience.',
    },
    {
      icon: <Type className="h-10 w-10 text-amber-500 group-hover:text-amber-600 transition-colors duration-300" />,
      title: 'Script Writing & Voiceover',
      description: 'Compelling script writing services and professional Hindi-English mix voiceovers that effectively communicate your message.',
    },
    {
      icon: <Image className="h-10 w-10 text-amber-500 group-hover:text-amber-600 transition-colors duration-300" />,
      title: 'Thumbnail & Template Design',
      description: 'Eye-catching thumbnails and custom templates that grab attention and increase click-through rates on your content.',
    },
    {
      icon: <Youtube className="h-10 w-10 text-amber-500 group-hover:text-amber-600 transition-colors duration-300" />,
      title: 'Content Creation',
      description: 'Strategic content creation for YouTube and social media platforms designed to engage your target audience and build your brand.',
    },
    {
      icon: <FileVideo className="h-10 w-10 text-amber-500 group-hover:text-amber-600 transition-colors duration-300" />,
      title: 'Motion Graphics',
      description: 'Dynamic motion graphics using Adobe After Effects, including coding expressions to create custom animations and visual effects.',
    },
    {
      icon: <Briefcase className="h-10 w-10 text-amber-500 group-hover:text-amber-600 transition-colors duration-300" />,
      title: 'Complete Project Management',
      description: 'End-to-end management of video projects from concept development to final delivery, ensuring high-quality results.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">My Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive video editing and digital content solutions to bring your vision to life and help your brand stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;