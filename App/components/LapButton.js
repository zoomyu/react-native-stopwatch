import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

class LapButton extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <TouchableHighlight
        underlayColor='gray'
        onPress={this.props.handleLapPress}
        style={styles.button}>
        <Text>
          Lap
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
  }
})

LapButton.propTypes = {
  handleLapPress: PropTypes.func.isRequired
}

export default LapButton
