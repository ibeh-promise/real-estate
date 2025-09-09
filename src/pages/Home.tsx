import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="rounded-[50px] md:m-20 lg:m-5">
        <div
          className="hero h-[500px] rounded-[30px] bg-white"
          style={{
            backgroundImage:
              "url(/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg)",
          }}
        >
          <div className="hero-overlay rounded-[30px]" />
          <div className="hero-content text-neutral-content text-center flex flex-col items-center justify-center w-full h-full">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Let's Find A Home That Is Perfect For You
              </h1>
              <p className="mb-5">Find Your Dream Home Today</p>
              <label className="w-[200px] lg:w-[400px] bg-white rounded-full pl-5 flex items-center gap-3 self-center mx-auto shadow">
                <svg
                  className="h-[1em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  required
                  placeholder="Search"
                  className="flex-1 bg-transparent border-none outline-none py-2 text-gray-800 px-2"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors */}
      <div className="py-20 px-10 lg:px-20 bg-white flex flex-col gap-5">
        <p className="text-gray-500 font-bold">Sponsors - Contributors - Programme</p>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-value text-gray-600">Google</div>
          </div>
          <div className="stat">
            <div className="stat-value text-gray-600">Booking.com</div>
          </div>
          <div className="stat">
            <div className="stat-value text-gray-600">Microsoft</div>
          </div>
          <div className="stat">
            <div className="stat-value text-gray-600">Amazon</div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="bg-gray-100 py-20 px-5 lg:px-20 flex flex-col gap-5">
        <p className="text-4xl font-bold text-blue-800 text-left">What we do</p>
        <div className="flex justify-between items-center">
        <p className="text-xl text-gray-800 text-left">
          Learn more about our service
        </p>
          <button className="btn btn-primary"> Learn More </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-12 justify-items-center">
          <div className="card bg-white w-72 items-center py-10">
            <button className="btn btn-primary w-10 h-10 rounded-full">🏡</button>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-gray-900">Property Sales</h2>
              <p className="text-gray-700">
                We help you find and purchase the perfect home or investment
                property, with verified listings and trusted agents guiding you
                every step of the way.
              </p>
            </div>
          </div>
          <div className="card bg-white w-72 items-center py-10">
            <button className="btn btn-primary w-10 h-10 rounded-full">🔑</button>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-gray-900">Property Rentals</h2>
              <p className="text-gray-700">
                Whether you need a short-term apartment or a long-term lease, we
                connect you with affordable and secure rental options in prime
                locations.
              </p>
            </div>
          </div>
          <div className="card bg-white w-72 items-center py-10">
            <button className="btn btn-primary w-10 h-10 rounded-full">🛠</button>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-gray-900">Property Management</h2>
              <p className="text-gray-700">
                From tenant management to maintenance and rent collection, we
                provide stress-free property management services to keep your
                investments thriving.
              </p>
            </div>
          </div>
          <div className="card bg-white w-72 items-center py-10">
            <button className="btn btn-primary w-10 h-10 rounded-full">📈</button>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-gray-900">Real Estate Consulting</h2>
              <p className="text-gray-700">
                Our expert team offers market insights, property valuations, and
                investment advice to help you make smarter real estate decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Move To What Moves You */}
      <div className="py-20 bg-white px-10 lg:px-20 text-center">
        <p className="text-3xl font-bold text-gray-800">Move To What Moves You</p>
        <p className="text-lg text-gray-600 mt-2">
          Discover handpicked properties designed to match your lifestyle
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 justify-items-center">
          <div className="card bg-white w-80 shadow-lg rounded-xl overflow-hidden">
            <img
              src="/ian-macdonald-pmqTJDVbKdM-unsplash.jpg"
              alt="Luxury Apartment"
              className="h-48 w-full object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Modern Luxury Apartments
              </h3>
              <p className="text-gray-600 mt-2">
                Experience comfort and style with our curated selection of premium
                apartments in the heart of the city.
              </p>
            </div>
            <button className="btn px-5 shadow p-5">View Details</button>
          </div>

          <div className="card bg-white w-80 shadow-lg rounded-xl overflow-hidden">
            <img
              src="/jason-briscoe-UV81E0oXXWQ-unsplash.jpg"
              alt="Family Homes"
              className="h-48 w-full object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Spacious Family Homes
              </h3>
              <p className="text-gray-600 mt-2">
                Find the perfect home for your family with spacious interiors,
                secure neighborhoods, and modern amenities.
              </p>
            </div>
            <button className="btn px-5 shadow p-5">View Details</button>
          </div>

          <div className="card bg-white w-80 shadow-lg rounded-xl overflow-hidden">
            <img
              src="/jennifer-r-sZ9F_XkGJfI-unsplash.jpg"
              alt="Investment Properties"
              className="h-48 w-full object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                Smart Investments
              </h3>
              <p className="text-gray-600 mt-2">
                Explore high-value properties that offer excellent returns and
                long-term growth opportunities.
              </p>
            </div>
            <button className="btn px-5 shadow p-5">View Details</button>
          </div>
        </div>
      </div>

      {/* Featured Listings */}
      <div className="bg-gray-100 py-20 px-5 lg:px-20 flex flex-col gap-5">
        <p className="text-4xl font-bold text-blue-800 text-left">Featured Listings</p>
        <div className="flex justify-between items-center">
         <p className="text-xl text-gray-800 text-left">
          Explore our top properties available for you
        </p>
          <button className="btn btn-primary"> See More </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 justify-items-center">
          {/* Card 1 */}
          <div className="card bg-base-100 w-80 shadow-lg rounded-xl overflow-hidden">
            <figure>
              <img
                src="/ian-macdonald-pmqTJDVbKdM-unsplash.jpg"
                alt="Luxury Apartment"
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Luxury Apartment
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p className="text-gray-600">
                A stylish 2-bedroom apartment with a balcony view of the city
                skyline.
              </p>
              <div className="mt-3">
                <span className="text-lg font-bold text-blue-700">
                  $1,200 / month
                </span>
              </div>
              <div className="card-actions justify-between mt-3">
                <div className="badge badge-outline">For Rent</div>
                <div className="badge badge-outline">Luxury</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 w-80 shadow-lg rounded-xl overflow-hidden">
            <figure>
              <img
                src="/jason-briscoe-UV81E0oXXWQ-unsplash.jpg"
                alt="Family Home"
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Spacious Family Home
                <div className="badge badge-accent">Featured</div>
              </h2>
              <p className="text-gray-600">
                4-bedroom home in a safe neighborhood with private garden and
                parking space.
              </p>
              <div className="mt-3">
                <span className="text-lg font-bold text-green-700">$250,000</span>
              </div>
              <div className="card-actions justify-between mt-3">
                <div className="badge badge-outline">For Sale</div>
                <div className="badge badge-outline">Family</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 w-80 shadow-lg rounded-xl overflow-hidden">
            <figure>
              <img
                src="/jennifer-r-sZ9F_XkGJfI-unsplash.jpg"
                alt="Beach Villa"
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Beachfront Villa
                <div className="badge badge-primary">Hot</div>
              </h2>
              <p className="text-gray-600">
                Exclusive 3-bedroom villa with direct access to the beach and a
                private pool.
              </p>
              <div className="mt-3">
                <span className="text-lg font-bold text-red-700">$450,000</span>
              </div>
              <div className="card-actions justify-between mt-3">
                <div className="badge badge-outline">For Sale</div>
                <div className="badge badge-outline">Beach</div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card bg-base-100 w-80 shadow-lg rounded-xl overflow-hidden">
            <figure>
              <img
                src="/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg"
                alt="Office Space"
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Modern Office Space
                <div className="badge badge-info">Available</div>
              </h2>
              <p className="text-gray-600">
                Open-plan office space in a prime business district, ideal for
                startups.
              </p>
              <div className="mt-3">
                <span className="text-lg font-bold text-purple-700">
                  $3,000 / month
                </span>
              </div>
              <div className="card-actions justify-between mt-3">
                <div className="badge badge-outline">For Rent</div>
                <div className="badge badge-outline">Commercial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
