import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCloudUploadAlt,
  FaChartLine,
  FaBullseye,
  FaDatabase,
  FaRobot,
  FaBrain,
  FaSearch,
  FaBookOpen,
} from "react-icons/fa";

const projects = [
  {
    title: "Cloud Computing with AWS SageMaker",
    tech: ["AWS", "SageMaker", "XGBoost", "HPO"],
    icon: FaCloudUploadAlt,
    pun: "Deployed ML models like a cloud-native wizard — because even clouds need magic! ☁️✨",
  },
  {
    title: "Direct Marketing with SageMaker XGBoost",
    tech: ["AWS", "XGBoost", "Marketing"],
    icon: FaChartLine,
    pun: "Tuned models so well, even your inbox is impressed. Spam? Nope, smart marketing! 📬🤖",
  },
  {
    title: "Sales Forecasting Model",
    tech: ["Python", "XGBoost", "Pandas"],
    icon: FaChartLine,
    pun: "Predicting sales like a crystal ball, but with less fog and more coffee ☕🔮",
  },
  {
    title: "Data Analytics on Netflix Shows",
    tech: ["Python", "Data Analysis", "Visualization"],
    icon: FaBookOpen,
    pun: "Analyzed binge-worthy data to find what keeps you glued — better than Netflix suggestions! 📺🍿",
  },
  {
    title: "Customer Segmentation & ML Models",
    tech: ["Python", "KMeans", "RFM"],
    icon: FaBullseye,
    pun: "Segmented customers like a pro chef slices veggies — precision with a pinch of flair! 🔪🥦",
  },
  {
    title: "Deep Neural Networks & TensorFlow",
    tech: ["TensorFlow", "ANN", "DL"],
    icon: FaBrain,
    pun: "Teaching machines to think, so you can binge-watch guilt-free! 🧠🤖",
  },
  {
    title: "Penguin Classification with PyTorch",
    tech: ["PyTorch", "CNN", "Image Recognition"],
    icon: FaRobot,
    pun: "Classified penguins better than a birdwatcher with a telescope 🐧🔭",
  },
  {
    title: "Sentiment Analysis & Fake News Detection",
    tech: ["NLP", "DISTILBERT", "Text Classification"],
    icon: FaSearch,
    pun: "Detecting fake news faster than your uncle spots a conspiracy theory 🕵️‍♂️📰",
  },
  {
    title: "Big Data Spark Processing",
    tech: ["Apache Spark", "PySpark", "Big Data"],
    icon: FaDatabase,
    pun: "Processing big data faster than you say 'Shazam!' ⚡📊",
  },
  {
    title: "Customer Churn Dashboard with Power BI",
    tech: ["Power BI", "Dashboard", "Data Viz"],
    icon: FaChartLine,
    pun: "Visualizing churn like a pro referee—no one’s getting away unnoticed! 🏀👀",
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);
  const [contactHovered, setContactHovered] = useState(false);

  return (
    <>
      <main
        className="content-wrapper"
        style={{
          background: "#fff",
          minHeight: "100vh",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2rem 1rem 4rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <motion.header
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="text-4xl font-extrabold mb-2"
            style={{ color: "#6b21a8" }}
          >
            Sree Kodavanti
          </h1>
          <p
            className="text-2xl font-semibold text-center mt-2"
            style={{ color: "#7c3aed", opacity: 0.9 }}
            >
            Data Analyst | Making Data Behave with Minimal Sass 📉✨
          </p>

        </motion.header>

        {/* Projects Grid */}
        <motion.section
          className="grid md:grid-cols-2 gap-8 flex-grow"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "3rem" }}
        >
          {projects.map((project, i) => {
            const Icon = project.icon;
            const colors = [
              "from-pink-300 to-yellow-200",
              "from-purple-300 to-pink-200",
              "from-blue-300 to-purple-200",
              "from-green-300 to-blue-200",
              "from-yellow-300 to-pink-200",
            ];
            const bgGradient = colors[i % colors.length];

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  borderRadius: "1rem",
                  boxShadow:
                    "0 4px 6px rgba(107, 33, 168, 0.3), 0 1px 3px rgba(124, 58, 237, 0.2)",
                  cursor: "pointer",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  backgroundImage:
                    i % 5 === 0
                      ? "linear-gradient(to top right, #fbcfe8, #fef3c7)"
                      : i % 5 === 1
                      ? "linear-gradient(to top right, #ddd6fe, #fbcfe8)"
                      : i % 5 === 2
                      ? "linear-gradient(to top right, #93c5fd, #ddd6fe)"
                      : i % 5 === 3
                      ? "linear-gradient(to top right, #86efac, #93c5fd)"
                      : "linear-gradient(to top right, #fde68a, #fbcfe8)",
                }}
                key={project.title}
              >
                <motion.div
                  animate={{
                    y: hovered === i ? [0, -10, 0] : 0,
                  }}
                  transition={{
                    repeat: hovered === i ? Infinity : 0,
                    duration: 2,
                  }}
                  style={{
                    marginBottom: "1rem",
                    color: "white",
                    filter: "drop-shadow(0 0 4px rgba(0,0,0,0.15))",
                  }}
                >
                  <Icon size={70} color="#6b21a8" />
                </motion.div>

                <h2
                  style={{
                    fontWeight: "700",
                    marginBottom: "0.5rem",
                    color: "#6b21a8",
                    textAlign: "center",
                    textShadow: "0 0 3px rgba(124, 58, 237, 0.3)",
                  }}
                >
                  {project.title}
                </h2>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginBottom: "1rem",
                    justifyContent: "center",
                  }}
                >
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      style={{
                        backgroundColor: "rgba(255 255 255 / 0.75)",
                        color: "#4b5563",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                        boxShadow: "0 1px 2px rgb(0 0 0 / 0.05)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Thought bubble */}
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    style={{
                      position: "absolute",
                      bottom: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      marginBottom: "1rem",
                      maxWidth: "16rem",
                      backgroundColor: "rgba(255,255,255,0.95)",
                      color: "#6b21a8",
                      padding: "0.75rem 1rem",
                      borderRadius: "1rem",
                      textAlign: "center",
                      fontStyle: "italic",
                      fontWeight: "600",
                      boxShadow:
                        "0 4px 6px rgba(107, 33, 168, 0.15), 0 1px 3px rgba(124, 58, 237, 0.1)",
                      pointerEvents: "none",
                      lineHeight: "1.3rem",
                      userSelect: "none",
                      zIndex: 10,
                    }}
                  >
                    {project.pun}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-8px",
                        left: "50%",
                        transform: "translateX(-50%) rotate(45deg)",
                        width: "15px",
                        height: "15px",
                        backgroundColor: "rgba(255,255,255,0.95)",
                        boxShadow: "0 4px 6px rgba(107, 33, 168, 0.1)",
                        zIndex: -1,
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.section>

        {/* Contact Section */}
        <motion.footer
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p
            style={{
              marginBottom: "1rem",
              color: "#6b21a8",
              fontStyle: "italic",
              fontWeight: "600",
            }}
          >
            Wanna chat about data, AI, or the best pizza toppings? 🍕📊 Hit me up!
          </p>
          <motion.button
            onMouseEnter={() => setContactHovered(true)}
            onMouseLeave={() => setContactHovered(false)}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open("mailto:sree.manasa99@gmail.com")}
            style={{
              border: "2px solid #6b21a8",
              borderRadius: "8px",
              padding: "0.75rem 2rem",
              fontWeight: "700",
              cursor: "pointer",
              color: contactHovered ? "#fff" : "#6b21a8",
              backgroundColor: contactHovered ? "#6b21a8" : "#fff",
              transition: "all 0.3s ease",
              boxShadow: contactHovered
                ? "0 4px 12px rgba(107,33,168,0.6)"
                : "none",
            }}
          >
            {contactHovered ? "sree.manasa99@gmail.com 📧" : "Contact Me 🚀"}
          </motion.button>
        </motion.footer>
      </main>
    </>
  );
}
