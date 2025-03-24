import supabase from "../utils/supabase";

export async function getCategorias(callback) {
  const { data, error } = await supabase
    .from("categorias")
    .select("id,nombre");
    callback(data)
}