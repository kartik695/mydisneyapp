import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

    return (
        <Carousel {...settings}>
            <Wrap>
                <a >
                    <img src="/images/slider-badging.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a >
                    <img src="/images/slider-scale.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a >
                    <img src="/images/slider-badag.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a >
                    <img src="/images/slider-scales.jpg" alt="" />
                </a>
           </Wrap>
            

        </Carousel>

        
        
    )
}


const Carousel = styled(Slider)`
  margin-top:20px;
  &>button{  
    opacity:0; // isse button hide ho jayenge kyuki background ki opacity 1 hai iski 0 toh button hide ho jayenge;
    height:100%;
    width:1vw;
    z-index:1;

    &:hover{
        opacity:1;
       transition:opacity 0.2s ease 0s;
    }

  }

  ul li button{
    &: before{
        font-size:10px; // isse buttons show ho jayenge jo inbuilt templete Slider ka react-slick se pehle light hone ki wajha se nahi dikh rahe the.

        color:rgb(150,158,171);

    }
  }

      //   acha slider ka active color by default black tha ab white karte hai hum usko bhi

li.slick-active button:before{
color:white;
}

//  slick -list in built hai ham iski madad se upcoming and current content show karenge.
.slick-list{
    overflow:initial;
}


.slick-prev{
    left:-75px;
}
.slick-prev{
    right:-75px;
}
}
`;

const Wrap = styled.div`
border-radius:4px;
cursor:pointer;
position relative;
a{
    border-radius: 4px;
    box-shadow:rgb(0 0 0 /69%)  0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
    display:block;
    position:relative;
    padding:4px;
    img{
        height:100%;
        width:100%;
    }
    &:hover{
        padding:0px;
        border: 4px solid rgba(249,249,249,0.8);
        transition-duration: 300ms;

    }
}

`;

export default ImgSlider;
