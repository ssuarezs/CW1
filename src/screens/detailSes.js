import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, FlatList } from 'react-native';
import { Input, ButtonA, ButtonB } from '../components'

const {width, height} = Dimensions.get('screen');


const level = [
    { name: 'begginer', id: '1', },
    { name: 'medium',     id: '2', },
    { name: 'advanced', id: '3', },
]
const feels = [
    { name: 'excellent', id: '1', },
    { name: 'good',     id: '2', },
    { name: 'regular', id: '3', },
    { name: 'bad',     id: '4', },
    { name: 'dead',id: '5', },
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
        <Text>Nombre de la Sesion </Text>
            <Input onChangeText={hSesN}/>
            <Input
                title="Duracion (minutos)"
                onChangeText={hTime}
                keyboardType="numeric"
            />
        <Text>Nivel </Text>
            <View style={{height: height*0.1,}}>
              <FlatList
                horizontal
                style={styles.list}
                data={level}
                showsHorizontalScrollIndicator={false}
                keyExtractor={x => x.id}
                renderItem={({item}) =>
                    <View>
                    { item.id === levelId ?
                        <ButtonB title={item.name} fixed/>
                    :
                        <ButtonB title={item.name} onPress={()=>handleLevel({item})}/>
                    }
                    </View>
                }
              />
            </View>
        <Text>Estado </Text>
            <View style={{height: height*0.1,}}>
              <FlatList
                horizontal
                style={styles.list}
                data={feels}
                showsHorizontalScrollIndicator={false}
                keyExtractor={x => x.id}
                renderItem={({item}) =>
                    <View>
                    { item.id === feelId ?
                        <ButtonB title={item.name} fixed/>
                    :
                        <ButtonB title={item.name} onPress={()=>handleFeel({item})}/>
                    }
                    </View>
                }
              />
            </View>
        <View style={styles.row}>
            <ButtonA onPress={close} title="CANCELAR" />
            <ButtonA onPress={acept} title="ACEPTAR" />
        </View>
        <Text> </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    list: {
        alignSelf: 'stretch',
        margin: 10,
    },
    row: {
        flexDirection: 'row',
    }
});

