import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { Entypo } from '@expo/vector-icons';
import { fetchSes, deleteSes } from '../reducers/sesiones'

const {width, height} = Dimensions.get('screen');

const Main = ({navigation, lista, fetchSes}) => {

    React.useEffect(() => {
        fetchSes()
    }, [])


   return <View style={styles.container}>
       <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()} >
            <Entypo name="chevron-left" size={35} color="#206a5d" />
            </TouchableOpacity>
            <Text >PRINCIPAL</Text>
            <Entypo name="chevron-left" size={35} color="white" />
       </View>
       <View style={{alignSelf: 'stretch'}}>
       {lista.data ?
            <View style={styles.containList}>
              <FlatList
                style={styles.list}
                data={lista.data}
                showsVerticalScrollIndicator={false}
                keyExtractor={x => x.name}
                renderItem={({item}) =>
                  <View key={item.key} style={{borderBottomWidth:2, borderColor: '#eee', padding: 10}}>
                    <Text>{item.name}</Text>
                    <Text>VOL {':'} {item.vol}</Text>
                  </View>
                }
              />
            </View>
          :
        <Text style={sty.subtitle}>
          Aun no has guardado ningun punto
        </Text>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
