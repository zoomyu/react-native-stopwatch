import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import formatTime from 'minutes-seconds-milliseconds'

class Lap extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { index, time } = this.props

    return (
      <View style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(time)}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  }
})

Lap.propTypes = {
  index: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
}

export default Lap
