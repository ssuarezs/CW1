import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, FlatList } from 'react-native';
import { Input, ButtonA, ButtonB } from '../components'

const {width, height} = Dimensions.get('screen');

const exercises = [
    { name: 'Push-Ups', id: '1', },
    { name: 'Dips',     id: '2', },
    { name: 'Pull-Ups', id: '3', },
    { name: 'Rows',     id: '4', },
    { name: 'Plyo-Squats', id: '5', },
    { name: 'Sprints',  id: '6', },
    { name: 'L-sit',    id: '7', },
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
        <Text>Elige el ejercicio</Text>
            <View style={{height: height*0.1,}}>
              <FlatList
                horizontal
                style={styles.list}
                data={exercises}
                showsHorizontalScrollIndicator={false}
                keyExtractor={x => x.id}
                renderItem={({item}) =>
                    <View>
                    { item.id === exerId ?
                        <ButtonB title={item.name} fixed/>
                    :
                        <ButtonB title={item.name} onPress={()=>handleName({item})}/>
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
        <Text>Elige la modalidad del ejercicio</Text>
        <View style={styles.row}>
            <ButtonB onPress={()=>Measure(true)} title="REPS" fixed={meas} />
            <ButtonB onPress={()=>Measure(false)} title="SEG" fixed={!meas} />
        </View>
        <View style={styles.row}>
            <ButtonA onPress={close} title="CANCELAR" />
            <ButtonA onPress={acept} title="ACEPTAR" />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        alignSelf: 'stretch',
        margin: 10,
    },
    row: {
        flexDirection: 'row',
    }
});

