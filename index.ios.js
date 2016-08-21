import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import formatTime from 'minutes-seconds-milliseconds'

import StartStopButton from './App/components/StartStopButton'
import LapButton from './App/components/LapButton'
import Lap from './App/components/Lap'

class ReactNativeStopwatch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }
    this.handleStartPress = this.handleStartPress.bind(this)
    this.handleLapPress = this.handleLapPress.bind(this)
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>
              {formatTime(this.state.timeElapsed)}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            <StartStopButton running={this.state.running} handleStartPress={this.handleStartPress}/>
            <LapButton handleLapPress={this.handleLapPress} />
          </View>
        </View>

        <View style={styles.footer}>
          {this.state.laps.map((time, index) => <Lap key={index} index={index} time={time} />)}
        </View>
      </View>
    )
  }

  handleStartPress () {
    if (this.state.running) {
      clearInterval(this.interval)
      this.setState({ running: false })
    } else {
      this.setState({ startTime: new Date() })
      this.interval = setInterval(() => {
        this.setState({
          timeElapsed: new Date() - this.state.startTime,
          running: true
        })
      }, 30)
    }
  }

  handleLapPress () {
    const lap = this.state.timeElapsed

    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    })
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
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  }
})

AppRegistry.registerComponent('ReactNativeStopwatch', () => ReactNativeStopwatch)
