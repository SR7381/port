import React from 'react';
import { PlayCircle, Camera, Film, FileVideo } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Video background effect */}
      <div className="absolute inset-0 bg-slate-900 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Where Every <span className="text-amber-500">Frame</span> Tells a <span className="text-amber-500">Story</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Professional video editing & digital content solutions by Sourav Rana, 
              crafting engaging and cinematic experiences that elevate your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#portfolio" 
                className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-md font-medium transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated frame elements */}
        <div className="hidden lg:block">
          <div className="absolute top-1/4 -left-16 w-32 h-32 border-4 border-amber-500/20 animate-float-slow"></div>
          <div className="absolute bottom-1/3 -right-8 w-24 h-24 border-4 border-amber-500/30 animate-float"></div>
          <div className="absolute top-2/3 left-1/4 w-16 h-16 border-4 border-amber-500/40 animate-float-fast"></div>
        </div>
      </div>
      
      {/* Services mini-preview */}
      <div className="relative bg-slate-800/90 py-8 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Film className="h-10 w-10 text-amber-500 mb-3" />
              <h3 className="text-white font-medium">Video Editing</h3>
            </div>
            <div className="flex flex-col items-center">
              <FileVideo className="h-10 w-10 text-amber-500 mb-3" />
              <h3 className="text-white font-medium">Motion Graphics</h3>
            </div>
            <div className="flex flex-col items-center">
              <Camera className="h-10 w-10 text-amber-500 mb-3" />
              <h3 className="text-white font-medium">Content Creation</h3>
            </div>
            <div className="flex flex-col items-center">
              <PlayCircle className="h-10 w-10 text-amber-500 mb-3" />
              <h3 className="text-white font-medium">Script Writing</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;