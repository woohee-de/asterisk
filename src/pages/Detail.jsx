import { useParams } from 'react-router-dom';
import MainContainer from '@/components/layout/MainContainer';
import MainSidebar from '@/components/layout/MainSidebar';

import projects from '@/data/projects';


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
            <dt className="detail-info__dt">client</dt>
            <dd className="detail-info__dd">{project.client}</dd>
          </dl>

          <dl className="detail-info__dl">
            <dt className="detail-info__dt">year</dt>
            <dd className="detail-info__dd">{project.period}</dd>
          </dl>

          <dl className="detail-info__dl">
            <dt className="detail-info__dt">category</dt>
            <dd className="detail-info__dd">{project.category}</dd>
          </dl>
          <p className="detail-info__desc">{project.description}</p>
        </div>
      </MainSidebar>
      <MainContainer>
        <div className="detail">
          {project.images?.solo?.map(({ src, dialogView }, idx) => (
            <div className="detail__img-wrap" key={`solo-${idx}`}>
              <img className='detail__img'
                data-dialog={dialogView ? true : undefined}
                src={src}
                alt={`${project.title} 이미지 ${idx + 1}`}
              />
            </div>
          ))}

          {project.images?.flex &&
            [...Array(Math.ceil(project.images.flex.length / 2))].map((_, groupIdx) => {
              const startIdx = groupIdx * 2;
              const group = project.images.flex.slice(startIdx, startIdx + 2);
              return (
                <div className="detail__img-wrap detail__img-wrap--flex" key={`flex-${groupIdx}`}>
                  {group.map(({ src, dialogView }, idx) => (
                    <img
                      key={`${startIdx + idx}`}
                      className="detail__img"
                      data-dialog={dialogView ? true : undefined}
                      data-hover="true"
                      src={src}
                      alt={`${project.title} 이미지 ${startIdx + idx + 1}`}
                    />
                  ))}
                </div>
              );
            })}
        </div>
      </MainContainer>
    </div>
  );
}

export default Detail;
