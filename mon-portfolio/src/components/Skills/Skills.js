import React from "react"; 
import SkillCard from './SkillCard/SkillCard';
import { FaHtml5, FaJs, FaReact, FaNode } from 'react-icons/fa';
import { MdCss, MdHtml } from "react-icons/md";
import './Skills.scss';

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2>Mes compétences</h2>
            <div className="skills-list">
                <SkillCard name="HTML" icon={<MdHtml />} level={3} />
                <SkillCard name="CSS" icon={<MdCss />} level={3} />
                <SkillCard name="JavaScript" icon={<FaJs />} level={2} />
                <SkillCard name="React" icon={<FaReact />} level={2} />
                <SkillCard name="NodeJS" icon={<FaNode />} level={1} />
            </div>
        </section>
    );
}

export default Skills;
