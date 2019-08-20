import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckboxCustom from 'react-native-checkboxcustom'


class Question extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let values = ["A", "B", "C", "D", "E", "F", "G", "H"]
		let options = []
		let i = 0
		Object.values(this.props.ob.options).map((option) => {
			let internalOb = {}
			internalOb["label"] = option
			internalOb["value"] = values[i]
			options.push(internalOb)
			i += 1
		})
		return(
			<View>
				<Text>{ this.props.ob.question } </Text>
				<CheckboxCustom
				  options={ options }
				  maxSelectedOptions={1}
				  onSelection={(option)=>console.log(option + ' was selected!')}
				  contentContainerStyle={{ flexDirection: 'column' }}
				/>
			</View>
		)
	}
}

export default Question