import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#393E46',
        paddingTop: height/15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        alignSelf: 'stretch',
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    box: {
        flexDirection: 'row',
        backgroundColor: '#222831',
        marginVertical: 20,
        borderRadius: 40,
        padding: 10,
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        height: 70,
        width: width,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#EEEEEE',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#EEEEEE',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#EEEEEE',
    },
    paragraph : {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#EEEEEE',
    },
    show: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    square: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#393E46',
        borderRadius: 10,
        height: 35,
        width: 90,
    },
});

export default styles
