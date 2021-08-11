import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { AbsButton, DelButton, AddListButton, ItemExe, Grade } from '../components'
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { fetchSes, deleteSes } from '../reducers/sesiones'

import styles from './styles'
const {width, height} = Dimensions.get('screen');

const Show = (t) => {
    return <View style={styles.show} >
        <Text style={styles.subtitle}>{t.title}</Text>
        <View style={styles.square} >
            <Text style={styles.paragraph}>{t.value}</Text>
        </View>
    </View>
}
const AddSession = ({navigation, lista, fetchSes, deleteSes}) => {

    const data = navigation.getParam('item')

    const deleteSession = () => {
            deleteSes(data.key)
            fetchSes()
            navigation.navigate('Main')
    }

   return <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()} >
                <Entypo name="chevron-left" size={35} color="#EEE" />
            </TouchableOpacity>
            <View style={{width: width*0.5}}>
            <Text style={{...styles.headerText, fontSize: 16}}>{data.name}</Text>
            </View>
            <TouchableOpacity  onPress={()=>deleteSession() }>
                <Entypo name="cup" size={30} color="#EEE" />
            </TouchableOpacity>
        </View>
        <View style={styles.box}>
            <View style={{flex:3}}>
                <Show title='Fecha' value={data.date}/>
                <Show title='Duracion' value={data.time}/>
                <Show title='Volumen' value={data.vol}/>
            </View>
            <View style={{...styles.center, flex:2}}>
                <Text style={styles.paragraph} >NIVEL</Text>
                <Grade title={data.level}/>
                <Text style={styles.paragraph} >ESTADO</Text>
                <Grade title={data.feel}/>
            </View>
        </View>
        <View style={{alignSelf: 'stretch', height: height*0.55}}>
              <FlatList
                style={styles.list}
                data={data.exerc}
                showsVerticalScrollIndicator={false}
                keyExtractor={x => x.id}
                renderItem={({item}) =>
                    <ItemExe item={item} DelO={false} />
                }
              />
        </View>
    </View>
}

const mapStateToProps = state => {
    return { lista: state.sesiones }
}

const mapDispatchToProps = dispatch => ({
    fetchSes: () => dispatch(fetchSes()),
    deleteSes: (itemKey) => dispatch(deleteSes(itemKey)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddSession)

