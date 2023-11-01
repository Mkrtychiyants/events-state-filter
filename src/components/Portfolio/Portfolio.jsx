import React from 'react'
import { useState } from 'react';
import { Toolbar } from '../Toolbar';
import { ProjectList } from '../ProjectList'

let filteredProjects = [];

export const Portfolio = (props) => {
  let { projectsData } = props
  const initialState = { selected: "All" };
  const [filterState, setActiveFilter] = useState(initialState);

  const onSelectFilter = (event) => {
    setActiveFilter({ selected: event.target.innerText });
  };
  filteredProjects = projectsData.filter((project) => project.category === filterState.selected);
  return (
    <>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={filterState.selected}
        onSelectFilter={onSelectFilter} />
      {filterState.selected === "All" ? <ProjectList projects={projectsData} ></ProjectList> : <ProjectList projects={filteredProjects} ></ProjectList>}
    </>
  )
}