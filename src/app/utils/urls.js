export const Urls=()=>{
    // const url='http://127.0.0.1:8000/'
    const url='https://vidgrabpro.com/'

    return{
        // ws_url:'wss://smart-academy-ujq0.onrender.com/ws/chat/',
        text_to_image:`${url}api/generate-ai-art/`,
        face_swap:`${url}api/face-swap/`,
        style_transfer:`${url}api/generate-image/`,
        login:`${url}auth/login/`,
        register:`${url}auth/register/`,
        logout:`${url}auth/logout/`,
        google:`${url}auth/verify/social/google-oauth2/`
        

    }
}