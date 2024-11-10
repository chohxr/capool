import React, { useState } from "react";
import styles from "./HomeContainer.module.css";

// 검색창 컴포넌트
const SearchBar: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="지역이나 날짜를 검색하세요 !"
      className={styles.searchBar}
    />
  );
};

// 네모 박스 아이템 컴포넌트의 타입 정의
interface BoxItemProps {
  content: string;
}

// 네모 박스 아이템 컴포넌트
const BoxItem: React.FC<BoxItemProps> = ({ content }) => {
  return (
    <div className={styles.box}>
      <p>{content}</p>
    </div>
  );
};

// 슬라이더 컴포넌트의 타입 정의
interface BoxSliderProps {
  items: string[];
}

// 슬라이더 컴포넌트
const BoxSlider: React.FC<BoxSliderProps> = ({ items }) => {
  const [index, setIndex] = useState<number>(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 4));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex < items.length - 4 ? prevIndex + 1 : 0));
  };

  return (
    <div className={styles.sliderContainer}>
      <button onClick={handlePrev} className={styles.arrowButton}>
        &lt;
      </button>
      <div className={styles.boxContainer}>
        {items.slice(index, index + 4).map((item, idx) => (
          <BoxItem key={idx} content={item} />
        ))}
      </div>
      <button onClick={handleNext} className={styles.arrowButton}>
        &gt;
      </button>
    </div>
  );
};

// 메인 레이아웃 컴포넌트
const HomeContainer: React.FC = () => {
  const data: string[] = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]; // 예시 데이터

  return (
    <div className={styles.HomeContainer}>
      <SearchBar />
      <BoxSlider items={data} />
    </div>
  );
};

export default HomeContainer;
