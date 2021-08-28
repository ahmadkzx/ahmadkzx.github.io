import './index.scss'

export default function AboutPage() {
  return (
    <div className="container">
      <div className="about">
        <div className="about__photo">
          <img src="https://static.wixstatic.com/media/c22c23_048c6cce42284d548acb09af906d07cd~mv2_d_1959_1212_s_2.png/v1/crop/x_0,y_144,w_1959,h_1024/fill/w_1872,h_978,al_c,q_90,usm_0.66_1.00_0.01/portrait%20eliza.webp" alt="Ahmad Karimzade" />
        </div>

        <div className="about-content">
          <h2 className="about-content__title">Hello World</h2>
          <p className="about-content__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames. Lobortis feugiat vivamus at augue eget. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Libero nunc consequat interdum varius. Amet facilisis magna etiam tempor. Scelerisque varius morbi enim nunc faucibus. Elementum curabitur vitae nunc sed velit dignissim sodales. Lobortis feugiat vivamus at augue. Egestas maecenas pharetra convallis posuere. Sit amet commodo nulla facilisi nullam vehicula ipsum. Viverra maecenas accumsan lacus vel facilisis. Ullamcorper morbi tincidunt ornare massa eget. Vitae sapien pellentesque habitant morbi tristique senectus et. A pellentesque sit amet porttitor eget. Commodo odio aenean sed adipiscing diam donec. Amet facilisis magna etiam tempor orci eu. Et odio pellentesque diam volutpat commodo sed.</p>
          <a href="/" className="about-content__dl-cv">My CV</a>
        </div>
      </div>
    </div>
  )
}