import OrganizationImage from "../../../assets/images/Pantai.png";
import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi"; // Import icon arrow
import ScrollToTopButton from "../../ScrollToTopButton/scrolltotopbutton";

const licenses = [
  {
    id: 1,
    title: "Certified Ethical Hacker (CEH)",
    description:
      "A certification that focuses on ethical hacking skills, including penetration testing, network security, and risk management, ideal for professionals seeking careers in cybersecurity.",
    image: OrganizationImage,
    tags: ["Certification", "Cybersecurity", "Ethical Hacking", "IT"],
  },
  {
    id: 2,
    title: "Project Management Professional (PMP)",
    description:
      "A globally recognized certification for project management professionals that demonstrates your skills and expertise in leading projects and teams.",
    image: OrganizationImage,
    tags: ["Certification", "Project Management", "Leadership", "Business"],
  },
  {
    id: 3,
    title: "Google Analytics Certification",
    description:
      "A certification program for mastering Google Analytics, enabling you to track and analyze website traffic, understand audience behavior, and improve online marketing strategies.",
    image: OrganizationImage,
    tags: ["Certification", "Analytics", "Digital Marketing", "Google"],
  },
  {
    id: 4,
    title: "Certified Public Accountant (CPA)",
    description:
      "A certification for accounting professionals that is recognized worldwide, demonstrating expertise in accounting principles, taxation, and financial reporting.",
    image: OrganizationImage,
    tags: ["Certification", "Accounting", "Finance", "Taxation"],
  },
];

const tagColors = ["bg-[#50577A]", "bg-[#6B728E]"];

const LicenseCertification = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isDissolving, setIsDissolving] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // State to manage loading

  const uniqueTags = [...new Set(licenses.flatMap((license) => license.tags))];

  const filteredLicenses = selectedTag
    ? licenses.filter((license) => license.tags.includes(selectedTag))
    : licenses;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); // Set isLoaded state to true after 100ms
    }, 100);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(true); // Show ScrollToTopButton if scrolled more than 50px
      } else {
        setShowScroll(false); // Hide ScrollToTopButton otherwise
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array so this effect runs once after initial render

  useEffect(() => {
    setIsDissolving(true);
    const timeout = setTimeout(() => {
      setIsDissolving(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [selectedTag]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="licensecertification"
      className={`mt-[-20px] px-4 transition-all duration-1000 transform ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          LICENSES & CERTIFICATIONS
        </h1>
      </div>

      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 text-xs font-bold cursor-pointer rounded-full ${
              !selectedTag
                ? "bg-[#50577A] text-white"
                : "bg-[#f3f4f6] text-[#333]"
            } hover:bg-[#50577A] hover:text-white`}
          >
            All
          </button>

          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 text-xs font-bold cursor-pointer rounded-full ${
                selectedTag === tag
                  ? "bg-[#50577A] text-white"
                  : "bg-[#f3f4f6] text-[#333]"
              } hover:bg-[#50577A] hover:text-white`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLicenses.map((license) => (
            <div
              key={license.id}
              className={`w-full border border-white rounded-lg p-4 shadow transition transform hover:shadow-lg hover:bg-white hover:text-[var(--warna1-color)] group ${
                isDissolving
                  ? "opacity-0 transition-opacity duration-500 ease-in-out"
                  : "opacity-100 transition-opacity duration-500 ease-in-out"
              }`}
            >
              <div className="relative mb-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={license.image}
                    alt={license.title}
                    className="w-full h-[230px] object-cover transition duration-300 ease-in-out transform scale-110 hover:brightness-55 hover:scale-100"
                    loading="lazy" // Lazy loading
                  />
                </div>
              </div>

              <h3 className="text-base font-bold pointer-events-none">
                {license.title}
              </h3>
              <p className="mt-1 text-xs pointer-events-none">
                {license.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {license.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded-full ${
                      tagColors[index % tagColors.length]
                    } cursor-pointer group-hover:text-white ${
                      tagColors[index % tagColors.length] === "bg-[#6B728E]"
                        ? "group-hover:text-white"
                        : "group-hover:text-black"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button View License */}
              <div className="mt-4 text-center group relative">
                <button className="w-full px-4 py-2 bg-[#474E68] text-white rounded-lg cursor-pointer shadow-xl hover:bg-[#6B728E] hover:shadow-lg transition-all duration-300">
                  View License
                  <span
                    className="absolute right-4 opacity-0 transform translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <FiArrowRight />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton showScroll={showScroll} />
    </section>
  );
};

export default LicenseCertification;
