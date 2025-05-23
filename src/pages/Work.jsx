import { Link } from 'react-router-dom';

import projects from '../data/projects';
function Work() {
  return (
    <>
      <p className="catchphrase">
        Symbol is ASTERISK, means a designer
        <br />
        who knows What is IMPORTANT
      </p>
      <h2 className="main__title hidden">Work</h2>

      <div className="work">
        <ul className="work__list">
          {projects.map((project) => (
            <li key={project.id} className="project">
              <Link to="/detail" className="nav__link">
                <figure>
                  <img
                    src={project.thum}
                    alt={project.title}
                    className="project__thum"
                  />
                  <figcaption className="project__title">
                    <h3 className="project__name">{project.title}</h3>
                    <span className="project__date">{project.year}</span>
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Work;
