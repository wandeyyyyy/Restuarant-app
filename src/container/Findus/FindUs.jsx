import React from 'react';
import { images } from '../../constants';

import { SubHeading } from '../../components';
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
<div className='app__wrapper_info'>
<SubHeading title='Contact'/>
<h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
<div className='app__wrapper_contact'>
<p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
<p className='p__cormorant' style={{color: '#dccca87', margin: '2rem 0'}}>Opening Hours</p>
<p className='p__opensans' style={{marginTop: '2rem'}}>Mon - Fri: 10:00 am - 02:00 am</p>
<p className='p__opensans' style={{marginTop: '2rem'}}>Sat - Sun: 10:00 am - 03:00 am</p>
<button type='button' className='custom__button' style={{marginTop: '2rem'}}>View More</button>
</div>
</div>
<div className='app__wrapper_img'>
  <img src={images.findus} alt="" />

</div>
  </div>
);

export default FindUs;
