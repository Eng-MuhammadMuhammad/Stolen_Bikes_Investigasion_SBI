import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Donate.module.css";

const Donate = () => {
  return (
    <div>
      <Header />
      <div className={`${styles.container} bg-gray-100 p-8`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            SUPPORT STOLEN BIKES INVESTIGATION (SBI): FIGHTING BIKE THEFT,
            RESTORING JUSTICE
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <p className="text-lg mb-4">
                STOLEN BIKES INVESTIGATION (SBI) IS A GLOBAL INITIATIVE
                DEDICATED TO COMBATING BIKE THEFT AND HELPING VICTIMS RECOVER
                THEIR STOLEN BIKES.
              </p>
              <p className="text-lg mb-4">
                With your support, we’ve successfully investigated and recovered
                thousands of stolen bikes, provided resources for victims, and
                raised awareness about bike theft prevention. Join us in our
                mission to make bike theft a thing of the past.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">5,000+</h3>
                  <p className="text-sm">Bikes Recovered</p>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">500+</h3>
                  <p className="text-sm">Cases Investigated</p>
                </div>
                <div className="bg-blue-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">30+</h3>
                  <p className="text-sm">Countries Supported</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Volunteer with Us</h2>
              <p className="text-sm mb-4">
                Want to make an even bigger impact? Join our team of dedicated
                volunteers to help investigate bike theft cases, support
                victims, and advocate for stronger anti-theft measures.
              </p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600">
                Become a Volunteer
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Choose Your Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">Supporter</h3>
                  <p className="text-lg font-bold mb-4">$25</p>
                  <p className="text-sm mb-4">
                    Helps fund basic operations and victim support resources.
                  </p>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600">
                    Donate $25
                  </button>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">Champion</h3>
                  <p className="text-lg font-bold mb-4">$100</p>
                  <p className="text-sm mb-4">
                    Funds advanced investigative tools and training for our
                    team.
                  </p>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600">
                    Donate $100
                  </button>
                </div>
                <div className="bg-blue-200 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">Hero</h3>
                  <p className="text-lg font-bold mb-4">$250+</p>
                  <p className="text-sm mb-4">
                    Enables us to expand our global outreach and advocacy
                    efforts.
                  </p>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600">
                    Donate $250
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                What People Are Saying
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg mb-4">
                    "Thanks to SBI, my stolen bike was recovered, and the thief
                    was brought to justice!"
                  </p>
                  <p className="text-sm text-gray-600">- Jamie, London</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg mb-4">
                    "The dedication of the SBI team is incredible. They truly
                    care about helping victims like me."
                  </p>
                  <p className="text-sm text-gray-600">- Sam, New York</p>
                </div>
              </div>
            </div>

            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-sm mb-4">
                Subscribe to our newsletter for the latest updates, success
                stories, and ways you can help.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="border p-2 rounded-lg mr-2"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600">
                Subscribe
              </button>
            </div>

            <div className="text-center">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600">
                DONATE TO SBI
              </button>
              <p className="text-sm mt-4">
                Stolen Bikes Investigation (SBI) is a registered nonprofit
                organization. Your donation is tax-deductible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
