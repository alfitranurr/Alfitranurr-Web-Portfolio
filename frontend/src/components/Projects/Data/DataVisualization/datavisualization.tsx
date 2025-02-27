import OrganizationImage from "../../../../assets/images/Pantai.png";
import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi"; // Import icon arrow
import ScrollToTopButton from "../../../../components/ScrollToTopButton/scrolltotopbutton";

const committees = [
  {
    id: 1,
    title: "Data Visualization Research Group",
    description:
      "A global group dedicated to advancing research in data visualization techniques and methodologies, promoting innovation and collaboration among data visualization experts.",
    image: OrganizationImage,
    tags: ["Committee", "Data Visualization", "Research"],
  },
  {
    id: 2,
    title: "Data Visualization for Good Coalition",
    description:
      "A coalition of organizations focused on using data visualization to solve global challenges such as climate change, healthcare, and education.",
    image: OrganizationImage,
    tags: ["Committee", "Data Visualization", "Social Impact"],
  },
  {
    id: 3,
    title: "Data Visualization Ethics and Governance Forum",
    description:
      "An interdisciplinary forum focusing on the ethical implications of data visualization, governance, and regulatory frameworks.",
    image: OrganizationImage,
    tags: ["Committee", "Visualization Ethics", "Governance"],
  },
  {
    id: 4,
    title: "Data Visualization Startups and Innovation Hub",
    description:
      "An initiative to foster innovation in the data visualization startup ecosystem, connecting entrepreneurs, investors, and professionals in the field.",
    image: OrganizationImage,
    tags: [
      "Committee",
      "Visualization Startups",
      "Innovation",
      "Entrepreneurship",
      "Data Visualization",
    ],
  },
];

const tagColors = ["bg-[#50577A]", "bg-[#6B728E]"];

const DataVisualization = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isDissolving, setIsDissolving] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // State to manage loading

  const uniqueTags = [...new Set(committees.flatMap((event) => event.tags))];

  const filteredCommittees = selectedTag
    ? committees.filter((event) => event.tags.includes(selectedTag))
    : committees;

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
      id="datavisualization"
      className={`mt-[-20px] px-4 transition-all duration-1000 transform ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          DATA VISUALIZATION PROJECTS
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
          {filteredCommittees.map((committee) => (
            <div
              key={committee.id}
              className={`w-full border border-white rounded-lg p-4 shadow transition transform hover:shadow-lg hover:bg-white hover:text-[var(--warna1-color)] group ${
                isDissolving
                  ? "opacity-0 transition-opacity duration-500 ease-in-out"
                  : "opacity-100 transition-opacity duration-500 ease-in-out"
              }`}
            >
              <div className="relative mb-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={committee.image}
                    alt={committee.title}
                    className="w-full h-[230px] object-cover transition duration-300 ease-in-out transform scale-110 hover:brightness-55 hover:scale-100"
                    loading="lazy" // Lazy loading
                  />
                </div>
              </div>

              <h3 className="text-base font-bold pointer-events-none">
                {committee.title}
              </h3>
              <p className="mt-1 text-xs pointer-events-none">
                {committee.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {committee.tags.map((tag, index) => (
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

              {/* Button View Committee */}
              <div className="mt-4 text-center group relative">
                <button className="w-full px-4 py-2 bg-[#474E68] text-white rounded-lg cursor-pointer shadow-xl hover:bg-[#6B728E] hover:shadow-lg transition-all duration-300">
                  View Committee
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

export default DataVisualization;
