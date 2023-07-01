import classes from './about.module.scss';
import { useEffect } from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.about} id='about'>
      <div className={classes.container}>
        <h2 data-aos='slide-right'>About me</h2>

        <div className={classes.row}>
          <div className={classes.columnLeft} data-aos='fade-right'>
            <h3>
            Greetings! I am Fafis, an Unreal developer, trainer and visionary in interactive design. With over 6 years of expertise in crafting immersive solutions for simulations, game design, and architectural visualization, I have traversed the global landscape.
             Guided by a degree in architecture and a diploma in web development,
             I am adept at creating extraordinary experiences that transcend industry boundaries. 
            </h3>
            <p>
            With an inspired perspective, I envision a future where interactive technology transcends boundaries, igniting limitless creativity and transforming industries with captivating and immersive experiences.
            </p>
          </div>

          <div className={classes.columnRight}>
            <div className={classes.imageContainer}>
              <Image
                src='/images/fafis_avatar.webp'
                width={600}
                height={600}
                alt='profile-pic'
                data-aos='fade-left'
              />
            </div>
            <div className={classes.quote} data-aos='fade-right'>
              &quot;Imagine a future filled with goodness..!&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
