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
  const [newProductArr, setNewProductArr] = useState<Product[]>([]);
  const [saleProductArr, setSaleProductArr] = useState<Product[]>([]);

  useEffect(() => {
    const fetchNewProductData = async () => {
      try {
        const { data } = await axiosInstance.get<Product[]>(`/product/new`);
        setNewProductArr(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchNewProductData();
  }, []);

  useEffect(() => {
    const fetchSaleProductData = async () => {
      try {
        const { data } = await axiosInstance.get<Product[]>(`/product/sale`);
        setSaleProductArr(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchSaleProductData();
  }, []);

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
            {newProductArr.map(product => (
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
            {saleProductArr.map(product => (
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
