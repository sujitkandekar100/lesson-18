
/*const xhr = new XMLHttpRequest();

      xhr.addEventListener('load', () => {
        console.log(xhr.response);
      });

      xhr.open('GET', 'https://supersimplebackend.dev/greeting');
      xhr.send();

*/
/*const promise=fetch('https://supersimplebackend.dev/greeting').then((response)=>{
  return response.text();
}).then((text)=>{
  console.log(text);
})
*/
async function greeting(){
  try{const respose=await fetch('https://supersimplebackend.dev/greeting');
  const greetingResponse= await respose.text();
  console.log(greetingResponse);
  }
  catch(error){
    if (error.name === 'AbortError') {
      console.error('Request timed out');
    } else {
      console.error('Fetch error:', error.message);
    }
  }
}
greeting();
