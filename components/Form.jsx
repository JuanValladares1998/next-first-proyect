import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} un Post</span>
      </h1>
      <p className="desc text-left max-w-full">
        {type} y comparte increibles prompts con el mundo, y deja tu imaginación
        volar con cualquier plataforma impulsada por IA.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            You prompt IA
          </span>
          <textarea
            required
            value={post.prompt}
            onChange={(e) =>
              setPost({
                ...post,
                prompt: e.target.value,
              })
            }
            placeholder="Escribe aquí tu prompt..."
            className="form_textarea resize-none"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Etiqueta
            <span className="font-normal">
              {" "}
              (#product, #idea, #desarrolloweb)
            </span>
          </span>
          <input
            required
            value={post.tag}
            onChange={(e) =>
              setPost({
                ...post,
                tag: e.target.value,
              })
            }
            placeholder="#etiqueta"
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href={"/"} className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
