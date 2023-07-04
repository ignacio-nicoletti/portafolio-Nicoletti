import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      color: #fff;
      transition:0.50s ;
      
      &:hover {
        transform: translateY(-5px);
        background-color: var(--blueOpacity);
      
        
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 2.6rem;
        }
      }

      h3 {
        margin-bottom: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a {
          color: #ffff;
          border-bottom: 1px solid var(--red);
          transition: color 0.25s;
          &:hover {
            color: var(--blue);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }

   .img {
    border-radius: 1.2rem;
    width: calc(100% - 2rem);
    height:100px;
        }

  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }

    .img {
    border-radius: 1.2rem;
    width: calc(100% - 2rem);
    height:100px;
        }
  }




//DA VUELTA LA CARD

.front, .back {
  backface-visibility: hidden;
}

.front {
 position: absolute
  transform: rotateY(0deg);
  transition: all 0.3s linear;
}

.back {
  transition: all 0.3s linear;
  transform: rotateY(180deg);
  position:absolute
}

.container:hover .front {
  transform: rotateY(180deg);
}

.container:hover .back {
  transform: rotateY(360deg);
}

.front:hover{
  transform: rotateY(180deg);
}
//DA VUELTA LA CARD



.img{
border-radius: 1.2rem;
width: calc(100% - 2rem);
height:250px;
}


`;
