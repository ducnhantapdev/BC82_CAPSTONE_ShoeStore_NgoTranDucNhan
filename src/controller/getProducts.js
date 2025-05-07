//Lấy danh sách sản phẩm
const apiProducts = "https://shop.cyberlearn.vn/api/Product";
let products = [];
async function getProducts() {
  try {
    const response = await axios.get(apiProducts);
    console.log(response.data.content);
    return (products = response.data.content);
  } catch (error) {
    console.error("Lỗi:", error.message);
  }
}
export default getProducts;
