import { API_URL } from "../utils/constants";

export async function getBannersApi() {
  try {
    let dataImage;
    await fetch(`${API_URL}/api/home-banners?populate=banner&_limit=10`)
      .then((response) => response.json())
      .then((data) => {
        // Mapear los datos para obtener solo la URL de la imagen y el ID
        const formattedData = data.data.map((item) => ({
          id: item.id,
          image:
            "http://192.168.1.3:1337" +
            item.attributes.banner.data.attributes.url,
        }));
        dataImage = formattedData;
        // Aquí tendrás solo la URL de la imagen y el ID
      })
      .catch((error) => {
        console.error(error);
      });

    return dataImage;
  } catch (error) {
    console.log(error);
    return null;
  }
}
