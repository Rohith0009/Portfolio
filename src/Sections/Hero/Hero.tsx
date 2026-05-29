import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GradientText from "../Components/GradientText.tsx";

const Hero = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-3/4 md:w-2/3 lg:w-1/3">
                <div className="font-semibold py-20 text-white">
                    <GradientText text={"Hello, I'm Rohith"} className={"text-5xl font-bold"}/>
                    <br/>
                    <p className="text-xl text-gray-300 mt-3">I am an aspiring programmer who has profound programming knowledge, worked on several projects and have won numerous competitions and awards.</p>
                    <p className="text-lg text-gray-400 ">I'm currently studying at North Vista Secondary School</p>
                    <div className="flex flex-row gap-x-3 text-base text-gray-500 my-2 w-1/3 underline">
                        <a href="https://github.com/Rohith0009"><GitHubIcon/></a>
                        <a href="https://www.linkedin.com/in/merala-rohith-300b652a9/"><LinkedInIcon/></a>
                        <a href="mailto:rohithmerala@gmail.com" className="flex-row flex gap-x-2">
                            <EmailIcon/>
                            <span>rohithmerala@gmail.com</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Hero