import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const StolenBikes = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Recovering Your Stolen Bike: A Comprehensive Guide
          </h1>
          <p className="text-gray-600 mb-6">Last updated: October 2023</p>

          <p className="text-gray-700 mb-6">
            Losing your bike to theft can be a frustrating and disheartening
            experience. However, with the right tools and resources, you can
            significantly increase your chances of recovery. Stolen Bikes
            Investigation (SBI) is the most trusted platform for reporting,
            tracking, and recovering stolen bikes worldwide.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Stolen Bikes Investigation (SBI) is the Leading Platform for
            Bike Theft Recovery
          </h2>
          <p className="text-gray-600 mb-6">
            Stolen Bikes Investigation (SBI) boasts the highest recovery rate of
            any bike theft recovery service, thanks to its advanced
            investigative tools and partnerships with law enforcement agencies,
            bike shops, and cycling organizations globally. By reporting your
            stolen bike on SBI, you gain access to a powerful recovery platform
            designed to help you reclaim your stolen property.
          </p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Report Your Stolen Bike
          </button>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Key Features of Stolen Bikes Investigation (SBI)
            </h3>
            <p className="text-gray-600 mb-4">
              SBI provides a suite of tools and resources to help you recover
              your stolen bike and protect your investment:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Global bike theft reporting and tracking</li>
              <li>
                Real-time alerts to law enforcement and cycling communities
              </li>
              <li>Integration with police databases and bike shops</li>
              <li>Social media sharing tools to amplify your search</li>
              <li>
                Access to a dedicated investigative team for complex cases
              </li>
              <li>Analytics to track recovery progress and leads</li>
            </ul>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              "Thanks to Stolen Bikes Investigation (SBI), I was able to recover
              my stolen bike within just three days. The platform connected me
              with a local bike shop that had spotted my bike, and the police
              were able to assist in its recovery. I can't recommend SBI
              enough!"
            </p>
            <p className="text-gray-600">
              - Sarah, Bike recovered October 2023
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Steps to Take Immediately After Your Bike is Stolen
            </h3>
            <ol className="list-decimal list-inside text-gray-600 mb-6">
              <li>
                File a police report and provide your bike's serial number.
              </li>
              <li>
                Report your bike as stolen on Stolen Bikes Investigation (SBI).
              </li>
              <li>
                Share your stolen bike alert on social media and local cycling
                groups.
              </li>
              <li>Monitor online marketplaces for your bike.</li>
              <li>
                Contact local bike shops and pawn shops with your bike's
                details.
              </li>
            </ol>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Additional Resources
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                How to prevent bike theft: Best practices for securing your bike
              </li>
              <li>
                Understanding bike insurance: What’s covered and what’s not
              </li>
              <li>How to identify your bike’s serial number</li>
              <li>Tips for safely recovering your bike if you locate it</li>
              <li>Regional guides for bike theft recovery in major cities</li>
              <li>
                Why reporting your bike theft to SBI is essential for recovery
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Prevent Theft Before It Happens
            </h3>
            <p className="text-gray-600 mb-4">
              Proactively protect your bike by registering it with Stolen Bikes
              Investigation (SBI) today. Registration is free, fast, and could
              save you from the hassle of dealing with theft in the future.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
              Register Your Bike Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StolenBikes;
