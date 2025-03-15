import React, { useEffect, useRef, useState } from "react";

const ProjectList = ({ activeMenu, handleItemClick }) => {
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
};

export default ProjectList;
