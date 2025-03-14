import React, { useEffect, useRef, useState } from "react";

const titless = [
  { name: "ewaa abu dhabi", _id: "ewaa" },
  { name: "scope investment", _id: "scope" },
  { name: "market i research", _id: "market" },
  { name: "raw coffee company", _id: "coffee" },
  { name: "freshly meals", _id: "freshly" },
  { name: "ddy autism center", _id: "ddy" },
  { name: "arabian knights", _id: "arabian" },
  { name: "lvmh fragrances", _id: "lvmh" },
];

const ProjectList = ({ activeMenu, handleItemClick }) => {
  const [loading, setLoading] = useState(true);

  const projects = useRef();

  const getProjects = async () => {
    try {
      setLoading(() => true);
      const list = await fetch("/api/projects").then((r) => r.json());
      console.log("huzefa check", list);

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
        <span>
          <a>Loading... &#47;</a>
        </span>
      </>
    );
  }

  const gotError = !loading && projects.current === undefined;
  if (gotError) {
    return <></>;
  }

  return (
    <>
      {projects.current.map(({ name, _id }, i) => {
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
