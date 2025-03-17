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
              Autobuy was established to address the evolving needs of today’s car shoppers. Based in, Nigeria, we recognized that the traditional car buying process was often complex and frustrating. With a focus on creating a safe, secure, and user-friendly experience, our platform appraises vehicles using cutting-edge technology, captures high-quality imagery, and provides detailed information—all to empower you to make informed decisions from the comfort of your home.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision and Mission</h2>
            <p className="text-gray-700">
              <span className='font-bold'> Vision:</span> To redefine car buying and selling with innovation and transparency, creating a secure, data-driven marketplace that empowers every consumer and builds lasting trust.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">What we offer</h2>
            <p className="text-gray-700">
              Our fully automated system streamlines every step of the vehicle buying journey. From digital appraisals at designated testing centers to data-driven recommendations and trusted dealer reviews, we ensure every transaction is transparent and hassle-free. Whether you&apos;re searching for a new ride or a pre-owned vehicle that fits your lifestyle, our innovative platform connects you with the best options on the market.

            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Why Choose us</h2>
            <p className="text-gray-700">
              Wer&apos;e the pioneer car marketplace In Nigeria and Africa at large; we&apos;re a trusted partner dedicated to simplifying your car buying journey. Our platform is designed to offer a rich, customer-centric experience that stands out in today&apos;s fast-paced digital world. With Autobuy, you gain access to a secure environment where cutting-edge technology meets the human touch—ensuring that every purchase is as reliable as it is convenient.
              <br />
              <br />
              Join us as we revolutionize automotive e-commerce in Nigeria and beyond. Experience a new era of car shopping where innovation drives your journey and every vehicle is just a click away.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">How it works</h2>
            <p className="text-gray-700">
              At Autobuy, our process is designed with simplicity and transparency in mind. Our advanced digital platform takes you step‐by‐step through a seamless vehicle buying and selling journey:
            </p>
            <ol className='space-y-3 list-disc mt-3 ml-4'>
              <li>
                <span className='font-bold'>Automated Appraisal:</span> Every vehicle is first appraised using state-of-the technology at our designated centers. This ensures an accurate, data-driven valuation that reflects the true market value.
              </li>
              <li>
                <span className='font-bold'>Comprehensive Listing:</span> Once appraised, high-quality images and detailed vehicle information are captured and uploaded onto our marketplace. Our smart algorithm then curates listings to match buyers’ precise specifications.
              </li>
              <li>
                <span className='font-bold'>Smart Recommendations:</span> Smart Recommendations: Our platform leverages real-time data to offer personalized suggestions, making it easy to compare options, verify pricing, and find the perfect match—all from the comfort of your home.
              </li>
              <li>
                <span className='font-bold'> Secure Transactions: </span>  Secure Transactions: With a strong emphasis on security, every transaction is managed in a safe, reliable environment. From digital contracts to secure payment gateways, we ensure that your information and funds are always protected.
              </li>
            </ol>

          </section>
          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our core values</h2>
            <p className="text-gray-700">
              At the heart of Autobuy is a commitment to:
            </p>

            <ol className='space-y-3 list-disc mt-3 ml-4'>
              <li><span className='font-bold'> Transparency:</span> We provide clear pricing indicators and an open review platform, ensuring you have all the information you need.
              </li>
              <li> <span className='font-bold'>Innovation: </span>By harnessing advanced algorithms and digital technologies, we deliver personalized car recommendations tailored to your exact needs.
              </li>
              <li><span className='font-bold'> Customer Satisfaction:</span> Our goal is to exceed your expectations through seamless service, making every interaction as enjoyable and efficient as possible.
              </li>
              <li><span className='font-bold'> Integrity:</span> We pride ourselves on ethical practices and accountability, treating every customer like family.
              </li>
            </ol>
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
