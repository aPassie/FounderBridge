import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-8">
          Connect with Your Perfect Co-Founder
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-20 max-w-3xl mx-auto">
          Whether you're a founder with a vision or a developer looking for an exciting opportunity,
          find your ideal match and build something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16">
          <Button 
            size="lg"
            className="w-full sm:w-auto text-xl px-12 py-8 rounded-xl bg-black text-white hover:bg-white hover:text-black hover:border-black border-2 border-transparent transition-all"
            onClick={() => navigate('/auth/recruiter')}
          >
            I'm a Founder
          </Button>
          <Button 
            size="lg"
            className="w-full sm:w-auto text-xl px-12 py-8 rounded-xl bg-black text-white hover:bg-white hover:text-black hover:border-black border-2 border-transparent transition-all"
            onClick={() => navigate('/auth/developer')}
          >
            I'm a Developer
          </Button>
        </div>
        <div className="mt-40 text-sm text-gray-500">
          Join our community of founders and developers building the next generation of startups
        </div>
      </div>
    </div>
  );
};