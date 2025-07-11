import { useState, useEffect } from "react";
import {
  FuturisticParticles,
  Project,
  Contact,
  ChatBot,
  Header,
} from "../components";
import {
  Building,
  Users,
  Truck,
  Wrench,
  Award,
  TrendingUp,
  Shield,
  Sparkles,
  Star,
  Eye,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  HardHat,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  getUserData,
  getAuthToken,
  clearAuthCookies,
  isAuthenticated,
} from "../utils/cookies";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  // Set default mode based on device preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true; // fallback to dark mode
  });
  const [isManualOverride, setIsManualOverride] = useState(false);
  useEffect(() => {
    console.log("🔍 Dashboard: Checking authentication state...");

    // Use cookie-based authentication
    const userData = getUserData();
    const authToken = getAuthToken();
    const authenticated = isAuthenticated();

    console.log("Dashboard cookie check:");
    console.log("  - User data from cookies:", userData);
    console.log("  - Auth token exists:", !!authToken);
    console.log("  - Is authenticated:", authenticated);

    if (authenticated && userData) {
      console.log(
        "✅ Dashboard: Successfully retrieved user data from cookies:",
        userData
      );
      setUser(userData);

      // Additional verification
      console.log("✅ User state set in Dashboard:", {
        username: userData.username,
        email: userData.email,
        role: userData.role,
        hasToken: !!authToken,
      });
    } else {
      console.log(
        "⚠️  Dashboard: No complete authentication data found in cookies"
      );
      if (!userData) console.log("  - Missing user data in cookies");
      if (!authToken) console.log("  - Missing auth token in cookies");
      setUser(null);
    }

    // Temporary test user for debugging (uncomment to test)
    // const testUser = { username: "testuser", email: "test@example.com", role: "Client" };
    // setUser(testUser);
    // console.log('Dashboard: Test user set:', testUser);
  }, []);

  const handleLogout = () => {
    console.log("🚪 Logout initiated...");

    // Clear all authentication cookies
    clearAuthCookies();

    // Verify cleanup
    const remainingUser = getUserData();
    const remainingToken = getAuthToken();

    console.log("✅ Logout verification:");
    console.log("  - User cleared:", !remainingUser);
    console.log("  - Token cleared:", !remainingToken);

    // Reset state
    setUser(null);

    // Navigate to signin
    console.log("🔄 Redirecting to signin...");
    navigate("/signin");
  };

  // Utility function for glass card styling
  const getGlassCardClass = () => {
    return isDarkMode
      ? "bg-white/5 backdrop-blur-sm border border-white/10"
      : "bg-white backdrop-blur-sm border border-gray-200 shadow-lg";
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for system theme changes (only if not manually overridden)
  useEffect(() => {
    if (isManualOverride) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [isManualOverride]);

  // Manual theme toggle function
  const toggleTheme = () => {
    setIsManualOverride(true);
    setIsDarkMode(!isDarkMode);
  };

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Update URL with hash
      window.history.pushState(null, "", `#${sectionId}`);
      // Smooth scroll to element
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Auto-rotate featured projects
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle direct navigation to hash URLs
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        // Small delay to ensure the page has loaded
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    };

    // Handle initial load
    handleHashNavigation();

    // Handle browser back/forward navigation
    window.addEventListener("popstate", handleHashNavigation);

    return () => {
      window.removeEventListener("popstate", handleHashNavigation);
    };
  }, []);

  const services = [
    {
      icon: <Building className="w-12 h-12 text-cyan-400" />,
      title: "Smart Commercial Spaces",
      description:
        "AI-integrated office buildings with IoT systems, sustainable energy solutions, and adaptive workspace technologies.",
      features: [
        "Smart Building Systems",
        "Energy Management",
        "Automated Controls",
      ],
      metric: "500+ Buildings",
      growth: "+23%",
      color: "cyan",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-400" />,
      title: "Future Living Homes",
      description:
        "Intelligent residential complexes with home automation, renewable energy, and sustainable living solutions.",
      features: ["Home Automation", "Solar Integration", "Smart Security"],
      metric: "1200+ Homes",
      growth: "+34%",
      color: "purple",
    },
    {
      icon: <Truck className="w-12 h-12 text-emerald-400" />,
      title: "Digital Infrastructure",
      description:
        "Next-generation infrastructure with smart city integration, digital connectivity, and sustainable transport.",
      features: ["5G Ready", "EV Charging", "Smart Traffic Systems"],
      metric: "150+ Projects",
      growth: "+18%",
      color: "emerald",
    },
    {
      icon: <Wrench className="w-12 h-12 text-orange-400" />,
      title: "Adaptive Renovation",
      description:
        "Transform existing structures with cutting-edge technology, sustainable materials, and modern design.",
      features: ["3D Modeling", "Sustainable Materials", "Tech Integration"],
      metric: "300+ Renovations",
      growth: "+41%",
      color: "orange",
    },
  ];

  const projects = [
    {
      title: "Colombo Tech Hub 2030",
      category: "Smart Commercial",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      description:
        "AI-powered 60-story smart building with integrated renewable energy systems and automated facilities management.",
      tech: ["AI Integration", "Solar Panels", "Smart HVAC"],
      status: "In Progress",
      completion: "2026",
      progress: 65,
      investment: "$250M",
      rating: 4.9,
    },
    {
      title: "Kandy Green Residences",
      category: "Eco-Living",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      description:
        "Carbon-neutral residential complex with vertical gardens, smart home systems, and community energy grid.",
      tech: ["Vertical Gardens", "Energy Grid", "Smart Homes"],
      status: "Completed",
      completion: "2024",
      progress: 100,
      investment: "$180M",
      rating: 4.8,
    },
    {
      title: "Galle Smart Bridge",
      category: "Infrastructure",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      description:
        "IoT-enabled bridge with real-time monitoring, adaptive lighting, and integrated transportation systems.",
      tech: ["IoT Sensors", "LED Systems", "Traffic AI"],
      status: "Planning",
      completion: "2027",
      progress: 25,
      investment: "$95M",
      rating: 4.7,
    },
  ];

  const stats = [
    {
      number: "500",
      label: "Smart Projects",
      suffix: "+",
      icon: <Building className="w-6 h-6" />,
      change: "+12%",
    },
    {
      number: "25",
      label: "Years Innovation",
      suffix: "+",
      icon: <Award className="w-6 h-6" />,
      change: "reliable",
    },
    {
      number: "200",
      label: "Tech Experts",
      suffix: "+",
      icon: <Users className="w-6 h-6" />,
      change: "+8%",
    },
    {
      number: "98",
      label: "Success Rate",
      suffix: "%",
      icon: <TrendingUp className="w-6 h-6" />,
      change: "+2%",
    },
  ];

  const achievements = [
    {
      title: "Best Smart Building 2024",
      organization: "Sri Lanka Construction Awards",
      icon: <Award className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Sustainability Leader",
      organization: "Green Building Council",
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
    },
    {
      title: "Innovation Excellence",
      organization: "Tech Construction Forum",
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Top Employer 2024",
      organization: "HR Excellence Awards",
      icon: <Star className="w-8 h-8 text-cyan-400" />,
    },
  ];

  const technologies = [
    {
      name: "BIM Integration",
      icon: <Eye className="w-6 h-6" />,
      description: "3D Building Information Modeling",
    },
    {
      name: "IoT Systems",
      icon: <Zap className="w-6 h-6" />,
      description: "Internet of Things Integration",
    },
    {
      name: "AI Automation",
      icon: <Target className="w-6 h-6" />,
      description: "Artificial Intelligence Solutions",
    },
    {
      name: "Green Tech",
      icon: <Shield className="w-6 h-6" />,
      description: "Sustainable Technology Stack",
    },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white" : "bg-white text-gray-900"} overflow-x-hidden`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className={`absolute top-1/4 left-1/4 w-96 h-96 ${isDarkMode ? "bg-cyan-500/10" : "bg-gray-100/50"} rounded-full blur-3xl animate-pulse`}
          ></div>
          <div
            className={`absolute top-3/4 right-1/4 w-96 h-96 ${isDarkMode ? "bg-purple-500/10" : "bg-gray-50/60"} rounded-full blur-3xl animate-pulse`}
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className={`absolute bottom-1/4 left-1/3 w-96 h-96 ${isDarkMode ? "bg-emerald-500/10" : "bg-gray-100/40"} rounded-full blur-3xl animate-pulse`}
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      {/* Futuristic Floating Particles */}
      {/* Futuristic Floating Particles (mobile-friendly) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 sm:block block">
        <div className="sm:block hidden">
          <FuturisticParticles />
        </div>
        {/* On mobile, reduce particle count and hide on very small screens for performance */}
        <div className="sm:hidden block">
          <FuturisticParticles />
        </div>
      </div>

      <Header
        key={user ? "user-logged-in" : "user-logged-out"}
        isDarkMode={isDarkMode}
        scrollY={scrollY}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        user={user}
        handleLogout={handleLogout}
      />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-[100px] sm:pt-0"
      >
        <div
          className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20" : "bg-gray-50/30"}`}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Building
              </span>
              <br />
              <span
                className={`${isDarkMode ? "text-white" : "text-gray-800"}`}
              >
                Tomorrow's
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Sri Lanka
              </span>
            </h2>
            <p
              className={`text-xl lg:text-2xl ${isDarkMode ? "text-gray-300" : "text-gray-700"} max-w-4xl mx-auto mb-12 leading-relaxed`}
            >
              Pioneering the future of construction with AI-powered smart
              buildings, sustainable technologies, and innovative design
              solutions that transform how we live, work, and connect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 btn-glow bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <span className="relative z-10 flex items-center">
                Start Your Future Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              className={`group relative px-8 py-4 ${getGlassCardClass()} rounded-full font-semibold ${isDarkMode ? "text-white hover:bg-white/20" : "text-gray-800 hover:bg-gray-50 hover:shadow-xl"} transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
            >
              <span className="relative z-10 flex items-center">
                Explore Portfolio
                <Eye className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </button>
          </div>

          {/* Technology Stack Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`group p-6 ${getGlassCardClass()} rounded-2xl ${isDarkMode ? "hover:bg-white/10" : "hover:bg-gray-50 hover:shadow-xl"} transition-all duration-300 animate-float`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-cyan-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h3
                  className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}
                >
                  {tech.name}
                </h3>
                <p
                  className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
                >
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`relative p-8 ${getGlassCardClass()} rounded-2xl card-hover animate-pulse-glow hover:shadow-2xl hover:shadow-cyan-500/20`}
                >
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30">
                      <div className="text-cyan-400">{stat.icon}</div>
                    </div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                    <span className="text-cyan-400">{stat.suffix}</span>
                  </div>
                  <div
                    className={`${isDarkMode ? "text-gray-300" : "text-gray-800"} font-medium mb-2`}
                  >
                    {stat.label}
                  </div>
                  {stat.change && (
                    <div className="flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-emerald-400 mr-1" />
                      <span className="text-sm text-emerald-400 font-semibold">
                        {stat.change}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Achievements Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Awards & Recognition
              </span>
            </h2>
            <p
              className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"} max-w-2xl mx-auto`}
            >
              Celebrating excellence and innovation in construction technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group relative p-6 ${getGlassCardClass()} rounded-2xl card-hover animate-float`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3
                  className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2 text-center`}
                >
                  {achievement.title}
                </h3>
                <p
                  className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-700"} text-center`}
                >
                  {achievement.organization}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Future Services
              </span>
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}
            >
              Revolutionary construction solutions powered by cutting-edge
              technology and sustainable innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 ${getGlassCardClass()} rounded-3xl card-hover hover:shadow-2xl hover:shadow-cyan-500/20`}
              >
                <div
                  className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    service.color === "cyan"
                      ? "bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
                      : service.color === "purple"
                        ? "bg-gradient-to-br from-purple-500/10 to-cyan-500/10"
                        : service.color === "emerald"
                          ? "bg-gradient-to-br from-emerald-500/10 to-purple-500/10"
                          : "bg-gradient-to-br from-orange-500/10 to-purple-500/10"
                  }`}
                ></div>
                <div className="relative">
                  <div className="flex justify-between items-start mb-6">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-lg font-bold ${
                          service.color === "cyan"
                            ? "text-cyan-400"
                            : service.color === "purple"
                              ? "text-purple-400"
                              : service.color === "emerald"
                                ? "text-emerald-400"
                                : "text-orange-400"
                        }`}
                      >
                        {service.metric}
                      </div>
                      <div className="flex items-center text-emerald-400 text-sm">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {service.growth}
                      </div>
                    </div>
                  </div>
                  <h3
                    className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-4`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed mb-6`}
                  >
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 ${isDarkMode ? "bg-white/10" : "bg-gray-100"} rounded-full text-sm border transition-colors ${
                          service.color === "cyan"
                            ? "text-cyan-400 border-cyan-400/20 hover:bg-cyan-400/10"
                            : service.color === "purple"
                              ? "text-purple-400 border-purple-400/20 hover:bg-purple-400/10"
                              : service.color === "emerald"
                                ? "text-emerald-400 border-emerald-400/20 hover:bg-emerald-400/10"
                                : "text-orange-400 border-orange-400/20 hover:bg-orange-400/10"
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button
                    className={`flex items-center font-semibold group/btn transition-colors ${
                      service.color === "cyan"
                        ? "text-cyan-400 hover:text-cyan-300"
                        : service.color === "purple"
                          ? "text-purple-400 hover:text-purple-300"
                          : service.color === "emerald"
                            ? "text-emerald-400 hover:text-emerald-300"
                            : "text-orange-400 hover:text-orange-300"
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <Project
        activeProject={activeProject}
        setActiveProject={setActiveProject}
        isDarkMode={isDarkMode}
        getGlassCardClass={getGlassCardClass}
        defaultItemsPerPage={3}
      />

      {/* Technology Section */}
      <section id="technology" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Innovation Since 1999
                </span>
              </h2>
              <p
                className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-8 leading-relaxed`}
              >
                At CB Construction, we're not just building structures—we're
                architecting the future. Our integration of artificial
                intelligence, sustainable technologies, and smart systems
                creates buildings that adapt, learn, and evolve.
              </p>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="p-3 bg-emerald-500/20 rounded-full border border-emerald-400/30 mr-4 group-hover:bg-emerald-500/30 transition-colors">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <span
                      className={`${isDarkMode ? "text-white" : "text-gray-800"} font-semibold`}
                    >
                      AI-Powered Building Management
                    </span>
                    <p
                      className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
                    >
                      Intelligent systems that optimize energy, security, and
                      comfort
                    </p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-cyan-500/20 rounded-full border border-cyan-400/30 mr-4 group-hover:bg-cyan-500/30 transition-colors">
                    <CheckCircle className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <span
                      className={`${isDarkMode ? "text-white" : "text-gray-800"} font-semibold`}
                    >
                      Sustainable Technology Integration
                    </span>
                    <p
                      className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
                    >
                      Carbon-neutral solutions with renewable energy systems
                    </p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-purple-500/20 rounded-full border border-purple-400/30 mr-4 group-hover:bg-purple-500/30 transition-colors">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <span
                      className={`${isDarkMode ? "text-white" : "text-gray-800"} font-semibold`}
                    >
                      Smart City Integration
                    </span>
                    <p
                      className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
                    >
                      Buildings that connect and communicate with urban
                      infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className={`relative p-8 ${isDarkMode ? "bg-white/5" : "bg-white/80"} backdrop-blur-sm rounded-3xl border ${isDarkMode ? "border-white/10" : "border-black/10"}`}
              >
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                  alt="Future construction technology"
                  className="rounded-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact isDarkMode={isDarkMode} />

      {/* AI ChatBot */}
      <ChatBot isDarkMode={isDarkMode} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-row space-x-4">
        {/* Call Button */}
        <a
          href="tel:+778811562"
          className="group block p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          aria-label="Call +778811562"
        >
          <Phone className="w-6 h-6 text-white group-hover:animate-pulse" />
        </a>
        {/* Email Button */}
        <a
          href="mailto:parakramawork@gmail.com"
          className="group block p-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          aria-label="Email parakramawork@gmail.com"
        >
          <Mail className="w-6 h-6 text-white group-hover:animate-bounce" />
        </a>
      </div>

      {/* Footer */}
      <footer
        className={`py-16 relative border-t ${isDarkMode ? "border-white/10" : "border-orange-200/40"}`}
        style={
          !isDarkMode
            ? {
                borderTopColor: "rgba(251, 146, 60, 0.2)",
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(254, 243, 226, 0.3) 100%)",
              }
            : {}
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <HardHat className="w-10 h-10 text-cyan-400 mr-3" />
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    CB Construction
                  </h3>
                  <p
                    className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Future Building Solutions
                  </p>
                </div>
              </div>
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-6 max-w-md`}
              >
                Pioneering the future of construction with smart technologies,
                sustainable solutions, and innovative design that transforms how
                we build and live.
              </p>
            </div>

            <div>
              <h4
                className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-800"} mb-6`}
              >
                Future Services
              </h4>
              <ul
                className={`space-y-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Smart Buildings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    AI Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Sustainable Tech
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Digital Infrastructure
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-800"} mb-6`}
              >
                Innovation Hub
              </h4>
              <ul
                className={`space-y-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Partnerships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`border-t ${isDarkMode ? "border-white/10" : "border-black/10"} mt-12 pt-8 text-center`}
          >
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              &copy; 2025 CB Construction Sri Lanka. Building Tomorrow, Today.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
