//Fetches data from insight
export default (async () => {
  const data = await fetch('https://insight-timer-api.firebaseapp.com/apiLibraryItemFilter/request?publisher_id=t2d1d1V3a8E5f0F3L1G2y8u9j3C1U3y3m6G1L2c0b7g9D1x4E2R8k8H2r9Q0q2E4s8n8k4t7Y0L3q4W4h7X0B1C4d7z4q7t4M5t3&sort_option=newest&limit=999&offset=0').then(resp => resp.json())

  return data
})
