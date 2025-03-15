import React, { useEffect, useRef, useState } from "react";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { CarouselComponent } from "./projects/CarouselComponent";

const ProjectList = ({ activeMenu, handleItemClick, open, handleOpen }) => {
  const isDesktop = [activeMenu, handleItemClick].every((a) => a !== undefined);
  const isMobile = [open, handleOpen].every((a) => a !== undefined);

  const [loading, setLoading] = useState(true);

  const projects = useRef();

  const getProjects = async () => {
    try {
      setLoading(() => true);
      const list = await fetch("/api/projects").then((r) => r.json());

      // setProjectsData(() => list);
      projects.current = list;
      setLoading(() => false);
    } catch (error) {
      console.error("projectList err", error);
      setLoading(() => false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (!isDesktop && !isMobile) {
    return null;
  }

  if (loading) {
    return (
      <>
        <span>Loading... &#47;</span>
      </>
    );
  }

  const gotError = !loading && projects.current === undefined;
  if (gotError) {
    return <></>;
  }

  if (isDesktop) {
    return (
      <>
        {projects.current.map(({ name, _id, isProjectActive }, i) => {
          if (!isProjectActive) {
            return null;
          }

          return (
            <React.Fragment key={i}>
              <span>
                <a
                  className={`cursor-pointer hover:line-through ${
                    activeMenu === _id && "line-through"
                  }`}
                  onClick={() => handleItemClick(_id)}
                >
                  {name} &#47;
                </a>
              </span>
            </React.Fragment>
          );
        })}
      </>
    );
  }

  if (isMobile) {
    return (
      <>
        {projects.current.map((project, i) => {
          if (!project.isProjectActive) {
            return null;
          }

          const _id = i + 5;
          return (
            <React.Fragment key={i}>
              <Accordion open={open === _id} className="text-right">
                <span onClick={() => handleOpen(_id)} className="text-right">
                  <a
                    className={`cursor-pointer hover:line-through text-right ${
                      open === _id && "line-through"
                    }`}
                  >
                    {project.name} &#47;
                  </a>
                </span>
                <AccordionBody>
                  <div className="border-4 border-text-primary w-full min-h-72 max-h-72 rounded-2xl flex justify-center">
                    <CarouselComponent project={project} />
                  </div>
                </AccordionBody>
              </Accordion>
            </React.Fragment>
          );
        })}
      </>
    );
  }
};

export default ProjectList;
