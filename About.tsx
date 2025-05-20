import React from 'react';
import { 
  Award, Monitor, ScrollText, Headphones, 
  Code, CheckCircle2
} from 'lucide-react';

const About = () => {
  const tools = [
    { name: 'Adobe Premiere Pro', icon: <Monitor className="w-5 h-5 text-amber-500" /> },
    { name: 'Adobe After Effects', icon: <Code className="w-5 h-5 text-amber-500" /> },
    { name: 'Adobe Photoshop', icon: <Monitor className="w-5 h-5 text-amber-500" /> },
    { name: 'Blender (3D animation)', icon: <Monitor className="w-5 h-5 text-amber-500" /> },
    { name: 'Audacity', icon: <Headphones className="w-5 h-5 text-amber-500" /> },
    { name: 'Voice Recording Tools', icon: <Headphones className="w-5 h-5 text-amber-500" /> },
  ];

  const skills = [
    'Professional Video Editing',
    'Advanced Color Grading',
    'Motion Graphics Design',
    'Creative Storytelling',
    'Voice-Over Production',
    'Sound Design & Mixing',
    'Script Writing',
    'Thumbnail Design',
    'After Effects Expressions',
    '3D Animation Basics',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I am Sourav Rana, a dedicated video editor and content creator with expertise in crafting engaging and professional videos that elevate brands and communicate ideas effectively.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              With years of experience in digital storytelling, I blend creativity with technical precision to deliver polished videos that capture attention. My approach combines visual aesthetics with strategic storytelling to create content that resonates with audiences.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Each project I undertake is customized to meet client needs, from concept to final delivery, ensuring a unique and impactful result every time.
            </p>

            <div className="flex gap-4 mb-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-md font-medium transition-colors duration-300 inline-flex items-center gap-2"
              >
                Hire Me <CheckCircle2 className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md font-medium transition-colors duration-300 inline-flex items-center gap-2"
              >
                Download Resume <ScrollText className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="bg-slate-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Award className="text-amber-500 w-6 h-6 mr-3" />
              <h3 className="text-2xl font-semibold text-slate-900">Skills & Expertise</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
                  <span className="text-slate-700">{skill}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center mb-6">
              <Monitor className="text-amber-500 w-6 h-6 mr-3" />
              <h3 className="text-2xl font-semibold text-slate-900">Tools & Software</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center">
                  {tool.icon}
                  <span className="text-slate-700 ml-2">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;