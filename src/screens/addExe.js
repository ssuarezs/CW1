import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, FlatList } from 'react-native';
import { Input, ButtonA, ButtonB, ExImage } from '../components'

import styles from './styles'
const {width, height} = Dimensions.get('screen');

const exercises = [
    { name: 'Push_Ups', id: '1', },
    { name: 'Dips',     id: '2', },
    { name: 'Pull_Ups', id: '3', },
    { name: 'Rows',     id: '4', },
    { name: 'Squats', id: '5', },
    { name: 'Sprints',  id: '6', },
    { name: 'Core',    id: '7', },
    { name: 'HandStand',id: '8', },
]

export default ({
    hSets,
    hReps,
    hMeas,
    hName,
    close,
    acept,
}) => {

    const [meas, setMeas] = React.useState(true)
    const [exerId, setExerId] = React.useState('0')

    const Measure = value => {
        setMeas(value)
        if(value){
            hMeas('REPS')
        }else{
            hMeas('SEG')
        }
    }

    const handleName = t => {
        setExerId(t.item.id)
        hName(t.item.name)
    }

    return (
    <View style={styles.center}>
        <Text/>
        <Text style={styles.subtitle}>ELIGE EL EJERCICIO</Text>
            <View style={{height: 70, marginVertical: 20, borderRadius: 10, backgroundColor: '#AAA'}}>
              <FlatList
                horizontal
                style={styles.list}
                data={exercises}
                showsHorizontalScrollIndicator={false}
                keyExtractor={x => x.id}
                renderItem={({item}) =>
                    <View>
                    { item.id === exerId ?
                        <ExImage title={item.name} fixed/>
                    :
                        <ExImage title={item.name} onPress={()=>handleName({item})}/>
                    }
                    </View>
                }
              />
            </View>
        <View style={styles.row}>
            <Input
                title="#Sets"
                onChangeText={hSets}
                keyboardType="numeric"
            />
            <Input
                title="#Reps"
                onChangeText={hReps}
                keyboardType="numeric"
            />
        </View>
        <Text/>
        <Text style={styles.subtitle}>ELIGE LA MODALIDAD</Text>
        <View style={styles.row}>
            <ButtonB onPress={()=>Measure(true)} title="REPS" fixed={meas} />
            <ButtonB onPress={()=>Measure(false)} title="SEG" fixed={!meas} />
        </View>
        <Text/>
        <View style={styles.row}>
            <ButtonA onPress={close} title="CANCELAR" color="#FFD3B4" />
            <ButtonA onPress={acept} title="ACEPTAR" color="#D5ECC2" />
        </View>
    </View>
    );
}


