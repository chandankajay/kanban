import React from 'react';
import CancelledIcon from '../assets/icons_FEtask/Cancelled.svg';
import DoneIcon from '../assets/icons_FEtask/Done.svg';
import DownIcon from '../assets/icons_FEtask/down.svg';
import HighPriorityIcon from '../assets/icons_FEtask/HighPriority.svg';
import InProgressIcon from '../assets/icons_FEtask/in-progress.svg';
import LowPriorityIcon from '../assets/icons_FEtask/lowpriority.svg';
import MediumPriorityIcon from '../assets/icons_FEtask/MediumPriority.svg';
import NoPriorityIcon from '../assets/icons_FEtask/No-priority.svg';
import UrgentPriorityIcon from '../assets/icons_FEtask/UrgentPriorityColour.svg';
import UrgentPriorityGreyIcon from '../assets/icons_FEtask/UrgentPriorityGrey.svg';
import Avatar from './Avatar'; // Avatar component

const getIcon = (statusOrPriority, type, name = null) => {
  switch (statusOrPriority) {
    case 'cancel':
      return <img src={CancelledIcon} alt="Cancelled" />;
    case 'done':
      return <img src={DoneIcon} alt="Done" />;
    case 'down':
      return <img src={DownIcon} alt="Down" />;
    case 'high':
      return <img src={HighPriorityIcon} alt="High Priority" />;
    case 'inprogress':
      return <img src={InProgressIcon} alt="In Progress" />;
    case 'low':
      return <img src={LowPriorityIcon} alt="Low Priority" />;
    case 'medium':
      return <img src={MediumPriorityIcon} alt="Medium Priority" />;
    case 'no':
      return <img src={NoPriorityIcon} alt="No Priority" />;
    case 'urgent':
      return <img src={UrgentPriorityIcon} alt="Urgent Priority" />;
    case 'urgentGrey':
      return <img src={UrgentPriorityGreyIcon} alt="Urgent Priority Grey" />;
    
    // If type is 'avatar', return Avatar component with the name
    case 'avatar':
      return <Avatar name={name} />;

    default:
      return null;
  }
};

export default getIcon;
