import React from 'react'

export const ProjectItem = (props) => {
  const { project } = props
  return (
    <>
      <li className='projectsLi'><img src={project.img} alt={project.catecory} className="projectImg"></img></li>
    </>

  )
}
