import { useParams } from 'react-router-dom';
import MainContainer from '@/components/layout/MainContainer';
import MainSidebar from '@/components/layout/MainSidebar';

import projects from '@/data/projects';

function Detail() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);

  return (
    <div className="detail">
      <div className="detail-head inner-text">
        <h2 className="detail-title">{project.title}</h2>

        <div className="detail-infos">
          <dl className="detail-infos__dl">
            <dt className="detail-infos__dt">co.</dt>
            <dd className="detail-infos__dd">{project.client}</dd>
          </dl>

          <dl className="detail-infos__dl">
            <dt className="detail-infos__dt">year</dt>
            <dd className="detail-infos__dd">{project.year}</dd>
          </dl>

          <dl className="detail-infos__dl">
            <dt className="detail-infos__dt">tool</dt>
            <dd className="detail-infos__dd">{project.tool}</dd>
          </dl>

          <dl className="detail-infos__dl">
            <dt className="detail-infos__dt">role</dt>
            <dd className="detail-infos__dd">{project.role}</dd>
          </dl>
        </div>
      </div>

      <div className="detail-main">
        <img className="detail-main__img" src={project.thum} alt="" />

        <p className="detail__intro inner-text">{project.intro}</p>
      </div>

      <div className="detail-content">
        <div className="inner">
          {project.images?.solo?.map(({ src, title, desc, long }, idx) => {
            const isNarrow = project.narrowSections?.includes(idx);
            return (
              <div
                className={`detail-sec ${isNarrow ? 'detail-sec--narrow' : ''}`}
                key={`solo-${idx}`}
              >
                {long ? (
                  <img
                    className="detail__img"
                    src={src}
                    alt={`${project.title} 이미지 ${idx + 1}`}
                  />
                ) : (
                  <div className="detail__img-wrap">
                    <img
                      className="detail__img"
                      src={src}
                      alt={`${project.title} 이미지 ${idx + 1}`}
                    />
                  </div>
                )}

                {title && desc && (
                  <div className="detail-sec__desc inner-text">
                    <h3 className="detail-sec__desc-title">{title}</h3>
                    <p className="detail-sec__desc-p">{desc}</p>
                  </div>
                )}
              </div>
            );
          })}

          {project.images?.flex &&
            [...Array(Math.ceil(project.images.flex.length / 2))].map(
              (_, groupIdx) => {
                const startIdx = groupIdx * 2;
                const group = project.images.flex.slice(startIdx, startIdx + 2);
                return (
                  <div
                    className="detail-sec detail-sec--flex"
                    key={`flex-${groupIdx}`}
                  >
                    {group.map(({ src, dialogView }, idx) => (
                      <img
                        key={`flex-${startIdx + idx}`}
                        className="detail__img"
                        data-dialog={dialogView ? true : undefined}
                        data-hover="true"
                        src={src}
                        alt={`${project.title} 이미지 ${startIdx + idx + 1}`}
                      />
                    ))}
                  </div>
                );
              },
            )}

          {/* <div className="detail-sec">
            <img
              className="detail__img"
              src="/images/markettoo-admin/pj-markettoo-admin-2.jpg"
              alt=""
            />
            <div className="detail-sec__desc inner-text">
              <h3 className="detail-sec__desc-title">
                IA : 사용자 중심 정보구조 설계
              </h3>
              <p className="detail-sec__desc-p">
                ‘복잡한 기능이 많다’가 아니라, ‘필요한 기능만 쉽게 쓸 수 있다’는
                인식을 심어주는 UI/UX 구조를 설계하고자 했습니다. 타겟층의
                사용성 특성을 반영해, 정보구조를 최소화하고 가장 자주 사용하는
                기능에 쉽게 접근할 수 있도록 1Depth 중심의 메뉴 구조로
                설계했습니다. 또한 기능 구분을 '홈', '상품', '주문', '문자' 등
                명확하게 분류하고 용어를 단순화하여 핵심 기능을 강조했습니다.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Detail;
