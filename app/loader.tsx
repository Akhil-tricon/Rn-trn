import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native'

export default function Loader() {
    type Movie = {
        id: number,
        title: string,
        poster: any,
        director: string,
        writer: string
    }

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://fooapi.com/api/movies')
                .then(res => res.json())
                .then(data => {
                    setMovie(data.data)
                    setLoading(false)
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                })
        }, 2000)

    }, [])

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            padding: 50
        },
        box: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            width: 300,
            backgroundColor: '#52f55a',
            padding: 30,
            margin: 5,
            borderRadius: 15,
            alignContent: 'center'
        },
        fonts: {
            fontSize: 20,
            textAlign: 'center',
            fontStyle: 'italic',
            fontWeight: 'bold'
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        writer: {
            color: 'green',
            fontWeight: 'medium',
        }

    })
    return (
        <ScrollView>
            <Text style={styles.fonts}>Movies List</Text>
            <View style={styles.container}>
                {loading ? (<ActivityIndicator size="large" color="#52f55a" />) : (movie.map((item: Movie) => (
                    <View key={item.id} style={styles.box}>
                        <Image source={{ uri: item.poster }} style={{ width: 70, height: 100 }} resizeMode="cover" />
                        <View style={{ height: 1, backgroundColor: 'black', width: '100%', marginVertical: 10, }} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>{item.director}</Text>
                        <Text style={styles.writer}>{item.writer}</Text>
                    </View>
                )
                ))
                }
            </View>
        </ScrollView>
    )
}