import Prompt from "@/models/prompt";

export const GET = async (req) => {
  try {
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Error al obtener los prompts", { status: 500 });
  }
};
