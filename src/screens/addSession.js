import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList, Alert } from 'react-native';
import { AbsButton, DelButton, AddListButton, ItemExe, Modal } from '../components'
import AddExe from './addExe'
import DetSes from './detailSes'
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { fetchSes, deleteSes, saveSes } from '../reducers/sesiones'

import styles from './styles'
const {width, height} = Dimensions.get('screen');

const AddSession = ({navigation, lista, fetchSes, saveSes}) => {

    // add Exercise
    const [sets, setSets] = React.useState(0)
    const [reps, setReps] = React.useState(0)
    const [meas, setMeas] = React.useState('REPS')
    const [name, setName] = React.useState('')

    // add Session
    const [time, setTime] = React.useState(15)
    const [level, setLevel] = React.useState('')
    const [feel, setFeel] = React.useState('')
    const [sesName, setSesName] = React.useState('')

    // handle variables
    const handle = set => item => set(item)

    // set modals visibiliy
    const [mVisib, setMVisib] = React.useState(false)
    const [m2Visib, setM2Visib] = React.useState(false)

    // list Session's exercises
    const [listaExer, setListE] = React.useState([])

    const closeModal = () => {
        setSets(0)
        setReps(0)
        setMeas('REPS')
        setName('')
        setMVisib(false)
        setM2Visib(false)
    }

    const newElement = () => {
        let newList = [...listaExer]
        let id = Math.random().toString(36)
        if( name && reps && sets ){
            newList.push({ meas, reps, sets, name, id, })
            setListE(newList)
            closeModal()
        }else{ Alert.alert('Debes elegir un ejercicio y llenar todos los campos') }
    }
    const deleteElement = (id_del) => {
        let newList = [...listaExer]
        newList.forEach((item, index) =>{
           if(item.id === id_del){newList.splice(index,1)}
        })
        setListE(newList)
    }

    const getDate = () => {
        const day = new Date().getDate()
        const month = new Date().getMonth()
        const year = new Date().getFullYear()
        return `${day}-${month}-${year}`
    }
    const getVol = () => {
        let volume = 0
        listaExer.forEach((t) => volume += t.sets*t.reps)
        return volume
    }

  const submitSession = async () => {
      console.log(feel, level, sesName)
    if(feel && level && sesName){
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
        closeModal()
        navigation.navigate('Main')
    }else{ Alert.alert('Debes completar las opciones') }
  }

   return <View style={styles.container}>
        <Modal visibility={m2Visib}>
            <DetSes
                hLevel={handle(setLevel)}
                hFeel={handle(setFeel)}
                hTime={handle(setTime)}
                hSesN={handle(setSesName)}
                close={()=>closeModal()}
                acept={()=>submitSession()}
            />
        </Modal>
        <Modal visibility={mVisib}>
            <AddExe
                hSets={handle(setSets)}
                hReps={handle(setReps)}
                hMeas={handle(setMeas)}
                hName={handle(setName)}
                close={()=>closeModal()}
                acept={()=>newElement()}
            />
        </Modal>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()} >
                <Entypo name="chevron-left" size={35} color="#EEE" />
            </TouchableOpacity>
            <View style={{width: width*0.5}}>
            <Text style={styles.title}>AGREGANDO SESION NUEVA</Text>
            </View>
            <Entypo name="chevron-left" size={35} color="#393E46" />
        </View>
        <View style={styles.line}>
            <Text style={styles.paragraph}>Agrega un ejercicio con {':  '}</Text>
            <Entypo name="add-to-list" size={30} color="#eee" />
        </View>
        <View style={{alignSelf: 'stretch'}}>
            <View>
              <FlatList
                style={styles.list}
                data={listaExer}
                showsVerticalScrollIndicator={false}
                keyExtractor={x => x.id}
                renderItem={({item}) =>
                  <ItemExe item={item} DelO del={() => deleteElement(item.id)}/>
                }
              />
            </View>
        </View>
        <AbsButton color={'#D5ECC2'} onPress={()=>setM2Visib(true)}>
            <Entypo name="check" size={50} color="#536162" />
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

