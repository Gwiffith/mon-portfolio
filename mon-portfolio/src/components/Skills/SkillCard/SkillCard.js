import React from 'react';
import SkillRating from '../SkillRating/SkillRating';
import './SkillCard.scss';

function SkillCard({ name, icon, level }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        {icon}
      </div>
      <div className="skill-info">
        <h3>{name}</h3>
        <SkillRating level={level} />
      </div>
    </div>
  );
}

export default SkillCard;
