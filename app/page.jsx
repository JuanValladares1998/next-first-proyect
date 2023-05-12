import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Descubre y Busca
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Prompts Potenciadores de IA
        </span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quis ex
        rem unde et dolore incidunt deleniti, culpa enim tempora? Nihil tenetur
        ipsa quos nobis porro repudiandae, est enim cumque?
      </p>

      <Feed />
    </section>
  );
};

export default Home;
