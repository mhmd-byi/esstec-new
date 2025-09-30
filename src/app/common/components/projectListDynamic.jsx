import React, { useEffect, useRef, useState } from "react";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { CarouselComponent } from "./projects/CarouselComponent";

const ProjectListDynamic = ({ activeMenu, handleItemClick, open, handleOpen }) => {
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
    const activeProjects = projects.current.filter(project => project.isProjectActive);
    const displayProjects = activeProjects.slice(0, 7);
    
    return (
      <>
        {displayProjects.map(({ name, _id }, i) => {
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
        {activeProjects.length > 7 && (
          <span>
            <a
              href="/archive"
              className="cursor-pointer hover:line-through"
            >
              Archive &#47;
            </a>
          </span>
        )}
      </>
    );
  }

  if (isMobile) {
    const activeProjects = projects.current.filter(project => project.isProjectActive);
    const displayProjects = activeProjects.slice(0, 7);
    
    return (
      <>
        {displayProjects.map((project, i) => {
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
        {activeProjects.length > 7 && (
          <span className="text-right">
            <a
              href="/archive"
              className="cursor-pointer hover:line-through text-right"
            >
              Archive &#47;
            </a>
          </span>
        )}
      </>
    );
  }
};

export default ProjectListDynamic;
