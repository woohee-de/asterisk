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
        <h2 className="detail-title">Markettoo Admin</h2>

        <div className="detail-infos">
          <dl className="detail-infos__dl">
            <dt className="detail-infos__dt">co.</dt>
            <dd className="detail-infos__dd">Dooit telecom</dd>
          </dl>

          <dl className="detail-infos__dl">
            <dt className="detail-infos__dt">year</dt>
            <dd className="detail-infos__dd">2024</dd>
          </dl>

          <dl className="detail-infos__dl">
            <dt className="detail-infos__dt">tool</dt>
            <dd className="detail-infos__dd">Figma</dd>
          </dl>

          <dl className="detail-infos__dl">
            <dt className="detail-infos__dt">role</dt>
            <dd className="detail-infos__dd">UX/UI Design (100%)</dd>
          </dl>
        </div>
      </div>

      <div className="detail-main">
        <img
          className="detail-main__img"
          src="/images/markettoo-admin/pj-markettoo-admin-1.jpg"
          alt=""
        />

        <p className="detail__intro inner-text">
          마켓또는 전통시장과 동네마트를 위한 지역 밀착형 커머스 플랫폼입니다.
          이번 프로젝트는 점주를 위한 신규 관리자 웹사이트를 설계하는 것으로,
          핵심 목표는 디지털 사용에 익숙하지 않은 중장년층 운영자도 쉽게 사용할
          수 있는 구조를 만드는 것이었습니다. 또한, 기존에 두잇텔레콤이 별도로
          운영하던 웹 문자발송 서비스를 자연스럽게 통합하여 기존 고객을
          자연스럽게 유입시키는 전략이 필요했습니다.
          <br />
          <br />
          “사용자들이 문자도 보내고, 상품도 등록하고, 매출도 확인할 수 있는 관리
          시스템이 필요해요. 너무 복잡하지 않고, 처음 보는 사람도 쉽게 쓸 수
          있었으면 좋겠어요.” 해당 니즈를 바탕으로 크게 3가지 설계 방향을
          정의했습니다. 첫째, 디지털에 익숙하지 않은 중장년층 관리자도 빠르게
          익숙해질 수 있도록 단순하고 직관적인 정보 구조(IA)를 설계했습니다.
          둘째, 마켓또의 브랜드 이미지에 맞춰 균형 잡힌 시각적 톤과 일관된 UI를
          구성했습니다. 셋째, 기존 문자 발송 서비스를 사용하던 고객의 이탈을
          방지하기 위해 기능, 용어, 구조를 가능한 한 그대로 유지하면서도 UI
          측면에서 통합했습니다.
          <br />
          디자이너 1명, 개발자 1명으로 구성된 소규모 팀 프로젝트로, 초기 IA
          설계부터 UI 컴포넌트 제작, 기능 우선순위 정의 과정을 주도했습니다.
          피그마를 통해 UI 기획서 + 컴포넌트 가이드 + 디자인 시안을 함께
          문서화하여 개발 협업 효율을 극대화했습니다.
        </p>
      </div>

      <div className="detail-content">
        <div className="inner">
          <div className="detail-sec">
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
          </div>

          <div className="detail-sec">
            <img
              className="detail__img"
              src="/images/markettoo-admin/pj-markettoo-admin-3.jpg"
              alt=""
            />
          </div>

          <div className="detail-sec">
            <img
              className="detail__img"
              src="/images/markettoo-admin/pj-markettoo-admin-4.jpg"
              alt=""
            />

            <div className="detail-sec__desc inner-text">
              <h3 className="detail-sec__desc-title">
                디자인 시스템 : UX/UI 직관성 강화
              </h3>
              <p className="detail-sec__desc-p">
                레이아웃은 최소 해상도 1440px을 기준으로 제작했으며, 브라우저
                가로 사이즈가 확대되는 경우 좌측 내비게이션은 고정되고 콘텐츠
                영역만 유연하게 확장되도록 구성했습니다. 콘텐츠 영역은 반응형
                대응을 위해 12-column 그리드 시스템을 기반으로 다양한 해상도에서
                동일한 경험을 제공할 수 있도록 가변 레이아웃을 구성했습니다.
                또한, 일관된 UI 제공을 위해 디자인 시스템을 구축했습니다. 텍스트
                컬러와 인터페이스 간의 명도 대비를 고려한 컬러 시스템을 통해
                접근성도 함께 확보했습니다.
              </p>
            </div>
          </div>

          <div className="detail-sec">
            <img
              className="detail__img"
              src="/images/markettoo-admin/pj-markettoo-admin-5.jpg"
              alt=""
            />
          </div>

          <div className="detail-sec">
            <img
              className="detail__img"
              src="/images/markettoo-admin/pj-markettoo-admin-6.jpg"
              alt=""
            />

            <div className="detail-sec__desc inner-text">
              <h3 className="detail-sec__desc-title">
                문자 발송 기능 통합 및 개선
              </h3>
              <p className="detail-sec__desc-p">
                두잇텔레콤의 기존 웹 문자 플랫폼을 분석한 뒤, 기존 시스템의 사용
                흐름과 핵심 기능 (템플릿 등록, 주소록 관리, 발송 이력 확인)을
                반영하여 재구성했습니다. 기능적 연속성은 유지하되, 브랜드 일관성
                확보를 위해 UI는 마켓또 관리자 디자인 시스템에 맞게
                개선했습니다. 기존 고객이 혼란 없이 전환할 수 있도록
                용어/프로세스 구조를 유지하면서 UI를 개선했습니다.
              </p>
            </div>
          </div>

          <div className="detail-sec">
            <img
              className="detail__img"
              src="/images/markettoo-admin/pj-markettoo-admin-7.jpg"
              alt=""
            />
          </div>

          <div className="detail-sec">
            <img
              className="detail__img"
              src="/images/markettoo-admin/pj-markettoo-admin-8.jpg"
              alt=""
            />
          </div>

          <div className="detail-sec">
            <img
              className="detail__img"
              src="/images/markettoo-admin/pj-markettoo-admin-9.jpg"
              alt=""
            />

            <div className="detail-sec__desc inner-text">
              <h3 className="detail-sec__desc-title">상품, 주문 관리</h3>
              <p className="detail-sec__desc-p">
                상품 관리와 매출 관리 화면은 점주들이 가장 자주 활용하는 핵심
                기능으로, 실사용 흐름을 기반으로 UX를 설계했습니다. 상품 등록은
                복잡한 항목을 최소화하고 필수 입력만 먼저 보이도록 하여, 비숙련
                사용자도 부담 없이 접근할 수 있도록 구성했습니다. 또한 주문 및
                매출 페이지는 단순 수치 나열이 아닌, 운영자가 빠르게 현황을
                파악할 수 있도록 그래프와 텍스트를 조합해 정보의 가독성과
                전달력을 높이는 데 집중했습니다.
              </p>
            </div>
          </div>

          <div className="detail-sec">
            <img
              className="detail__img"
              src="/images/markettoo-admin/pj-markettoo-admin-10.jpg"
              alt=""
            />
          </div>

          <div className="detail-sec">
            <img
              className="detail__img"
              src="/images/markettoo-admin/pj-markettoo-admin-11.jpg"
              alt=""
            />
          </div>

          <div className="detail-sec">
            <img
              className="detail__img"
              src="/images/markettoo-admin/pj-markettoo-admin-12.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
