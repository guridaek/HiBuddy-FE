import KakaoSVG from "@assets/kakao.svg?react";
import GoogleSVG from "@assets/google.svg?react";

function LoginPage() {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex flex-col items-center gap-y-4 mt-60">
        <h1 className="text-6xl text-inhaDeepBlue font-bold">HiBuddy</h1>
        <p className="text-xl font-semibold text-center">Community for international students</p>
      </div>
      <div className="flex flex-col gap-y-4  mt-auto mb-20 w-4/5 bg-color-FEE500">
        <button className="flex  items-center bg-kakao rounded-md h-14 px-6">
          <KakaoSVG />
          <div className="flex-1 font-bold">Continue with Kakao</div>
        </button>
        <button className="flex items-center border border-black rounded-md h-14 px-6">
          <GoogleSVG />
          <div className="flex-1 font-bold">Continue with Google</div>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
