import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../Hook/AxiosHook';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Product {
  _id: string;
  title: string;
  price: number;
  mainCategory: string;
  subCategory: string;
  isSale: boolean;
  isNew: boolean;
  detailImage: string;
  productImages: string[];
  createdAt: string;
  __v: number;
}

const Content = () => {
  const [mdPickArr, setMdPickArr] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get<Product[]>(`/product/sale`);
        setMdPickArr(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContentContainer>
      <MdPick>MD`s Pick</MdPick>
      <StyledSwiperContainer>
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          autoplay={true}
          speed={300}
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
        >
          {mdPickArr.map(product => (
            <SwiperSlide key={product._id}>
              <SlideImg src={product.productImages[0]} />
              <SlideTitle>{product.title}</SlideTitle>
              <SlideTitle>{product.price}원</SlideTitle>
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledSwiperContainer>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  padding: 30px 0px;
`;

const MdPick = styled.h2`
  text-align: center;
  padding: 30px;
  color: orange;
`;

const StyledSwiperContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const SlideTitle = styled.div`
  text-align: center;
`;

const SlideImg = styled.img`
  width: 80%;
`;

export default Content;
