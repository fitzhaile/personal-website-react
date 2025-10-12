'use client'

const basePath = process.env.NODE_ENV === 'production' ? '/personal-website-react' : '';

export default function About({ handleContactTrigger }) {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">Hi, I'm Fitz</h2>
          
          <p className="about__text">
            Fitz Haile is a Savannah-based data and analytics consultant who helps organizations turn information into insight. He began his career at the Creative Coast Alliance as an economic analyst and later co-executive director before spending a decade in New York and San Francisco leading web and software development teams, including at SurveyMonkey.
          </p>
          
          <p className="about__text">
            Fitz specializes in Google Analytics, data quality management, and visualization—using clean, reliable data to measure performance and inform strategy. A founding member of the Metro Savannah Rotary Club, he remains deeply engaged in the Savannah community.
          </p>
          
          <button 
            onClick={handleContactTrigger}
            className="about__cta"
          >
            Let's Talk →
          </button>
        </div>
        
        <div className="about__image-container">
          <img 
            src={`${basePath}/img/my_nyc.jpeg`}
            alt="Fitz Haile" 
            className="about__image"
          />
        </div>
      </div>
    </section>
  );
}

