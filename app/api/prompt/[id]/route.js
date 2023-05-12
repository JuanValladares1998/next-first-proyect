import Prompt from "@/models/prompt";

export const GET = async (req, { params }) => {
  try {
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt no encontrado", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Error al obtener el prompt", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  try {
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt)
      return new Response("Prompt no encontrado", { status: 404 });
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Error al actualizar el prompt", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const prompt = await Prompt.findByIdAndRemove(params.id);
    if (!prompt) return new Response("Prompt no encontrado", { status: 404 });
    return new Response("Prompt eliminado correctamente", { status: 200 });
  } catch (error) {
    return new Response("Error al eliminar el prompt", { status: 500 });
  }
};
