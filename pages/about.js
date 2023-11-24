import Skills from "../components/about/Skills.js";
import Layout from "../components/Layout.js";

export default function About() {
  return (
    <Layout metaTitle="About Me - Sneha Ratnani">
      <>
        <section className="w-11/12 mx-auto mt-6 mb-12 sm:w-5/6 lg:w-2/3 xl:w-[54rem]">
          <p className="text-center text-4xl font-semibold capitalize">
            <span className="font-poppins font-medium text-lg uppercase text-green dark:text-mustard">
              about me
            </span>
            <br />
           
          </p>
          <div className="mt-6 leading-7">
            <p className="mb-6">
              Hi, I&#39;m Vansh Kathnawal, B-tech Final Year student IIT Indore. I&#39;m a Full Stack web developer from
              Madhya Pradesh India. I Started my journey of programming in my Second year of college 
              Initially i only used to do problem solving but then in 2023 i discovered ODIN PROJECT
              which changed my life completely as it really opened the gates of the world of development for me.
              I learned everything from scratch from HTML , CSS , Javascript , Node and much more , and made several great projects in the journey.
            </p>
            <p className="mb-6">
              I am also a Competitive programmer and have a good grasp of Data Structures and Algorithms  ,{" "}
              <a
                href="https://codeforces.com/profile/vk0942"
                rel="noreferrer"
                target="_blank"
                className="text-green underline font-medium dark:text-mustard"
              >
                pupil
              </a>{" "}
              on Codeforces, 
              other than programming , I have a great Interest in LINUX based Operating Systems and love to use Command line tools .
              I have a dream of using Arch linux as my primary operating system.
            </p>
            <p className="mb-6">
              Other than Coding my hobbies are to play Football
              , Table Tennis , playing Drums , and congo , and i also love to watch Anime as well.
            </p>
            <p className="mb-6">
              Feel free to reach out and say hello at:{" "}
              <a
                href="mailto:vanshkathnawal0942@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="text-green underline font-medium dark:text-mustard"
              >
                vanshkathnawal0942@gmail.com
              </a>
            </p>
          </div>
          <Skills />
        </section>
      </>
    </Layout>
  );
}
