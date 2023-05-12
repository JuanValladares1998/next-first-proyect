import Prompt from "@/models/prompt";

export const GET = async (req, { params }) => {
  try {
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Error al obtener los prompts", { status: 500 });
  }
};
