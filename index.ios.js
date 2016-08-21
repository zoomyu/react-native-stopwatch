import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

class ReactNativeStopwatch extends Component {
  startStopButton () {
    return (
      <View style={styles.container}>
        <Text>
          Start
        </Text>
      </View>
    )
  }

  lapButton () {
    return (
      <View>
        <Text>
          Lap
        </Text>
      </View>
    )
  }

  render () {
    return (
      <View>
        <Text>
          00:00:00
        </Text>
        {this.startStopButton()}
        {this.lapButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

AppRegistry.registerComponent('ReactNativeStopwatch', () => ReactNativeStopwatch)
