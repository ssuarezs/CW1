import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { fetchSes, deleteSes } from '../reducers/sesiones'

import { AbsButton, ItemSes } from '../components'
import { Entypo } from '@expo/vector-icons';
import styles from './styles'

const Main = ({navigation, lista, fetchSes}) => {

   React.useEffect(() => {
    fetchSes()
  }, [])

   return <View style={styles.container}>
       <View style={styles.header}>
            <Entypo name="chevron-left" size={35} color="#393E46" />
            <Text style={styles.headerText}>CALISTHENICS WAY</Text>
            <Entypo name="chevron-left" size={35} color="#393E46" />
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
        <AbsButton color={'#FFD3B4'} onPress={()=> navigation.navigate('AddSe')}>
            <Entypo name="plus" size={50} color="#536162" />
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

