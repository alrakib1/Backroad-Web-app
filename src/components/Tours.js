import Title from "./Title.js";
import { tours } from "../data.js";

const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
       

        {
          tours.map(tour=> <article key={tour.id} className="tour-card">
          <div className="tour-img-container">
            <img src={tour.image} className="tour-img" alt="" />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <h4>{tour.tourInfo}</h4>
            <p>
             {tour.description}
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
               {tour.location}
              </p>
              <p>{tour.duration} days</p>
              <p>from ${tour.cost}</p>
            </div>
          </div>
        </article>)
        }

      

       
      </div>
    </section>
  );
};

export default Tour;
