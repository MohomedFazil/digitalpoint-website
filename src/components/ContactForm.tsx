import React from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Send } from 'lucide-react';
export function ContactForm() {
  return <section className="flex flex-col lg:flex-row min-h-[600px]">
      {/* Left Side - Yellow Background & Image */}
      <div className="w-full lg:w-1/2 bg-[#FFD700] relative flex items-end justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-bold text-white/20 select-none pointer-events-none">
          hue
        </div>
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" alt="Customer Support" className="relative z-10 w-3/4 object-contain -mb-10 lg:-mb-20 mix-blend-multiply filter contrast-125" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-20 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Got a Last-minute <br />
            Order in Mind?
          </h2>
          <p className="text-[#E91E63] font-medium mb-6 italic flex items-center gap-2">
            No worries, we've got this! 🚀
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Whether you've got a printing panic or a shipping scramble,
            #HueForce is here to save the day.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Name" />
              <Input placeholder="Phone No." />
            </div>
            <Input placeholder="Email" type="email" />
            <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all bg-gray-50 min-h-[120px] resize-none" placeholder="Comment"></textarea>

            <Button variant="cyan" className="w-full justify-between group">
              Last Minute Order Request
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>;
}