import React from 'react';
import { images, data } from '../../constants';

import { SubHeading } from '../../components';
import './Laurels.css';



const AwardCard = ({award: {imgUrl, title, subtitle}}) => {


return(
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      <p className='p__cormorant' >{subtitle}</p>

    </div>
  </div>
)
  
}


const Laurels = () => (
  <div className='app__bg app__wrapper flex__center section__padding' id='awards'>
   <div className='app_wrapper_info'>
<SubHeading title='Awards & recognition'/>
<h1 className='headtext__cormorant'>Our Laurels</h1>
<div className='app__laurels_awards'>
{data.awards.map((award) => <AwardCard award={award} key={award.title}/>
)}
</div>
   </div>
   <div className='app_wrapper_img'>
<img src={images.laurels} alt="" className='img_award' />
</div>
  </div>
);

export default Laurels;
