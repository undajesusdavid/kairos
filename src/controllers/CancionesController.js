import supabase from "../utils/supabase";

export async function getCanciones(callback) {
  const { data } = await supabase
    .from("canciones")
    .select("id,nombre,interpretes(nombre)");
  const dataStructure = data.map((data) => {
    return {
      id: data.id,
      nombre: data.nombre,
      interprete: data.interpretes.nombre,
    };
  });
  callback(dataStructure);
}

export async function getCancion(id, callback) {
  const { data } = await supabase
    .from("canciones")
    .select(
      "id,nombre,link,interpretes(nombre),generos(nombre),"+
      "canciones_categorias(categorias(nombre)),"+
      "canciones_vocalistas(nombre:vocalista_id(nombre),tonalidad)"
    )
    .eq("id", id);
  const dataStructure = {
    id: data[0].id,
    nombre: data[0].nombre,
    interprete: data[0].interpretes.nombre,
    genero: data[0].generos.nombre,
    categorias: data[0].canciones_categorias.map((x) => x.categorias.nombre),
    vocalistas: data[0].canciones_vocalistas.map((x) => ({...x, nombre: x.nombre.nombre}) ),
    link: data[0].link,
  };
  callback(dataStructure);
  console.log(dataStructure);
}
