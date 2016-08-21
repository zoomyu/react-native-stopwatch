import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

class StartStopButton extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const buttonStyle = this.props.running ? styles.stopButton : styles.startButton
    return (
      <TouchableHighlight
        underlayColor='gray'
        onPress={this.props.handleStartPress}
        style={[styles.button, buttonStyle]}>
        <Text>
          {this.props.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  }
})

StartStopButton.propTypes = {
  running: PropTypes.bool.isRequired,
  handleStartPress: PropTypes.func.isRequired
}

export default StartStopButton
