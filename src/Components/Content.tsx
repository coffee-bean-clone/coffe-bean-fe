import styled from 'styled-components';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ProductType } from '../util/ProductType';
import { axiosInstance } from '../Hook/AxiosHook';

const fetchNewProductData = async () => {
  const { data } = await axiosInstance.get<ProductType[]>('/product/new');
  return data;
};

const fetchSaleProductData = async () => {
  const { data } = await axiosInstance.get<ProductType[]>('/product/sale');
  return data;
};

const Content = () => {
  const {
    data: newProductArr,
    isError: newProductIsError,
    isLoading: newProductIsLoading,
  } = useQuery('newProductArr', fetchNewProductData);
  const {
    data: saleProductArr,
    isError: saleProductIsError,
    isLoading: saleProductIsLoading,
  } = useQuery('saleProductArr', fetchSaleProductData);

  if (newProductIsLoading || saleProductIsLoading) {
    return <div>Loading...</div>;
  }

  if (newProductIsError || saleProductIsError) {
    return <div>Error</div>;
  }

  return (
    <ContentContainer>
      <ProductContent>
        <ContentTitle>New Product</ContentTitle>
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
            loop={true}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
          >
            {newProductArr &&
              newProductArr.map(product => (
                <SwiperSlide key={product._id}>
                  <SlideImg src={product.productImages[0]} />
                  <SlideTitle>{product.title}</SlideTitle>
                  <SlideTitle>{product.price}원</SlideTitle>
                </SwiperSlide>
              ))}
          </Swiper>
        </StyledSwiperContainer>
      </ProductContent>
      <ProductContent>
        <ContentTitle>Sale Product</ContentTitle>
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
            loop={true}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
          >
            {saleProductArr &&
              saleProductArr.map(product => (
                <SwiperSlide key={product._id}>
                  <SlideImg src={product.productImages[0]} />
                  <SlideTitle>{product.title}</SlideTitle>
                  <SlideTitle>{product.price}원</SlideTitle>
                </SwiperSlide>
              ))}
          </Swiper>
        </StyledSwiperContainer>
      </ProductContent>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  padding: 10px 0px;
`;

const ProductContent = styled.div`
  padding: 30px;
`;

const ContentTitle = styled.h2`
  text-align: center;
  padding: 30px;
  color: orange;
`;

const StyledSwiperContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 80%;
`;

const SlideTitle = styled.div`
  text-align: center;
`;

const SlideImg = styled.img`
  margin: 0 auto;
  width: 70%;
`;

export default Content;
