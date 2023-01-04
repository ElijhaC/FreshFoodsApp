import { Icon } from '@iconify/react';
import "./key";
import Axios from "axios";
import Recipes from './Recipes';
import { useState } from "react";
import { initial } from 'lodash';



function App() {

    const [query, setquery] = useState("");
    const [recipes, setrecipes] = useState([]);
    const [healthLabel, sethealthLabel] = useState("vegan");

    const YOUR_APP_ID = "65fef3f9";
    const YOUR_APP_KEY = "bb3226772cb9f04ad7021cdd047f3a9f";

    const url=`https://api.edamam.com/search?q=${query}&app_id=d1cb3d4e&app_key=d75d77ad7702c2d6bee50b3f552867cd&health=${healthLabel}`;

    async function getRecipes(){
        var result = await Axios.get(url);
        setrecipes(result.data.hits);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipes();
    };
    
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
                        <li className="nav-item"><a className="nav-link" href="#features">recipes</a></li>
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
                            <a className="portfolio-link"  href="#features">
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
                            <a className="portfolio-link"  href="#features">
                                
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
                            <a className="portfolio-link"  href="#features">
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
                <label class="form-check-label" for="firstCheckbox" onClick={() => sethealthLabel("dairy")}>Dairy</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"></input>
                <label class="form-check-label" for="secondCheckbox" onClick={() => sethealthLabel("eggs")}>Eggs</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"></input>
                <label class="form-check-label" for="thirdCheckbox" onClick={() => sethealthLabel("fish")}>Fish</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
                <label class="form-check-label" for="firstCheckbox" onClick={() => sethealthLabel("tree nuts")}>Tree nuts</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"></input>
                <label class="form-check-label" for="secondCheckbox" onClick={() => sethealthLabel("legumes")}>Legumes</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"></input>
                <label class="form-check-label" for="thirdCheckbox" onClick={() => sethealthLabel("gluten")}>Gluten</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
                <label class="form-check-label" for="firstCheckbox" onClick={() => sethealthLabel("soybeans")}>Soybeans</label>
              </li>
              <li class="list-group-item border-0">
                <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"></input>
                <label class="form-check-label" for="secondCheckbox" onClick={() => sethealthLabel("corn")}>Corn</label>
              </li>
            </ul>
            <div id="like_button_container"></div>
          </div>
        </div>
        <div className="text-center">
            <h2 className="section-heading text-uppercase">Search</h2>
             
            <div class="results">
                <form className="app__search" onSubmit={onSubmit}>
                    <input type="text" 
                    className="app__input"
                    placeholder="enter ingredient" value={query} onChange={(e) => setquery(e.target.value)} />
                    <input className="app__submit" type="submit" value="Search" />
                </form>

                <div className='app__recipes'>
                    {recipes.map((recipe) => { return <Recipes recipe={recipe} />;
                    })}
                </div>
            </div>
        </div>
    </div>
  </section>

   </>
  );
}

export default App;
