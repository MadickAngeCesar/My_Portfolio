/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images } from '../../constants';

const abouts = [ 
  {title: 'Web Designer', description: 'Working with Figma, Canva and Wordpress to deliver high quality designs.', imgUrl:images.about01},
  {title: 'Fullstack Developer', description: 'Working with React at Frontend. Node.js, Flask or Django for Backend.  ', imgUrl:images.about04},
  {title: 'Mobile Developer', description: 'I work with Flutter or ReactNative to develop crossplatform mobile app.', imgUrl:images.about03},
  {title: 'Desktop Development', description: 'I am an adaptable and flexible Desktop app developer.', imgUrl:images.about02}
];

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know that <span>Well Design</span> and <span>Good Performance</span> Software <br />Means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
