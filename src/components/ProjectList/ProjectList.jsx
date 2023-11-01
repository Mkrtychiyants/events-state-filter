import React from 'react';
import { ProjectItem } from '../ProjectItem';

export const ProjectList = (props) => {
    const { projects } = props

    return (
        <>
            <ul className='projectsUl'>
                {projects.map((prjctItm) => (
                    
                    <ProjectItem key={prjctItm} project={prjctItm} />
                ))}
            </ul>
        </>


    )
}
// 