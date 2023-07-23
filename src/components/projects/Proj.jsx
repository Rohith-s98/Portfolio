import React from 'react';
import './Proj.css';
import IMG1 from '../../assets/IMG1.png';
import IMG2 from '../../assets/IMG2.png';
import IMG3 from '../../assets/cloud service website.png';
import IMG4 from '../../assets/website-accessibility-tester.png';
import IMG5 from '../../assets/Bootstrap Webdev bootcamp.png';
import IMG6 from '../../assets/ecommerce.png';

const data = [
  {
    id:1,
    image:IMG1,
    title:'BookList App using Vanilla javascript',
    github:'https://github.com/Rohith-s98/Book-List/tree/master',
    demo:'https://rohith-s98.github.io/Book-List/'
  },
  {
    id:2,
    image:IMG2,
    title:'Clone of Netflix App',
    github:'https://github.com/Rohith-s98/Netflix-Clone',
    demo:'https://rohith-s98.github.io/Netflix-Clone/'
  },
  {
    id:3,
    image:IMG3,
    title:'Static WebSite for Cloud Hosting Service',
    github:'',
    demo:'https://rohith-s98.github.io/static-responsive-cloud-host/'
  },
  {
    id:4,
    image:IMG4,
    title:'Website Accessibility Tester',
    github:'',
    demo:''
  },
  {
    id:5,
    image:IMG5,
    title:'BootCamp for Web Development',
    github:'',
    demo:'https://rohith-s98.github.io/Bootstrap-Web_Dev/'
  },
  {
    id:6,
    image:IMG6,
    title:'E Commerce Website',
    github:'',
    demo:''
  },
]

function Proj() {
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Project</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,demo})=>{
            return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={demo} className='btn btn-primary ' target='_blank'>Website</a>
              </div>
          </article>)
          })
        }
        
      </div>
    </section>
  )
};

export default Proj



// return (
//   <section id='projects'>
//     <h5>My Recent Works</h5>
//     <h2>Project</h2>
//     <div className='container portfolio__container'>
//       <article className='portfolio__item'>
//         <div className='portfolio__item-image'>
//           <img src={IMG1} alt=''></img>
//         </div>
//         <h3>Blog about Web development Course</h3>
//         <div className='portfolio__item-cta'>
//         <a href="https://github.com" className='btn '>Github</a>
//         <a href="https://github.com" className='btn btn-primary ' target='_blank'>Live Demo</a>
//         </div>
//       </article>
//       <article className='portfolio__item'>
//         <div className='portfolio__item-image'>
//           <img src={IMG2} alt=''></img>
//         </div>
//         <h3>Indian State and Capital Search</h3>
//         <div className='portfolio__item-cta'>
//         <a href="https://github.com" className='btn '>Github</a>
//         <a href="https://github.com" className='btn btn-primary ' target='_blank'>Live Demo</a>
//         </div>
//       </article>
//       <article className='portfolio__item'>
//         <div className='portfolio__item-image'>
//           <img src={IMG3} alt=''></img>
//         </div>
//         <h3>Book List App</h3>
//         <div className='portfolio__item-cta'>
//         <a href="https://github.com" className='btn '>Github</a>
//         <a href="https://github.com" className='btn btn-primary ' target='_blank'>Live Demo</a>
//         </div>
//       </article>
//     </div>
//   </section>
// )