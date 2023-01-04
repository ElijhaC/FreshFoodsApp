import { Icon } from '@iconify/react';
import "./key";
import Axios from "axios";
import { useState } from "react";



function App() {

    const [query, setquery] = useState("");
    const [recipes, setrecipes] = useState([]);

    const YOUR_APP_ID = "65fef3f9";
    const YOUR_APP_KEY = "bb3226772cb9f04ad7021cdd047f3a9f";

    var url=`https://api.edamam.com/search?q=${query}&app_id=d1cb3d4e&app_key=d75d77ad7702c2d6bee50b3f552867cd&health=alcohol-free`;

    async function getRecipes(){
        var result = await Axios.get(url);
        setrecipes(result.data.hits);
        console.log(result.data);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipes();
    }
    
  return (  
    <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">FreshFoods</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">recipes</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
       
        <header className="masthead">
            <div className="container">
                <div className="masthead-heading text-uppercase">Recipes By Diet</div>
                <h5>From gluten free to vegetarian and more, these are trusted, easy and healthy recipes for special diets. Find the best for any breakfast, lunch or dinner!</h5>
                <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
        </header>
      
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-item">
                            <a className="portfolio-link">
                                <img className="img-fluid" src="assets/img/breakfast.png" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Breakfast</div>
                                <div className="portfolio-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link"  href="#portfolioModal2">
                                
                                <img className="img-fluid" src="assets/img/lunch.png" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Lunch</div>
                                <div className="portfolio-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link">
                                <img className="img-fluid" src="assets/img/dinner.png" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Dinner</div>
                                <div className="portfolio-caption-subheading text-muted"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" class="features">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="image col-lg-6" data-aos="fade-right"><img src='assets/img/foodallergy.png' width={600}></img></div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <ul class="list-group">
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
                <label class="form-check-label" for="firstCheckbox">Dairy</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"></input>
                <label class="form-check-label" for="secondCheckbox">Eggs</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"></input>
                <label class="form-check-label" for="thirdCheckbox">Fish</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
                <label class="form-check-label" for="firstCheckbox">Tree nuts</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"></input>
                <label class="form-check-label" for="secondCheckbox">Legumes</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"></input>
                <label class="form-check-label" for="thirdCheckbox">Wheat</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
                <label class="form-check-label" for="firstCheckbox">Soybeans</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"></input>
                <label class="form-check-label" for="secondCheckbox">Corn</label>
              </li>
            </ul>
            <div id="like_button_container"></div>
          </div>
        </div>
        <div className="text-center">
            <h2 className="section-heading text-uppercase">Search</h2>
             
            <div class="results">
                <form className="app__search" onSubmit={onSubmit}>
                    <input type="text" placeholder="enter ingredient" value={query} onChange={(e) => setquery(e.target.value)} />
                    <input className="app__submit" type="submit" value="Search" />
                </form>

                <div>
                    {recipes.map((recipe) => { return <p>{recipe["recipe"]["label"]}</p>;})}
                </div>
            </div>
        </div>
    </div>
  </section>

        
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                            <h4>Parveen Anand</h4>
                            <p className="text-muted">Lead Designer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                            <h4>Diana Petersen</h4>
                            <p className="text-muted">Lead Marketer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                            <h4>Larry Parker</h4>
                            <p className="text-muted">Lead Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
                    </div>
                </div>
            </div>
        </div>
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                               
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-group">
                           
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div className="form-group mb-md-0">
                               
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                               
                                <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                   
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section>
     
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2022</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
        
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                   
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Threads
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Illustration
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Explore
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Graphic Design
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Finish
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Identity
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Lines
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Branding
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Southwest
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Website Design
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Window
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Photography
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </>
  );
}

export default App;
