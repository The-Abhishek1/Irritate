import Image from "next/image";
import Hii from "@public/baby2.png";
import p1 from "@public/monkey1.jpg";
import p2 from "@public/monkey3.jpg";
import p3 from "@public/face.jpg";
import p4 from "@public/bindu.jpg";
import p5 from "@public/bindu2.png";

//Main Function
export default function Home() {
  return (
    <div className="flex italic text-center flex-col gap-3 p-3 h-[100%] w-[100%]">
      <div className="flex flex-row items-center justify-center">
        <h1 className="font-bold  uppercase text-[20px] italic">
          Nothing Just Wanted to Say{" "}
          <p className="inline-block text-red-600">"AUNTY"</p>
        </h1>
        <Image src={Hii} alt="Hii" className="w-[100px] h-[100px]" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-center">
          I found your childhood photo, Don't feel embrassed you are
          gorgeous😂😆🙈🙈🙈
        </h4>
        <h4>
          Just Look at your Photos{", "}
          <p className="inline-block text-green-500">
            "I mean you are just stunning ☀️✨🌟"
          </p>
        </h4>
      </div>
      <div className="flex gap-4 flex-col items-center justify-center">
        <Image src={p1} alt="She" className="max-w-[400px] msmmm:w-[300px]" />
        <div className="flex flex-row">
          <Image
            src={p4}
            alt="She"
            className="max-w-[200px] msmmm:w-[150px] max-h-[200px]"
          />
          <Image
            src={p5}
            alt="She"
            className="max-w-[200px] msmmm:w-[150px] max-h-[200px]"
          />
        </div>
        <h3>Compare the above clips🤣🤣🤣</h3>

        <Image src={p2} alt="She" className="max-w-[400px]" />
      </div>
      <div className="flex items-center text-center flex-col justify-center text-green-500">
        <h3>And I'm still 6 month's Kid Discovering Hiiden Facts</h3>
        <h3>Don't worry, You can Thank Me Later👋💤😂🤣😂</h3>
        <Image src={p3} alt="Me" className="w-[60px] mt-2 h-[60px] " />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3>Goooo Study Now🐒👋👋</h3>
        <h3 className="font-bold text-red-600">SEE YOU LATER AUNTY😀😀</h3>
      </div>
    </div>
  );
}
