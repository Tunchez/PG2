import React, { useState } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { size } from "lodash";
import { API_URL } from "../../utils/constants";

const width = Dimensions.get("window").width;
const height = 500;

export default function CarouselImages(props) {
  const { images } = props;
  const [imageActive, setImageActive] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <Image
        style={styles.carousel}
        source={{
          uri: `${API_URL}${item.url} ?? https://elcomercio.pe/resizer/A7EO-8vL0pB6oSsN6IVKMQLLCjo=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3NLQKYP52JEYVD5AOVX224ASWI.jpg`,
        }}
      />
    );
  };

  return (
    <>
      <Carousel
        layout={"default"}
        data={images}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={(index) => setImageActive(index)}
      />
      <Pagination
        dotsLength={size(images)}
        activeDotIndex={imageActive}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width,
    height,
    resizeMode: "contain",
  },
});
