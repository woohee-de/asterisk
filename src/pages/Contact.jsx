import MainContainer from '@/components/layout/MainContainer';
import MainSidebar from '@/components/layout/MainSidebar';

function Contact() {
  return (
    <>
      <div className="main__layout">
        <MainSidebar>
          <h2 className="main-sidebar__title main-sidebar__title--mo-hidden">
            CONTACT
          </h2>
        </MainSidebar>
        <MainContainer>
          <div className="contact">
            <div className="contact__item contact__item--skill">
              <dl className="contact__dl">
                <dt className="contact__dt">SKILL</dt>

                <dd className="contact__dd">Figma</dd>
                <dd className="contact__dd">Photoshop</dd>
                <dd className="contact__dd">Illustrator</dd>

                <dd className="contact__dd contact__dd--divide">HTML</dd>
                <dd className="contact__dd">CSS/SCSS</dd>
                <dd className="contact__dd">Javascript</dd>
                <dd className="contact__dd">React</dd>
              </dl>
            </div>
            <div className="contact__item contact__item--email">
              <dl className="cantact__dl">
                <dt className="contact__dt">WOOHEE KWAK</dt>
                <dd className="contact__dd contact__mail">
                  <a href="mailto:woohee.de@gmail.com" data-hover="true">woohee.de@gmail.com</a>
                </dd>
              </dl>
            </div>
          </div>
        </MainContainer>
      </div>
    </>
  );
}

export default Contact;
