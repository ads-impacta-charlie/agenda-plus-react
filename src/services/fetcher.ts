let token = "";
export function createToken(e: string) {
  token = e;
  console.log("token:", token);
}
export const fetcher = (url: string, options: RequestInit = {}): Promise<any> => {
  const headers = new Headers();
  headers.set("content-type", "application/json");
  headers.set("accept", "application/json");
  headers.set("Authorization", "Bearer " + token);

  return fetch(url, {
    ...options,
    headers,
  }).then((res) => {
    if(res.status === 401){
        return
    }else if(res.status !== 204){
        return res.json()
    }
    return res
});
    
};