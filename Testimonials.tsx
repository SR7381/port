import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Marketing Director',
      company: 'TechVision Inc.',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'Working with Sourav transformed our brand videos completely. His attention to detail and creative direction helped us increase our engagement metrics by over 200%. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Rahul Mehra',
      role: 'YouTube Content Creator',
      company: 'TechTalks',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'As a content creator, finding a reliable editor is crucial. Sourav not only delivers exceptional quality but also brings creative ideas that have helped grow my channel to over 500K subscribers.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Anita Desai',
      role: 'Event Manager',
      company: 'GlobalEvents',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'The highlight videos Sourav created for our corporate events were stunning. He captured the essence of each event perfectly and delivered the final edits ahead of schedule.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Hear what my clients have to say about their experience working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Quotation Mark */}
          <Quote className="absolute text-amber-500/20 w-24 h-24 -top-10 -left-10 z-0" />
          
          {/* Testimonial Card */}
          <div className="bg-slate-800 rounded-lg shadow-xl p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-amber-500/20">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex mb-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                
                <blockquote className="text-slate-300 text-lg italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div>
                  <h4 className="text-white font-semibold text-xl">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-amber-500">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-amber-500' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;