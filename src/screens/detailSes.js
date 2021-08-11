import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, FlatList } from 'react-native';
import { Input, ButtonA, ButtonB, Grade } from '../components'

import styles from './styles'
const {width, height} = Dimensions.get('screen');


const level = [
    { name: 'inicial', id: '1', },
    { name: 'medio',     id: '2', },
    { name: 'avanzado', id: '3', },
]
const feels = [
    { name: 'excelente', id: '1', },
    { name: 'bueno',     id: '2', },
    { name: 'regular', id: '3', },
    { name: 'malo',     id: '4', },
    { name: 'muerto',id: '5', },
]

export default ({
    hLevel,
    hFeel,
    hTime,
    hSesN,
    close,
    acept,
}) => {

    const [feelId, setFeelId] = React.useState('0')
    const [levelId, setLevelId] = React.useState('0')

    const handleFeel = t => {
        setFeelId(t.item.id)
        hFeel(t.item.name)
    }
    const handleLevel = t => {
        setLevelId(t.item.id)
        hLevel(t.item.name)
    }

    return (
    <View style={styles.center}>
        <Text> </Text>
            <Input
                title="Nombre de la Sesion "
                onChangeText={hSesN}
            />
            <Input
                title="Duracion (minutos)"
                onChangeText={hTime}
                keyboardType="numeric"
            />
        <Text/>
        <Text style={styles.subtitle}>¿ Cual fue el nivel de Dificultad ?</Text>
            <View style={{height: 60, marginVertical: 20}}>
              <FlatList
                horizontal
                style={styles.list}
                data={level}
                showsHorizontalScrollIndicator={false}
                keyExtractor={x => x.id}
                renderItem={({item}) =>
                    <View>
                    { item.id === levelId ?
                        <Grade title={item.name} fixed/>
                    :
                        <Grade title={item.name} onPress={()=>handleLevel({item})}/>
                    }
                    </View>
                }
              />
            </View>
        <Text style={styles.subtitle}>¿ Como te sentiste durante la sesion ?</Text>
            <View style={{height: 60, marginVertical: 20}}>
              <FlatList
                horizontal
                style={styles.list}
                data={feels}
                showsHorizontalScrollIndicator={false}
                keyExtractor={x => x.id}
                renderItem={({item}) =>
                    <View>
                    { item.id === feelId ?
                        <Grade title={item.name} fixed/>
                    :
                        <Grade title={item.name} onPress={()=>handleFeel({item})}/>
                    }
                    </View>
                }
              />
            </View>
        <Text/>
        <View style={styles.row}>
            <ButtonA onPress={close} title="CANCELAR" color="#FFD3B4" />
            <ButtonA onPress={acept} title="ACEPTAR" color="#D5ECC2" />
        </View>
    </View>
    );
}

