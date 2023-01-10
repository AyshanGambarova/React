import $http from "../../utils/interceptors/index";

export async function apiProducts(skipNumber, limitNumber) {
  return await $http({
    method: "GET",
    url: `/products`,
    params: {
      skip: skipNumber,
      limit: limitNumber,
    },
  });
}
