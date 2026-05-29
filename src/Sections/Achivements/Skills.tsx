import SkillCard from "../Components/SkillCard.tsx";
const Skills = () => {
    return (
        <div className="w-full">
            <h1 className="text-4xl font-bold text-gray-200 text-center">My Skills</h1>
            <div className="w-3/4 md:w-2/3 lg:w-1/2  mx-auto">
                <p className="text-center text-base font-semibold my-4 text-gray-300">My technical expertise spans a wide range of categories, allowing me to build performant apps and websites for smartphones, tablets, and desktops.</p>
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                    <SkillCard cardParams={{name:"Python", img:"python.png"}}/>
                    <SkillCard cardParams={{name:"C++", img:"c-.png"}}/>
                    <SkillCard cardParams={{name:"HTML", img:"html.png"}}/>
                    <SkillCard cardParams={{name:"CSS", img:"css-3.png"}}/>
                    <SkillCard cardParams={{name:"Tailwind", img:"tailwind.png"}}/>
                    <SkillCard cardParams={{name:"JS", img:"js.png"}}/>
                    <SkillCard cardParams={{name:"TS", img:"ts.png"}}/>
                    <SkillCard cardParams={{name:"React", img:"atom.png"}}/>
                    <SkillCard cardParams={{name:"SQL", img:"database.png"}}/>
                    <SkillCard cardParams={{name:"Postgres", img:"postgre.png"}}/>
                    <SkillCard cardParams={{name:"Git", img:"git.png"}}/>


                </div>
            </div>
        </div>

    )
}
export default Skills