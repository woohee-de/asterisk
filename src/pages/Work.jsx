import { Link } from 'react-router-dom';
import MainContainer from '../components/layout/MainContainer';
import MainSidebar from '../components/layout/MainSidebar';

import projects from '../data/projects';

function Work() {
  return (
    <>
      <div className="main-section">
        <p className="catchphrase">
          Symbol is ASTERISK, means a designer
          <br />
          who knows What is IMPORTANT
        </p>
      </div>

      <div className="main__layout">
        <MainSidebar>
          <h2 className="main-sidebar__title">
            WORK
          </h2>
        </MainSidebar>
        <MainContainer>
          <div className="work">
            <ul className="work__list">
              {projects.map((project) => (
                <li key={project.id} className="project">
                  <Link to={`/detail/${project.id}`} className="project__link">
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
        </MainContainer>
      </div>
    </>
  );
}

export default Work;
