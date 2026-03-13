import { Link } from 'react-router-dom';
import MainContainer from '@/components/layout/MainContainer';
import MainSidebar from '@/components/layout/MainSidebar';

import projects from '@/data/projects';

function Work() {
  return (
    <>
      <div className="main-section">
        <p className="slogun">
          Symbol is ASTERISK, means a designer
          <br />
          who knows What is IMPORTANT
        </p>
      </div>

      <div className="main__layout">
        <MainSidebar>
          {/* <h2 className="main-sidebar__title main-sidebar__title--mo-hidden">
            WORK
          </h2> */}

          <div className="main-sidebar__nav">
            <nav className="sidebar-nav" aria-label="메인메뉴">
              <ul className="sidebar-nav__list">
                <li className="sidebar-nav__item">
                  <Link to="/" className="sidebar-nav__link" data-hover="true">
                    WORK
                  </Link>
                </li>
                <li className="sidebar-nav__item">
                  <Link to="/contact" className="sidebar-nav__link" data-hover="true">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </MainSidebar>
        <MainContainer>
          <div className="work">
            <ul className="work__list">
              {projects.map((project) => (
                <li key={project.id} className="project">
                  <Link
                    to={`/detail/${project.id}`}
                    className="project__link"
                    data-hover="true"
                  >
                    <figure className="project__figure">
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
