import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { AbsButton, ItemSes } from '../components'
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
            <Entypo name="chevron-left" size={35} color="white" />
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
                keyExtractor={x => x.key}
               renderItem={({item}) =>
                    <ItemSes
                        item={item}
                        onPress={()=> navigation.navigate('LookSe', {item: item})}
                    />
               }
              />
            </View>
          :
        <Text style={sty.subtitle}>
          Aun no has guardado ningun punto
        </Text>
        }
       </View>
        <AbsButton color={'#ccc'} onPress={()=> navigation.navigate('AddSe')}>
            <Entypo name="plus" size={50} color="white" />
        </AbsButton>
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
