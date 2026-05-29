import type {SkillCardParams} from "./types.ts";

export default function SkillCard({cardParams}: { cardParams: SkillCardParams }) {
    return (
        <div className="rounded-xl p-4 border-2 w-full font-semibold relative group isolate">
            <div className={"relative z-20 w-full h-full "}>
                <div className=" flex flex-row gap-x-2 items-center justify-center md:justify-start">
                    <img src={`/images/logo/${cardParams.img}`} className={"w-7"} alt=""/>
                    <span className={"text-base hidden md:flex "}>{cardParams.name}</span>
                </div>
            </div>

            <div
                className="absolute -inset-1 group-hover:-inset-1.5 opacity-75 group-hover:opacity-100 bg-gradient-to-r transition duration-300 from-blue-600 to-violet-600 rounded-lg blur-sm -z-10">
            </div>
        </div>
    );
}
