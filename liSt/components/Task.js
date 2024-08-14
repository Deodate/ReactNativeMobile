import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.rightSection}>
                <Text style={styles.completedText}>Completed Task</Text>
                <View style={styles.circlar}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        fontSize: 16,
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    completedText: {
        marginRight: 7,  
    },
    circlar: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#55BCF6',
    },
});

export default Task;
