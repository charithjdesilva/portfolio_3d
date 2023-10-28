import React from "react";
import { github, www } from "../assets";

const ProjectModal = ({ isOpen, project, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // Check if the click occurred outside the modal content
    if (e.target.classList.contains("modal-overlay")) {
      onClose(); // Close the modal
    }
  };

  const modalStyle = {
    height: "75vh", // Set the modal's height to 75% of the viewport height
    width: "75vw", // Set the modal's width to 75% of the viewport width
  };

  return (
    <div
      className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="container mx-auto" style={modalStyle}>
        <div className="modal-content p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1 sm:col-span-1 flex items-center justify-center">
            {/* Apply responsive class to adjust image width on small screens */}
            <img
              src={project.image}
              alt={project.name}
              className="img-fluid inline max-w-30vw sm:max-w-70"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 flex flex-col items-center justify-center">
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
                className="black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer me-1 hover:bg-blue-500"
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
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
