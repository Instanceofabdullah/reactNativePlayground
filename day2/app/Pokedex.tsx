import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

interface Pokemon {
  name: string,
  img: string,
  imgBack: string
}

export default function Pokedex() {

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
      const data = await response.json();

      const pokeInfo = await Promise.all(
        data.results.map(async (pokemon: any) => {
          const res = await fetch(pokemon.url);
          const info = await res.json();
          return {
            name: pokemon.name,
            img: info.sprites.front_default,
            imgBack: info.sprites.back_default
          }
        })
      )

      console.log(pokeInfo);
      setPokemon(pokeInfo)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView style={styles.container}>
      {pokemon ? (
        pokemon.map((poke) => (
          <View key={poke.name} style={styles.card}>
            <View style={{ flexDirection: "row", gap: "5px"}}>
              <Image
                source={{ uri: poke.img }}
                style={styles.image}
              />
              <Image
                source={{ uri: poke.imgBack }}
                style={styles.image}
              />
            </View>
            <Text style={styles.name}>{poke.name}</Text>
          </View>
        ))
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Android shadow
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
