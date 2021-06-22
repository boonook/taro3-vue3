import HTTPREQUEST from "@utils/http";

export const getWxarticleChaptersJson = (getData) => {
  return HTTPREQUEST.baseOptions({
    url:'/api/music/search',
    data:getData,
    method:'GET'
  })
}
