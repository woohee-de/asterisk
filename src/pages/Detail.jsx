import MainContainer from '../components/layout/MainContainer';
import MainSidebar from '../components/layout/MainSidebar';

import { useParams } from 'react-router-dom';
import projects from '../data/projects';

function Detail() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);

  return (
    <div className="main__layout">
      <MainSidebar>
        <h2 className="main-sidebar__title" aria-hidden="true">
          {project.title}
        </h2>
        <div className="detail-info">
          <dl className="detail-info__dl">
            <dt class="detail-info__dd">client</dt>
            <dd class="detail-info__dt">{project.client}</dd>
          </dl>

          <dl className="detail-info__dl">
            <dt class="detail-info__dd">year</dt>
            <dd class="detail-info__dt">{project.period}</dd>
          </dl>

          <dl className="detail-info__dl">
            <dt class="detail-info__dd">category</dt>
            <dd class="detail-info__dt">{project.category}</dd>
          </dl>
          <p className="detail-info__desc">{project.description}</p>
        </div>
      </MainSidebar>
      <MainContainer>
        <div className="detail">
          {project.images.map((imgSrc, idx) => (
            <img className='detail__img'
              key={idx}
              src={imgSrc}
              alt={`${project.title} 이미지 ${idx + 1}`}
            />
          ))}
        </div>
      </MainContainer>
    </div>
  );
}

export default Detail;
