import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

class ReactNativeStopwatch extends Component {
  startStopButton () {
    return (
      <View>
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
        <View>
          <View>
            <Text>
              00:00:00
            </Text>
          </View>
          <View>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View>
          <Text>
            I am a list of Laps
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  }
})

AppRegistry.registerComponent('ReactNativeStopwatch', () => ReactNativeStopwatch)
