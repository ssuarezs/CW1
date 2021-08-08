import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { AbsButton, DelButton, AddListButton, ItemExe } from '../components'
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { fetchSes, deleteSes } from '../reducers/sesiones'

const {width, height} = Dimensions.get('screen');

const AddSession = ({navigation, lista, fetchSes, deleteSes}) => {

    const data = navigation.getParam('item')

   return <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()} >
                <Entypo name="chevron-left" size={35} color="#555" />
            </TouchableOpacity>
            <Text >{data.name}</Text>
        <TouchableOpacity  onPress={()=> {
            deleteSes(data.key)
            fetchSes()
            navigation.navigate('Main')
        }}>
                <Entypo name="cup" size={30} color="#555" />
            </TouchableOpacity>
        </View>
            <Text >Fecha {data.date}</Text>
            <Text >Duracion {data.time}</Text>
            <Text >Nivel {data.level}</Text>
            <Text >Estado {data.feel}</Text>
        <View style={{alignSelf: 'stretch'}}>
            <View>
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
        margin: 10,
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
