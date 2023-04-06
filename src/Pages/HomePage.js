/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

import {Link} from 'react-router-dom';


    function HomePage() {
        
    return (
      
      <div data-spy="scroll" data-offset="50" data-target=".navbar-collapse">
 
      
      
      <div className="navbar navbar-fixed-top custom-navbar" role="navigation">
          <div className="container">
      
              <div className="navbar-header">
                  <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon icon-bar"></span>
                      <span className="icon icon-bar"></span>
                      <span className="icon icon-bar"></span>
                  </button>
                  <h1 href="#" className="navbar-brand"> Social Media</h1>
              </div>
      
              <div className="collapse navbar-collapse">
      
                  <ul className="nav navbar-nav navbar-right">
                      <li><Link to ="/register" className="smoothScroll">Register</Link></li>
                      <li><Link to ="/login" className="smoothScroll">Login</Link></li>
                      <li><a href="#contact" className="smoothScroll">Contact Us</a></li>
                  </ul>
      
              </div>
      
          </div>
      </div>
      
      <section id="intro" className="parallax-section">
          <div className="container">
              <div className="row">
      
                  <div className="col-md-12 col-sm-12">
                      <h3 className="wow bounceIn" data-wow-delay="0.9s">created by Abdi Abderraouf</h3>
                      <h1 className="wow fadeInUp" data-wow-delay="1.6s">Social Media</h1>
                      <Link to ="/login" className="btn btn-lg btn-default smoothScroll wow fadeInUp hidden-xs" data-wow-delay="2.3s">LOGIN</Link>
                      <Link to ="/register" className="btn btn-lg btn-danger smoothScroll wow fadeInUp" data-wow-delay="2.3s">REGISTER NOW</Link>
                  </div>
      
      
              </div>
          </div>
      </section>
      
      <section id="overview" className="parallax-section">
          <div className="container">
              <div className="row">
      
                  <div className="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="0.6s">
                      <h3>Internet a consacré la montée en puissance des réseaux sociaux, devenus pour certains de véritables médias sociaux, qui permettent aux internautes et aux professionnels de créer une page profil et de partager des informations, photos et vidéos avec leur réseau. Des espaces de partage qui se distinguent par leur utilité (personnel, professionnel, rencontres...), leur logo et leurs audiences.  En 2020, c'est un peu plus du tiers du temps de surf qui est consacré aux réseaux sociaux et services de messagerie instantanées selon Médiamétrie//Netratings. Ils sont aujourd'hui près de 49 millions, soit 8 Français sur 10, à en utiliser.</h3>
                      </div>
                          
                  <div className="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="0.9s">
                      <img src="images/overview-img.jpg" className="img-responsive" alt="Overview"/>
                  </div>
      
              </div>
          </div>
      </section>
    
      <section id="video" className="parallax-section">
          <div className="container">
              <div className="row">
      
                  <div className="wow fadeInUp col-md-6 col-sm-10" data-wow-delay="1.3s">
                      <h2>Video en reseaux sociaux</h2>
                          <p>Pourquoi utiliser la vidéo sur les réseaux sociaux ?
       
      
      La place de la vidéo sur les réseaux sociaux ne cesse d’augmenter ; les marques utilisent ce support pour engager leur clientèle, stimuler leur visibilité, générer des leads… Ce format est incontournable dans le domaine du social media.
      
      Avant toute chose, il faut savoir que la vidéo est un atout considérable dans votre communication sur les réseaux sociaux ; elle va être un véritable moteur d’engagement pour les internautes. D’ailleurs, lorsqu’il s’agit de réseaux sociaux, les internautes actuels deviennent feignants et s’ils ont le choix, ils préféreront nettement regarder un contenu audiovisuel plutôt que de lire un texte ! C’est là tout l’intérêt d’utiliser des contenus audiovisuels ; ils ont une très forte capacité à attirer, retenir et générer de l’engagement.
      
      Le premier avantage à l’utilisation de la vidéo ; à la différence d’un partage de lien sur une page Facebook par exemple (une des techniques les plus rependues sur les réseaux sociaux), est que lorsque vous allez diffuser une vidéo, elle va se remarquer très rapidement. Les internautes n’auront pas à être attirés par le titre, puis cliquer sur le lien et éventuellement lire l’article ! Ici, avec la vidéo, votre audience va connaître directement la durée et le thème de votre vidéo grâce à son titre et sa vignette. C’est simple, rapide et efficace.</p>
                  </div>
                  <div className="wow fadeInUp col-md-6 col-sm-10" data-wow-delay="1.6s">
                      <div className="embed-responsive embed-responsive-16by9">
                          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/XDPwXQjAlB0" allowfullscreen></iframe>
                      </div>
                  </div>
      
              </div>
          </div>
      </section>
      
      <section id="speakers" className="parallax-section">
          <div className="container">
              <div className="row">
      
                  <div className="col-md-12 col-sm-12 wow bounceIn">
                      <div className="section-title">
                          <h2>personne connecte </h2>
                          <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.</p>
                      </div>
                  </div>
                  <div id="owl-speakers" className="owl-carousel">
      
                      <div className="item wow fadeInUp col-md-3 col-sm-3" data-wow-delay="0.9s">
                          <div className="speakers-wrapper">
                              <img src="images/speakers-img1.jpg" className="img-responsive" alt="speakers"/>
                                  <div className="speakers-thumb">
                                      <h3>Jenny Green</h3>
                                      <h6>UI Designer</h6>
                                  </div>
                          </div>
                      </div>
      
                      <div className="item wow fadeInUp col-md-3 col-sm-3" data-wow-delay="0.6s">
                          <div className="speakers-wrapper">
                              <img src="images/speakers-img2.jpg" className="img-responsive" alt="speakers"/>
                                  <div className="speakers-thumb">
                                      <h3>David Yoon</h3>
                                      <h6>Creative Director</h6>
                                  </div>
                          </div>
                      </div>
      
                      <div className="item wow fadeInUp col-md-3 col-sm-3" data-wow-delay="0.9s">
                          <div className="speakers-wrapper">
                              <img src="images/speakers-img3.jpg" className="img-responsive" alt="speakers"/>
                                  <div className="speakers-thumb">
                                      <h3>Je Mary Lee</h3>
                                      <h6>Web Specialist</h6>
                                  </div>
                          </div>
                      </div>
      
                      <div className="item wow fadeInUp col-md-3 col-sm-3" data-wow-delay="0.6s">
                          <div className="speakers-wrapper">
                              <img src="images/speakers-img4.jpg" className="img-responsive" alt="speakers"/>
                                  <div className="speakers-thumb">
                                      <h3>Johnathan Doe</h3>
                                      <h6>Frontend Dev</h6>
                                  </div>
                          </div>
                      </div>
      
                      <div className="item wow fadeInUp col-md-3 col-sm-3" data-wow-delay="0.6s">
                          <div className="speakers-wrapper">
                              <img src="images/speakers-img5.jpg" className="img-responsive" alt="speakers"/>
                                  <div className="speakers-thumb">
                                      <h3>Elite Hamilton</h3>
                                      <h6>Marketing Guru</h6>
                                  </div>
                          </div>
                      </div>
                      
                  </div>
      
              </div>
          </div>
      </section>

      <section id="register" className="parallax-section">
          <div className="container">
              <div className="row">
                  
      
                  <div className="col-md-1"></div>
      
              </div>
          </div>
      </section>
      
      <section id="contact" className="parallax-section">
          <div className="container">
              <div className="row">
      
                  <div className="wow fadeInUp col-md-offset-1 col-md-5 col-sm-6" data-wow-delay="0.6s">
                      <div className="contact_des">
                          <h3>New Event</h3>
                          <p>Proin sodales convallis urna eu condimentum. Morbi tincidunt augue eros, vitae pretium mi condimentum eget. Suspendisse eu turpis sed elit pretium congue.</p>
                          <p>Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum. Praesent ullamcorper mauris fermentum turpis scelerisque rutrum eget eget turpis.</p>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor.</p>
                          <a href="#" className="btn btn-danger">DOWNLOAD NOW</a>
                      </div>
                  </div>
      
                  <div className="wow fadeInUp col-md-5 col-sm-6" data-wow-delay="0.9s">
                      <div className="contact_detail">
                          <div className="section-title">
                              <h2>Keep in touch</h2>
                          </div>
                          <form action="#" method="post">
                              <input name="name" type="text" className="form-control" id="name" placeholder="Name"/>
                                <input name="email" type="email" className="form-control" id="email" placeholder="Email"/>
                                <textarea name="message" rows="5" className="form-control" id="message" placeholder="Message"></textarea>
                              <div className="col-md-6 col-sm-10">
                                  <input name="submit" type="submit" className="form-control" id="submit" value="SEND"/>
                              </div>
                          </form>
                      </div>
                  </div>
      
              </div>
          </div>
      </section>
    
      <footer>
          <div className="container">
              <div className="row">
      
                  <div className="col-md-12 col-sm-12">
                      <p className="wow fadeInUp" data-wow-delay="0.6s">Copyright &copy;Abdi abderraouf 2023
                          
                      </p>
      
                      <ul className="social-icon">
                          <li><a href="#" className="fa fa-facebook wow fadeInUp" data-wow-delay="1s"></a></li>
                          <li><a href="#" className="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s"></a></li>
                          <li><a href="#" className="fa fa-dribbble wow fadeInUp" data-wow-delay="1.6s"></a></li>
                          <li><a href="#" className="fa fa-behance wow fadeInUp" data-wow-delay="1.9s"></a></li>
                          <li><a href="#" className="fa fa-google-plus wow fadeInUp" data-wow-delay="2s"></a></li>
                      </ul>
      
                  </div>
                  
              </div>
          </div>
      </footer>
      
    
      <a href="#back-top" className="go-top"><i className="fa fa-angle-up"></i></a>
      
      
      </div>
      
    
    );
  }


export default HomePage;
