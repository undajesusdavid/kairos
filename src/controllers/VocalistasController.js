import supabase from "../utils/supabase";

export async function getVocalistas(callback) {
  const { data } = await supabase
    .from("vocalistas")
    .select("id,nombre");
    callback(data)
}