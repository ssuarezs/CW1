import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList, Alert } from 'react-native';
import { AbsButton, DelButton, AddListButton, ItemExe, Modal } from '../components'
import AddExe from './addExe'
import DetSes from './detailSes'
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { fetchSes, deleteSes, saveSes } from '../reducers/sesiones'

const {width, height} = Dimensions.get('screen');

const AddSession = ({navigation, lista, fetchSes, saveSes}) => {

    const [sets, setSets] = React.useState(0)
    const [reps, setReps] = React.useState(0)
    const [meas, setMeas] = React.useState('REPS')
    const [name, setName] = React.useState('PushUps')


    const hanSets = numb => setSets(numb)
    const hanReps = numb => setReps(numb)
    const hanMeas = text => setMeas(text)
    const hanName = text => setName(text)

    const [time, setTime] = React.useState(15)
    const [level, setLevel] = React.useState('')
    const [feel, setFeel] = React.useState('')
    const [sesName, setSesName] = React.useState('Sesion A')

    const hanTime = numb => setTime(numb)
    const hanLevel = text => setLevel(text)
    const hanFeel = text => setFeel(text)
    const hanSesName = text => setSesName(text)

    const [mVisib, setMVisib] = React.useState(false)
    const [m2Visib, setM2Visib] = React.useState(false)

    const [listaExer, setListE] = React.useState([])

    const closeModal = () => {
        setSets(0)
        setReps(0)
        setMeas('REPS')
        setName('PushUps')
        setMVisib(false)
    }

    const closeModal2 = () => {
        setM2Visib(false)
    }

    const newElement = () => {
        let lala = [...listaExer]
        if( meas && name && reps && sets ){
            lala.push({
                meas: meas,
                reps: reps,
                sets: sets,
                name: name,
                id: Math.random().toString(36),
            })
            setListE(lala)
            closeModal()
        }else{ Alert.alert('Debes elegir un ejercicio y llenar todos los campos') }
    }

    const deleteElement = (id_del) => {
        let lala = [...listaExer]
        lala.forEach((item, index) =>{
            if(item.id === id_del){lala.splice(index,1)}
        })
        setListE(lala)
    }

    const getDate = () => {
        const day = new Date().getDate()
        const month = new Date().getMonth()
        const year = new Date().getFullYear()
        const date = `${day}-${month}-${year}`
        return date
    }

    const getVol = () => {
        let volume = 0
        listaExer.forEach((t) => {
            volume = volume + t.sets*t.reps
        })
        return volume
    }

  const submitSession = async () => {
    if(feel && level && name){
        const newPunt = {
          exerc: listaExer,
          feel: feel,
          level: level,
          vol: getVol(),
          time: time,
          date: getDate(),
          name: sesName,
          key: Math.random().toString(36)
        }
        saveSes(newPunt)
        navigation.navigate('Main')
    }else{ Alert.alert('Debes completar las opciones') }
  }

   return <View style={styles.container}>
        <Modal visibility={m2Visib}>
            <DetSes
                hLevel={hanLevel}
                hFeel={hanFeel}
                hTime={hanTime}
                hSesN={hanSesName}
                close={()=>closeModal2()}
                acept={()=>submitSession()}
            />
        </Modal>
        <Modal visibility={mVisib}>
            <AddExe
                hSets={hanSets}
                hReps={hanReps}
                hMeas={hanMeas}
                hName={hanName}
                close={()=>closeModal()}
                acept={()=>newElement()}
            />
        </Modal>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()} >
                <Entypo name="chevron-left" size={35} color="#555" />
            </TouchableOpacity>
            <Text >AGREGANDO SESION NUEVA</Text>
            <Entypo name="chevron-left" size={35} color="white" />
        </View>
        <View style={styles.line}>
            <Text>Agrega un ejercicio con {':  '}</Text>
            <Entypo name="add-to-list" size={30} color="#555" />
        </View>
        <View style={{alignSelf: 'stretch'}}>
            <View>
              <FlatList
                style={styles.list}
                data={listaExer}
                showsVerticalScrollIndicator={false}
                keyExtractor={x => x.id}
                renderItem={({item}) =>
                    <ItemExe
                        item={item}
                        del={() => deleteElement(item.id)}
                        DelO
                    />
                }
              />
            </View>
        </View>
        <AbsButton color={'#ccc'} onPress={()=>setM2Visib(true)}>
            <Entypo name="check" size={50} color="white" />
        </AbsButton>
        <AddListButton onPress={()=> setMVisib(true)} />
    </View>
}

const mapStateToProps = state => {
    return { lista: state.sesiones }
}

const mapDispatchToProps = dispatch => ({
    fetchSes: () => dispatch(fetchSes()),
    saveSes: (ses) => dispatch(saveSes(ses)),
    deleteSes: (itemKey) => dispatch(deleteSes(itemKey)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddSession)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        paddingTop: height/15,
    },
    list: {
        alignSelf: 'stretch',
        height: height*0.75,
        margin: 10,
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        width: width,
        height: width*0.14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
});
