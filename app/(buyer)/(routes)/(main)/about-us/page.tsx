import Image from 'next/image';
import Link from 'next/link';
import { Send } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image src="/img/Desktop.png" alt="Person in car" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40">
          <div className="container text-center  mx-auto px-4 h-full flex flex-col items-center justify-center">
            <div className="bg-black/55 w-fit px-4 py-2">
              <h1 className="text-xl md:text-5xl font-bold text-white mb-2">About Autobuyng</h1>
              <p className="md:text-xl text-white/90">
                Your number one stop for reliable vehicle service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Who are we?</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Lorem consectetur nulla nisi arcu eget. Sed
              ultricies arcu vitae viverra blandit porttitor sagittis. Proin vitae felis ultrices
              nulla ipsum. Sed vel elementum sed amet quis. Id velit mauris id nulla donec cum
              scelerisque felis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision and Mission</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Lorem consectetur nulla nisi arcu eget. Sed
              ultricies arcu vitae viverra blandit porttitor sagittis. Proin vitae felis ultrices
              nulla ipsum. Sed vel elementum sed amet quis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">What we offer</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Lorem consectetur nulla nisi arcu eget. Sed
              ultricies arcu vitae viverra blandit porttitor sagittis. Proin vitae felis ultrices
              nulla ipsum. Sed vel elementum sed amet quis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Why Choose us</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Lorem consectetur nulla nisi arcu eget. Sed
              ultricies arcu vitae viverra blandit porttitor sagittis. Proin vitae felis ultrices
              nulla ipsum. Sed vel elementum sed amet quis.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">How it works</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Lorem consectetur nulla nisi arcu eget. Sed
              ultricies arcu vitae viverra blandit porttitor sagittis. Proin vitae felis ultrices
              nulla ipsum. Sed vel elementum sed amet quis.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our core values</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Lorem consectetur nulla nisi arcu eget. Sed
              ultricies arcu vitae viverra blandit porttitor sagittis. Proin vitae felis ultrices
              nulla ipsum. Sed vel elementum sed amet quis.
            </p>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Meet the Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="text-center">
                  <div className="relative w-full aspect-square mb-2">
                    <Image
                      src="/img/Team.png"
                      alt="Team member"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold">Brooklyn Simmons</h3>
                  <p className="text-sm text-gray-600">General Manager</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">
              Contact us <span className="text-blue-600">today</span>
            </h2>
            <p className="text-gray-600 mb-4">More help, questions? get in touch with us.</p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Send className="w-4 h-4 mr-2" />
              Send us a message
            </button>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">
              Ready to <span className="text-blue-600">buy</span> or{' '}
              <span className="text-secondary-500">sell</span> your car?
            </h2>
            <Link
              href="#"
              className="inline-block px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get started now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
