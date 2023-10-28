import React from "react";
import { github, www } from "../assets";
import { motion } from "framer-motion";

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const ProjectModal = ({ isOpen, project, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // Check if the click occurred outside the modal content
    if (e.target.classList.contains("modal-overlay")) {
      onClose(); // Close the modal
    }
  };

  const modalStyle = {
    height: "75vh",
    width: "75vw",
  };

  const modalContentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const mobileModalStyle = {
    height: "100vh",
    width: "100vw",
    padding: "20px",
  };

  return (
    <motion.div
      className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center"
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      onClick={handleOverlayClick}
    >
      <div className="container mx-auto" style={window.innerWidth < 640 ? mobileModalStyle : modalStyle}>
        <motion.div
          className="modal-content p-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={modalContentVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3 }}
          style={window.innerWidth < 640 ? { maxHeight: "90vh", overflowY: "auto" } : null}
        >
          <div className="col-span-1 sm:col-span-1 flex items-center justify-center">
            <img
              src={project.image}
              alt={project.name}
              className="img-fluid inline max-w-100"
              style={window.innerWidth < 640 ? { height: "auto" } : null}
            />
          </div>
          <div className="col-span-1 sm:col-span-1 flex flex-col items-center justify-center overflow-y-auto">
            <div className="flex flex-row mb-2">
              <div
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer me-1 hover:bg-blue-500"
              >
                <img
                  src={www}
                  alt="live website"
                  className="w-100 h-100 object-contain"
                />
              </div>
              <div
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer me-1 hover-bg-blue-500"
              >
                <img
                  src={github}
                  alt="live website"
                  className="w-100 h-100 object-contain"
                />
              </div>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
            <button className="modal-close-button mt-4" onClick={onClose}>
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectModal;
