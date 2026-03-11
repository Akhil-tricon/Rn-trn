import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

type Movie = {
  id: string;
  title: string;
  year: string;
  rating: string;
  poster: string;
};

export default function Movies() {

  const [movies, setMovies] = useState<Movie[]>([
    {
      id: "1",
      title: "Inception",
      year: "2010",
      rating: "8.8",
      poster: "https://m.media-amazon.com/images/I/51zUbui+gbL.jpg"
    },
    {
      id: "2",
      title: "Interstellar",
      year: "2014",
      rating: "8.6",
      poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
    },
    {
     id: "3",
      title: "Interstellar",
      year: "2014",
      rating: "8.6",
      poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
    },
    {
         id: "4",
      title: "Interstellar",
      year: "2014",
      rating: "8.6",
      poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
    },

    {
      id: "5",
      title: "The Dark Knight",
      year: "2008",
      rating: "9.0",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg"
    }
  ]);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Movie List</Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Image
              source={{ uri: item.poster }}
              style={styles.poster}
            />

            <View style={styles.info}>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text>Year: {item.year}</Text>
              <Text>Rating:  {item.rating}</Text>
            </View>

          </View>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    flexDirection: "row",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f5f5f5"
  },

  poster: {
    width: 80,
    height: 120,
    borderRadius: 8
  },

  info: {
    marginLeft: 15,
    justifyContent: "center"
  },

  movieTitle: {
    fontSize: 18,
    fontWeight: "bold"
  }

});