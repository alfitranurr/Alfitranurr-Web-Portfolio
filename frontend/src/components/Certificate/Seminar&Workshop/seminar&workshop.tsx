import Pantai from "../../../assets/images/Pantai.png";
import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi"; // Import ikon arrow
import ScrollToTopButton from "../../../components/ScrollToTopButton/scrolltotopbutton";

const seminarsAndWorkshops = [
  {
    id: 1,
    title: "Data Science and AI Workshop",
    description:
      "An interactive workshop on the fundamentals of Data Science and Artificial Intelligence with practical case studies.",
    image: Pantai,
    tags: ["Workshop", "Data Science", "AI"],
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description:
      "A comprehensive bootcamp that covers everything from HTML, CSS to advanced JavaScript frameworks and full-stack development.",
    image: Pantai,
    tags: ["Workshop", "Web Development"],
  },
  {
    id: 3,
    title: "Project Management Essentials Seminar",
    description:
      "A seminar designed to help professionals master the core principles of project management, from planning to execution.",
    image: Pantai,
    tags: ["Seminar", "Project Management"],
  },
  {
    id: 4,
    title: "Cloud Computing and AWS Seminar",
    description:
      "Explore cloud technologies and best practices with a focus on AWS, designed for IT professionals looking to expand their expertise.",
    image: Pantai,
    tags: ["Seminar", "Cloud Computing", "AWS"],
  },
];

const tagColors = ["bg-[#50577A]", "bg-[#6B728E]"];

const SeminarAndWorkshop = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isDissolving, setIsDissolving] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // State to manage loading

  const uniqueTags = [
    ...new Set(seminarsAndWorkshops.flatMap((event) => event.tags)),
  ];

  const filteredEvents = selectedTag
    ? seminarsAndWorkshops.filter((event) => event.tags.includes(selectedTag))
    : seminarsAndWorkshops;

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
      id="seminar-workshop"
      className={`mt-[-20px] px-4 transition-all duration-1000 transform ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          SEMINAR & WORKSHOP CERTIFICATES
        </h1>
      </div>

      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="flex justify-start gap-4 mb-6 rounded-full bg-[#f3f4f6] p-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${
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
              className={`px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${
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
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`w-full border border-white rounded-lg p-4 shadow transition transform hover:shadow-lg hover:bg-white hover:text-[var(--warna1-color)] group ${
                isDissolving
                  ? "opacity-0 transition-opacity duration-500 ease-in-out"
                  : "opacity-100 transition-opacity duration-500 ease-in-out"
              }`}
            >
              <div className="relative mb-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[230px] object-cover transition duration-300 ease-in-out transform scale-110 hover:brightness-55 hover:scale-100"
                    loading="lazy" // Lazy loading
                  />
                </div>
              </div>

              <h3 className="text-base font-bold pointer-events-none">
                {event.title}
              </h3>
              <p className="mt-1 text-xs pointer-events-none">
                {event.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
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

              {/* Button View Event */}
              <div className="mt-4 text-center group relative">
                <button className="w-full px-4 py-2 bg-[#474E68] text-white rounded-lg cursor-pointer shadow-xl hover:bg-[#6B728E] hover:shadow-lg transition-all duration-300">
                  View Event
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

export default SeminarAndWorkshop;
