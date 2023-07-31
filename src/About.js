import styled from "styled-components";

const About = () => {

  return (
    <Wrapper>
      <h2>About</h2><br /><br />
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <h2>Online Shopping</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quibusdam molestiae beatae laudantium eos ipsam maxime ullam accusantium perspiciatis voluptatem?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, odit. Velit laudantium iusto debitis quos cumque temporibus culpa voluptatum minus! Ducimus necessitatibus iste explicabo, voluptate deserunt temporibus numquam consequuntur esse.</p>

            <strong>This Shopping invented in 1997</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum minima consectetur iste eius adipisci dolores facere molestias sint molestiae debitis? Corporis nobis molestiae culpa et nesciunt sunt numquam error unde cum placeat.

            </p>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="gif/homestyle2.webp"
                alt="hero-section-photo"
                className="img-style"
              />

            </figure>
          </div>


          <div className="hero-section-image">
            <figure>
              <img
                src="gif/homestyle6.gif"
                alt="hero-section-photo"
                className="img-style"
              />

            </figure>
          </div>

          <div className="hero-section-data">
            <h2>Available Items In  Shopping cart App</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quibusdam molestiae beatae laudantium eos ipsam maxime ullam accusantium perspiciatis voluptatem?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, odit. Velit laudantium iusto debitis quos cumque temporibus culpa voluptatum minus! Ducimus necessitatibus iste explicabo, voluptate deserunt temporibus numquam consequuntur esse.</p>

            <strong>This Shopping invented in 1997</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum minima consectetur iste eius adipisci dolores facere molestias sint molestiae debitis? Corporis nobis molestiae culpa et nesciunt sunt numquam error unde cum placeat.

            </p>
          </div>
        </div>
        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
text-align:center;

  img {
    min-width: 5rem;
    height: 4rem;
    border-radius:20px;
  }
.container{
  padding-top:20px;
}
  .hero-section-data {
    p {
      margin: 2rem 0;
      text-align:justify;
    }

    
h2{
  text-align:center;
  padding-bottom:20px;
}
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default About;
